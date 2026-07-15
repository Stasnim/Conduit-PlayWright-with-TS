# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: articles\deleteArticle.spec.ts >> Delete Article >> should delete an article
- Location: tests\articles\deleteArticle.spec.ts:31:7

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

# Test source

```ts
  1  | import { request } from '@playwright/test';
  2  | import dotenv from 'dotenv';
  3  | 
  4  | dotenv.config();
  5  | 
  6  | export async function getToken(): Promise<string> {
  7  |   console.log('API_URL:', process.env.API_URL);
  8  | 
  9  |   const apiContext = await request.newContext({
  10 |     baseURL: process.env.API_URL,
  11 |   });
  12 | 
  13 |   const response = await apiContext.post('/users/login', {
  14 |     data: {
  15 |       user: {
  16 |         email: process.env.EMAIL,
  17 |         password: process.env.PASSWORD,
  18 |       },
  19 |     },
  20 |   });
  21 | 
  22 |    console.log('Actual URL:', response.url());
  23 |   console.log('Status:', response.status());
  24 | 
  25 |   const text = await response.text();
  26 |   console.log(text);
  27 | 
  28 |   if (!response.ok()) {
> 29 |     throw new Error(
     |           ^ Error: Login API failed: 404 <!DOCTYPE html>
  30 |       `Login API failed: ${response.status()} ${await response.text()}`
  31 |     );
  32 |   }
  33 | 
  34 |   const body = await response.json();
  35 | 
  36 |   await apiContext.dispose();
  37 | 
  38 |   return body.user.token;
  39 | }
```