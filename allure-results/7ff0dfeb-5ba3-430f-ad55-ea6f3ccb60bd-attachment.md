# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: articles\tagFilter.spec.ts >> Filter Articles by Tag >> should filter articles by tag
- Location: tests\articles\tagFilter.spec.ts:31:7

# Error details

```
Error: Login API failed: 403 {"errors":{"email or password":["is invalid"]}}
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
  8  |   const response = await apiContext.post('/api/users/login', {
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
> 20 |     throw new Error(
     |           ^ Error: Login API failed: 403 {"errors":{"email or password":["is invalid"]}}
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