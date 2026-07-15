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
  13 |     // Append '/api' to the base URL
  14 |     baseURL: `${process.env.API_URL}/api`, 
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
  39 | 
  40 |     const text = await response.text();
  41 | 
  42 |     if (!response.ok()) {
> 43 |       throw new Error(
     |             ^ Error: Create article failed: 404 <!DOCTYPE html>
  44 |         `Create article failed: ${response.status()} ${text}`
  45 |       );
  46 |     }
  47 | 
  48 |     return JSON.parse(text);
  49 |   }
  50 | 
  51 | 
  52 |   async getArticle(slug: string) {
  53 |     const response = await this.apiContext.get(
  54 |       `/articles/${slug}`
  55 |     );
  56 | 
  57 |     const text = await response.text();
  58 | 
  59 |     if (!response.ok()) {
  60 |       throw new Error(
  61 |         `Get article failed: ${response.status()} ${text}`
  62 |       );
  63 |     }
  64 | 
  65 |     return JSON.parse(text);
  66 |   }
  67 | 
  68 | 
  69 |   async deleteArticle(slug: string) {
  70 |     const response = await this.apiContext.delete(
  71 |       `/articles/${slug}`
  72 |     );
  73 | 
  74 | 
  75 |     if (!response.ok()) {
  76 |       throw new Error(
  77 |         `Delete article failed: ${response.status()} ${await response.text()}`
  78 |       );
  79 |     }
  80 |   }
  81 | 
  82 | 
  83 |   async dispose() {
  84 |     if (this.apiContext) {
  85 |       await this.apiContext.dispose();
  86 |     }
  87 |   }
  88 | }
```