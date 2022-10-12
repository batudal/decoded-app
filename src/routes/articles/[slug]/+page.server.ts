import { Client } from '@notionhq/client';
import type { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import * as dotenv from 'dotenv';
import type { PageServerLoad } from './$types';
dotenv.config();

export const load: PageServerLoad = async ({ params }) => {
	if (params.slug === 'hacks-reentrancy') {
		const notion = new Client({ auth: process.env.NOTION_KEY });
		const databaseId: any = process.env.NOTION_DATABASE_ID;
		const response = await notion.blocks.children.list({ block_id: databaseId });
		// console.log('Response --> ', response);
		let paragraphs: string[] = [];
		let title = '';
		for (let i = 0; i < 10; i++) {
			//@ts-ignore
			if (response.results[i].type == 'paragraph') {
				//@ts-ignore
				let paragraph = response.results[i].paragraph.rich_text[0].plain_text;
				console.log('Parapgrah:', paragraph);
				paragraphs.push(paragraph);
				//@ts-ignore
			} else if (response.results[i].type == 'heading_1') {
				//@ts-ignore
				title = response.results[i].heading_1.rich_text[0].plain_text;
			}
		}
		return {
			paragraphs,
			title
		};
	}
};
