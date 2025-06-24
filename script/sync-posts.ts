import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

dotenv.config();

const NOTION_TOKEN = process.env.NOTION_TOKEN as string
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID as string

if (!NOTION_TOKEN || !NOTION_DATABASE_ID){
    console.error("[!] Missing NOTION_DATABASE_ID or TOKEN in .env file");
    process.exit(1);
}

const notionClient = new Client({ auth: NOTION_TOKEN });
const notionToMarkdown = new NotionToMarkdown({ notionClient: notionClient });

async function syncPosts() {
    console.log("[+] Cleaning content and images folders.")
    const postsDir = path.join(process.cwd(), 'content/posts');
    if (fs.existsSync(postsDir)) {
        fs.rmSync(postsDir, { recursive: true, force: true });
    }
    fs.mkdirSync(postsDir, { recursive: true });

    const imagesDir = path.join(process.cwd(), 'public/images/posts');
    if (fs.existsSync(imagesDir)) {
        fs.rmSync(imagesDir, { recursive: true, force: true });
    }
    fs.mkdirSync(imagesDir, { recursive: true });

    console.log("[+] Fetching from notion database.")

    try {
        let response = await notionClient.databases.query({database_id : NOTION_DATABASE_ID})
        let posts = response.results;

        for (const rawPostData of posts) {
            let postData = JSON.parse(JSON.stringify(rawPostData));
        
            if (!postData.properties.Published.checkbox) continue;

            // 檢查是否有自定義的 id 欄位
            const customId = postData.properties.id?.rich_text?.[0]?.plain_text || 
                           postData.properties.id?.title?.[0]?.plain_text ||
                           postData.properties.ID?.rich_text?.[0]?.plain_text ||
                           postData.properties.ID?.title?.[0]?.plain_text;
            
            if (!customId) {
                console.error(`[!] Missing custom id field for post: ${postData.properties.Title.title[0].plain_text}`);
                continue;
            }

            // 清理檔案名稱，移除不允許的字符
            const safeFileName = customId.replace(/[^a-zA-Z0-9\-_]/g, '-').toLowerCase();
                        
            let markdownBlocks = await notionToMarkdown.pageToMarkdown(postData.id);
            const processedBlocks = await Promise.all(markdownBlocks.map(block => parseMarkdownBlock(block)));
            let markdownContent = notionToMarkdown.toMarkdownString(processedBlocks).parent;

            const thumbnailUrl = postData.properties.Thumbnail.files[0].file.url;
            const localThumbnailUrl = await downloadImage(thumbnailUrl, postData.properties.Title.title[0].plain_text);

            let markdownFrontmatter = parseMarkdownFrontmatter( 
                postData.properties.Title.title[0].plain_text,
                postData.properties.Description.rich_text[0].plain_text,
                localThumbnailUrl,
                postData.properties.Date.date.start,
                parsePostTags(postData.properties.Tags.multi_select) 
            );

            const filePath = path.join(postsDir, `${safeFileName}.md`);
            fs.writeFileSync(filePath, markdownFrontmatter + markdownContent);
            
            console.log(`[+] Created post: ${filePath}`);
        }
    } 
    catch(error){
        console.log("[!] Fetch from notion database failed.")
        console.error(error);
    }
}

function parseMarkdownFrontmatter(
    title: string,
    description: string,
    thumbnail: string,
    date: string,
    tags: Array<string>
): string {
    return `---
title: "${title}"
description: "${description}"
thumbnail: "${thumbnail}"
date: "${date}"
tags: ${JSON.stringify(tags)}
---\n`
}

function parsePostTags(rawTags: Array<Object>): Array<string> { 
    let result: Array<string> = [];
    rawTags.forEach((rawTag) => {
        result.push(
        JSON.parse(JSON.stringify(rawTag)).name
        );
    });
    return result;
}


async function downloadImage(imageUrl: string, altText: string): Promise<string> {
    try {
        const imageDir = path.join(process.cwd(), 'public/images/posts');
        if (!fs.existsSync(imageDir)) {
            fs.mkdirSync(imageDir, { recursive: true });
        }

        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        
        const contentType = response.headers['content-type'];
        const extension = contentType.split('/')[1] || 'jpg';
        
        const filename = `${uuidv4()}.${extension}`;
        const imagePath = path.join(imageDir, filename);
        
        fs.writeFileSync(imagePath, response.data);
        
        // Use absolute path for Next.js public directory
        // This should work in most deployment environments
        return `/images/posts/${filename}`;
    } catch (error) {
        console.error(`[!] Failed to download image: ${imageUrl}`);
        console.error(error);
        return imageUrl;
    }
}

async function parseMarkdownBlock(block: any): Promise<any> {
    if (block.type === 'image') {
        try {
            const markdownImageRegex = /!\[(.*?)\]\((.*?)\)/;
            const match = block.parent.match(markdownImageRegex);
            
            if (!match) {
                console.error(`[!] Invalid image markdown syntax: ${block.parent}`);
                return block;
            }

            const [_, altText, imageUrl] = match;
            const localImageUrl = await downloadImage(imageUrl, altText);
            block.parent = `![${altText}](${localImageUrl})`;
        } catch (error) {
            console.error(`[!] Failed to process image: ${block.parent}`);
            console.error(error);
        }
    }

    if (block.children && block.children.length > 0) {
        block.children = await Promise.all(block.children.map((child: any) => parseMarkdownBlock(child)));
    }

    return block;
}

syncPosts()