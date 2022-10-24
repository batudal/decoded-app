import { Client } from '@notionhq/client';
import { Client as redis_Client } from 'redis-om';
import * as dotenv from 'dotenv';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
dotenv.config();

const redis_client = new redis_Client();

export const load: PageServerLoad = async ({ params }) => {
	//@ts-ignore
	let response = JSON.parse(await getJSON(params.slug));
	if (response == null) {
		throw redirect(307, '/articles');
	}
	const notion = new Client({ auth: process.env.NOTION_KEY });
	let objects: any[] = [];
	let title = '';
	let category = '';
	//@ts-ignore
	for (let i = 0; i < response.results.length; i++) {
		//@ts-ignore
		if (response.results[i].type == 'paragraph' && response.results[i].paragraph.rich_text[0]) {
			objects.push({
				type: 'p',
				//@ts-ignore
				content: response.results[i].paragraph.rich_text[0].plain_text
			});
			//@ts-ignore
		} else if (response.results[i].type == 'heading_1') {
			//@ts-ignore
			title = response.results[i].heading_1.rich_text[0].plain_text;
			//@ts-ignore
		} else if (response.results[i].type == 'heading_3') {
			//@ts-ignore
			objects.push({
				type: 'h2',
				//@ts-ignore
				content: response.results[i].heading_3.rich_text[0].plain_text
			});
			//@ts-ignore
		} else if (response.results[i].type == 'toggle') {
			//@ts-ignore
			category = response.results[i].toggle.rich_text[0].plain_text;
			//@ts-ignore
		} else if (response.results[i].type == 'image') {
			objects.push({
				type: 'img',
				//@ts-ignore
				content: response.results[i].image.file.url
			});
			//@ts-ignore
		} else if (response.results[i].type == 'to_do') {
			objects.push({
				type: 'to_do',
				//@ts-ignore
				content: response.results[i].to_do.rich_text[0].plain_text
			});
			//@ts-ignore
		} else if (response.results[i].type == 'callout' && response.results[i].callout.rich_text[1]) {
			objects.push({
				type: 'callout',
				//@ts-ignore
				content: response.results[i].callout.rich_text[0].plain_text,
				//@ts-ignore
				linkText: response.results[i].callout.rich_text[1].plain_text,
				//@ts-ignore
				url: response.results[i].callout.rich_text[1].href
			});
			//@ts-ignore
		} else if (response.results[i].type == 'code') {
			objects.push({
				type: 'code',
				//@ts-ignore
				content: response.results[i].code.rich_text[0].plain_text
			});
		}
	}
	let related_posts = await getRelatedPosts(params.slug);
	return {
		objects,
		title,
		category,
		related_posts
	};
};

const getSerializedJSON = async (databaseId: string) => {
	const notion_client = new Client({ auth: process.env.NOTION_KEY });
	const response = await notion_client.blocks.children.list({ block_id: databaseId });
	return JSON.stringify(response);
};

const getRelatedPosts = async (slug: string) => {
	if (!redis_client.isOpen()) {
		await redis_client.open(process.env.REDIS_URL);
	}
	let result = await redis_client.execute(['HGETALL', 'notion-pages']);
	let related_ids = [];
	let related_posts = [];
	let related_slugs = [];
	//@ts-ignore
	for (let i = 0; i < result.length / 2; i++) {
		//@ts-ignore
		let split_text = result[i * 2].split('-');
		if (split_text[0] == slug) {
			//@ts-ignore
			related_ids.push(result[i * 2 + 1]);
			//@ts-ignore
			related_slugs.push(result[i * 2]);
		}
	}
	if (related_ids.length < 3) {
		//@ts-ignore
		for (let i = 0; i < result.length / 2; i++) {
			//@ts-ignore
			if (!related_ids.includes(result[i * 2 + 1])) {
				//@ts-ignore
				related_ids.push(result[i * 2 + 1]);
				//@ts-ignore
				related_slugs.push(result[i * 2]);
				if (related_ids.length == 3) {
					break;
				}
			}
		}
	}
	for (let i = 0; i < related_ids.length; i++) {
		let parsedJSON = JSON.parse(await getSerializedJSON(related_ids[i]));
		let title, date, src;
		for (let i = 0; i < parsedJSON.results.length; i++) {
			if (parsedJSON.results[i].type == 'heading_1' && title == null) {
				//@ts-ignore
				title = parsedJSON.results[i].heading_1.rich_text[0].plain_text;
				//@ts-ignore
			} else if (parsedJSON.results[i].type == 'to_do' && date == null) {
				//@ts-ignore
				let fulldate = parsedJSON.results[i].to_do.rich_text[0].plain_text.split(' ');
				console.log(fulldate);
				date = fulldate[4];
				//@ts-ignore
			} else if (parsedJSON.results[i].type == 'image' && src == null) {
				//@ts-ignore
				src = parsedJSON.results[i].image.file.url;
			}
		}
		related_posts.push({
			title: title,
			src: src,
			date: date,
			slug: related_slugs[i]
		});
	}
	return related_posts;
};

const getJSON = async (slug: string) => {
	if (!redis_client.isOpen()) {
		await redis_client.open(process.env.REDIS_URL);
	}
	let jsonResult = await redis_client.execute(['JSON.GET', slug]);
	await redis_client.close();
	return jsonResult;
};
