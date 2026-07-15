# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: articles\deleteArticle.spec.ts >> Delete Article >> should delete an article
- Location: tests\articles\deleteArticle.spec.ts:34:7

# Error details

```
Error: Create article failed: 404 <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot POST /articles</pre>
</body>
</html>

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
  28 |     const response = await this.apiContext.post('/articles', {
  29 |   data: { article: { title, description, body, tagList } },
  30 | });
  31 | 
  32 | // 3. Debug safely after the request if needed
  33 | console.log('Actual URL requested:', response.url());
  34 | 
  35 | 
  36 |     const text = await response.text();
  37 | 
  38 |     if (!response.ok()) {
> 39 |       throw new Error(
     |             ^ Error: Create article failed: 404 <!DOCTYPE html>
  40 |         `Create article failed: ${response.status()} ${text}`
  41 |       );
  42 |     }
  43 | 
  44 |     return JSON.parse(text);
  45 |   }
  46 | 
  47 | 
  48 |   async getArticle(slug: string) {
  49 |     const response = await this.apiContext.get(
  50 |       `/articles/${slug}`
  51 |     );
  52 | 
  53 |     const text = await response.text();
  54 | 
  55 |     if (!response.ok()) {
  56 |       throw new Error(
  57 |         `Get article failed: ${response.status()} ${text}`
  58 |       );
  59 |     }
  60 | 
  61 |     return JSON.parse(text);
  62 |   }
  63 | 
  64 | 
  65 |   async deleteArticle(slug: string) {
  66 |     const response = await this.apiContext.delete(
  67 |       `/articles/${slug}`
  68 |     );
  69 | 
  70 | 
  71 |     if (!response.ok()) {
  72 |       throw new Error(
  73 |         `Delete article failed: ${response.status()} ${await response.text()}`
  74 |       );
  75 |     }
  76 |   }
  77 | 
  78 | 
  79 |   async dispose() {
  80 |     if (this.apiContext) {
  81 |       await this.apiContext.dispose();
  82 |     }
  83 |   }
  84 | }
```