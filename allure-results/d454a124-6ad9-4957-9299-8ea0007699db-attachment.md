# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: articles\tagFilter.spec.ts >> Filter Articles by Tag >> should filter articles by tag
- Location: tests\articles\tagFilter.spec.ts:32:7

# Error details

```
Error: Login API failed: 404 <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot POST /users/login</pre>
</body>
</html>

```

```
TypeError: Cannot read properties of undefined (reading 'dispose')
```

# Test source

```ts
  1  | import { APIRequestContext, expect, request } from '@playwright/test';
  2  | import dotenv from 'dotenv';
  3  | import { getToken } from './authApi';
  4  | 
  5  | dotenv.config();
  6  | 
  7  | export class ArticleApi {
  8  |   private apiContext!: APIRequestContext;
  9  | 
  10 |   async init() {
  11 |     const token = await getToken();
  12 | 
  13 |     this.apiContext = await request.newContext({
  14 |       baseURL: process.env.API_URL,
  15 |       extraHTTPHeaders: {
  16 |         Authorization: `Token ${token}`,
  17 |       },
  18 |     });
  19 |   }
  20 | 
  21 |   async createArticle(
  22 |     title: string,
  23 |     description: string,
  24 |     body: string,
  25 |     tagList: string[] = []
  26 |   ) {
  27 |     const response = await this.apiContext.post('/articles', {
  28 |       data: {
  29 |         article: {
  30 |           title,
  31 |           description,
  32 |           body,
  33 |           tagList,
  34 |         },
  35 |       },
  36 |     });
  37 | 
  38 |     expect(response.ok()).toBeTruthy();
  39 | 
  40 |     return await response.json();
  41 |   }
  42 | 
  43 |   async getArticle(slug: string) {
  44 |     const response = await this.apiContext.get(`/articles/${slug}`);
  45 | 
  46 |     expect(response.ok()).toBeTruthy();
  47 | 
  48 |     return await response.json();
  49 |   }
  50 | 
  51 |   async deleteArticle(slug: string) {
  52 |     const response = await this.apiContext.delete(`/articles/${slug}`);
  53 | 
  54 |     expect(response.ok()).toBeTruthy();
  55 |   }
  56 | 
  57 |   async dispose() {
> 58 |     await this.apiContext.dispose();
     |                           ^ TypeError: Cannot read properties of undefined (reading 'dispose')
  59 |   }
  60 | }
```