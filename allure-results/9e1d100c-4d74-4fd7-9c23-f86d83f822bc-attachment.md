# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: articles\deleteArticle.spec.ts >> Delete Article >> should delete an article
- Location: tests\articles\deleteArticle.spec.ts:34:7

# Error details

```
TypeError: Cannot read properties of undefined (reading 'url')
```

# Test source

```ts
  1  | import { APIRequestContext, expect, request } from '@playwright/test';
  2  | import { getToken } from './authApi';
  3  | 
  4  | export class ArticleApi {
  5  |   private apiContext!: APIRequestContext;
  6  | 
  7  |   // Inside src/api/articleApi.ts
  8  | 
  9  | async init() {
  10 |   const token = await getToken();
  11 | 
  12 |   this.apiContext = await request.newContext({
  13 |     // Use the variable directly; remove the manual '/api' suffix
  14 |     baseURL: process.env.API_URL, 
  15 |     extraHTTPHeaders: {
  16 |       Authorization: `Token ${token}`,
  17 |     },
  18 |   });
  19 | }
  20 | 
  21 | 
  22 |   async createArticle(
  23 |     title: string,
  24 |     description: string,
  25 |     body: string,
  26 |     tagList: string[] = []
  27 |   ) {
> 28 |     console.log('Requesting URL:', this.apiContext.request.url('/articles'));
     |                                                            ^ TypeError: Cannot read properties of undefined (reading 'url')
  29 |     const response = await this.apiContext.post('/articles', {
  30 |       data: {
  31 |         article: {
  32 |           title,
  33 |           description,
  34 |           body,
  35 |           tagList,
  36 |         },
  37 |       },
  38 |     });
  39 | 
  40 | 
  41 |     const text = await response.text();
  42 | 
  43 |     if (!response.ok()) {
  44 |       throw new Error(
  45 |         `Create article failed: ${response.status()} ${text}`
  46 |       );
  47 |     }
  48 | 
  49 |     return JSON.parse(text);
  50 |   }
  51 | 
  52 | 
  53 |   async getArticle(slug: string) {
  54 |     const response = await this.apiContext.get(
  55 |       `/articles/${slug}`
  56 |     );
  57 | 
  58 |     const text = await response.text();
  59 | 
  60 |     if (!response.ok()) {
  61 |       throw new Error(
  62 |         `Get article failed: ${response.status()} ${text}`
  63 |       );
  64 |     }
  65 | 
  66 |     return JSON.parse(text);
  67 |   }
  68 | 
  69 | 
  70 |   async deleteArticle(slug: string) {
  71 |     const response = await this.apiContext.delete(
  72 |       `/articles/${slug}`
  73 |     );
  74 | 
  75 | 
  76 |     if (!response.ok()) {
  77 |       throw new Error(
  78 |         `Delete article failed: ${response.status()} ${await response.text()}`
  79 |       );
  80 |     }
  81 |   }
  82 | 
  83 | 
  84 |   async dispose() {
  85 |     if (this.apiContext) {
  86 |       await this.apiContext.dispose();
  87 |     }
  88 |   }
  89 | }
```