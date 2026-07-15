# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: articles\deleteArticle.spec.ts >> Delete Article >> should delete an article
- Location: tests\articles\deleteArticle.spec.ts:26:7

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | import { APIRequestContext, expect, request } from '@playwright/test';
  2  | import { getToken } from './authApi';
  3  | 
  4  | export class ArticleApi {
  5  | 
  6  |   private apiContext!: APIRequestContext;
  7  | 
  8  |   async init() {
  9  | 
  10 |     const token = await getToken();
  11 | 
  12 |     this.apiContext = await request.newContext({
  13 |       baseURL: process.env.API_URL,
  14 |       extraHTTPHeaders: {
  15 |         Authorization: `Token ${token}`,
  16 |       },
  17 |     });
  18 |   }
  19 | 
  20 | 
  21 |   async createArticle(
  22 |     title: string,
  23 |     description: string,
  24 |     body: string,
  25 |     tagList: string[] = []
  26 |   ) {
  27 | 
  28 |     const response = await this.apiContext.post('/articles', {
  29 |       data: {
  30 |         article: {
  31 |           title,
  32 |           description,
  33 |           body,
  34 |           tagList,
  35 |         },
  36 |       },
  37 |     });
  38 | 
> 39 |     expect(response.ok()).toBeTruthy();
     |                           ^ Error: expect(received).toBeTruthy()
  40 | 
  41 |     return await response.json();
  42 |   }
  43 | 
  44 | 
  45 |   async deleteArticle(slug: string) {
  46 | 
  47 |     const response =
  48 |       await this.apiContext.delete(`/articles/${slug}`);
  49 | 
  50 |     expect(response.ok()).toBeTruthy();
  51 |   }
  52 | 
  53 | 
  54 |   async dispose() {
  55 | 
  56 |     if (this.apiContext) {
  57 |       await this.apiContext.dispose();
  58 |     }
  59 |   }
  60 | }
```