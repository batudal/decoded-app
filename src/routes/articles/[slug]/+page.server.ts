import { Client } from '@notionhq/client';
import * as dotenv from 'dotenv';
import type { PageServerLoad } from './$types';
dotenv.config();
export const ssr = true;
export const load: PageServerLoad = async ({ params }) => {
	if (params.slug === 'hacks-reentrancy') {
		const notion = new Client({ auth: process.env.NOTION_KEY });
		const databaseId: any = process.env.NOTION_DATABASE_ID;
		const response = await notion.blocks.children.list({ block_id: databaseId });
		let objects: any[] = [];
		let title = '';
		let category = '';
		for (let i = 0; i < response.results.length; i++) {
			//@ts-ignore
			// console.log('Type -->', response.results[i].type);
			//@ts-ignore
			if (response.results[i].type == 'paragraph') {
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
				//@ts-ignore
				// console.log(response.results[i].callout);
				objects.push({
					type: 'callout',
					//@ts-ignore
					content: response.results[i].callout.rich_text[0].plain_text,
					//@ts-ignore
					linkText: response.results[i].callout.rich_text[1].plain_text,
					//@ts-ignore
					url:response.results[i].callout.rich_text[1].href
				});
				//@ts-ignore
			} else if (response.results[i].type == 'code') {
				//@ts-ignore
				// console.log(response.results[i].code);
				objects.push({
					type: 'code',
					//@ts-ignore
					content: response.results[i].code.rich_text[0].plain_text,
				});
			}
		}
		return {
			objects,
			title,
			category
		};
	}
};
