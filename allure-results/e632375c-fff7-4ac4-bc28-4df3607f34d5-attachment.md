# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: articles\deleteArticle.spec.ts >> Delete Article >> should delete an article
- Location: tests\articles\deleteArticle.spec.ts:6:7

# Error details

```
Error: Login API failed: 405 <html>
<head><title>405 Not Allowed</title></head>
<body>
<center><h1>405 Not Allowed</h1></center>
<hr><center>nginx/1.17.6</center>
</body>
</html>
<!-- a padding to disable MSIE and Chrome friendly error page -->
<!-- a padding to disable MSIE and Chrome friendly error page -->
<!-- a padding to disable MSIE and Chrome friendly error page -->
<!-- a padding to disable MSIE and Chrome friendly error page -->
<!-- a padding to disable MSIE and Chrome friendly error page -->
<!-- a padding to disable MSIE and Chrome friendly error page -->

```

# Test source

```ts
  1  | import { APIRequestContext } from '@playwright/test';
  2  | 
  3  | export async function getToken(
  4  |   request: APIRequestContext
  5  | ) {
  6  |   const response = await request.post('/users/login', {
  7  |     data: {
  8  |       user: {
  9  |         email: process.env.EMAIL,
  10 |         password: process.env.PASSWORD,
  11 |       },
  12 |     },
  13 |   });
  14 | 
  15 |   const text = await response.text();
  16 | 
  17 |   if (!response.ok()) {
> 18 |     throw new Error(
     |           ^ Error: Login API failed: 405 <html>
  19 |       `Login API failed: ${response.status()} ${text}`
  20 |     );
  21 |   }
  22 | 
  23 |   const body = JSON.parse(text);
  24 | 
  25 |   return body.user.token;
  26 | }
```