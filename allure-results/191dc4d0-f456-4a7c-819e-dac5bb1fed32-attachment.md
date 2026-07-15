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
  7  |   async init() {
  8  |     const token = await getToken();
  9  | 
  10 |     this.apiContext = await request.newContext({
  11 |       baseURL: process.env.API_URL,
  12 |       extraHTTPHeaders: {
  13 |         Authorization: `Token ${token}`,
  14 |       },
  15 |     });
  16 |   }
  17 | 
  18 | 
  19 |   async createArticle(
  20 |     title: string,
  21 |     description: string,
  22 |     body: string,
  23 |     tagList: string[] = []
  24 |   ) {
  25 |     const response = await this.apiContext.post('/articles', {
  26 |       data: {
  27 |         article: {
  28 |           title,
  29 |           description,
  30 |           body,
  31 |           tagList,
  32 |         },
  33 |       },
  34 |     });
  35 | 
  36 | 
  37 |     const text = await response.text();
  38 | 
  39 |     if (!response.ok()) {
> 40 |       throw new Error(
     |             ^ Error: Create article failed: 404 <!DOCTYPE html>
  41 |         `Create article failed: ${response.status()} ${text}`
  42 |       );
  43 |     }
  44 | 
  45 |     return JSON.parse(text);
  46 |   }
  47 | 
  48 | 
  49 |   async getArticle(slug: string) {
  50 |     const response = await this.apiContext.get(
  51 |       `/articles/${slug}`
  52 |     );
  53 | 
  54 |     const text = await response.text();
  55 | 
  56 |     if (!response.ok()) {
  57 |       throw new Error(
  58 |         `Get article failed: ${response.status()} ${text}`
  59 |       );
  60 |     }
  61 | 
  62 |     return JSON.parse(text);
  63 |   }
  64 | 
  65 | 
  66 |   async deleteArticle(slug: string) {
  67 |     const response = await this.apiContext.delete(
  68 |       `/articles/${slug}`
  69 |     );
  70 | 
  71 | 
  72 |     if (!response.ok()) {
  73 |       throw new Error(
  74 |         `Delete article failed: ${response.status()} ${await response.text()}`
  75 |       );
  76 |     }
  77 |   }
  78 | 
  79 | 
  80 |   async dispose() {
  81 |     if (this.apiContext) {
  82 |       await this.apiContext.dispose();
  83 |     }
  84 |   }
  85 | }
```