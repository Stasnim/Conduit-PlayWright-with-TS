# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: articles\deleteArticle.spec.ts >> Delete Article >> should delete an article
- Location: tests\articles\deleteArticle.spec.ts:34:7

# Error details

```
TimeoutError: apiRequestContext.post: Timeout 10000ms exceeded.
Call log:
  - → POST https://conduit-api.bondaracademy.com/api/users/login
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/json
    - content-length: 75

```

# Test source

```ts
  1  | import { request } from '@playwright/test';
  2  | 
  3  | export async function getToken() {
  4  |   const apiContext = await request.newContext({
  5  |     baseURL: process.env.API_URL,
  6  |   });
  7  | 
> 8  |   const response = await apiContext.post('/api/users/login', {
     |                                     ^ TimeoutError: apiRequestContext.post: Timeout 10000ms exceeded.
  9  |     data: {
  10 |       user: {
  11 |         email: process.env.EMAIL,
  12 |         password: process.env.PASSWORD,
  13 |       },
  14 |     },
  15 |   });
  16 | 
  17 |   const text = await response.text();
  18 | 
  19 |   if (!response.ok()) {
  20 |     throw new Error(
  21 |       `Login API failed: ${response.status()} ${text}`
  22 |     );
  23 |   }
  24 | 
  25 |   const body = JSON.parse(text);
  26 | 
  27 |   await apiContext.dispose();
  28 | 
  29 |   return body.user.token;
  30 | }
```