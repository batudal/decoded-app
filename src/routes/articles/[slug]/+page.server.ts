import { Client } from '@notionhq/client';
import { Client as redis_Client } from 'redis-om';
import * as dotenv from 'dotenv';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
dotenv.config();
export const ssr = true;
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
	return {
		objects,
		title,
		category
	};
};

const getJSON = async (slug: string) => {
	const redis_client = new redis_Client();
	if (!redis_client.isOpen()) {
		await redis_client.open(process.env.REDIS_URL);
	}
	let jsonResult = await redis_client.execute(['JSON.GET', slug]);
	return jsonResult;
};
