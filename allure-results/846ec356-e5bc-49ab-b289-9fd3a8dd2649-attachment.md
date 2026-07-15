# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth.setup.ts >> Authenticate User
- Location: tests\auth.setup.ts:6:6

# Error details

```
TimeoutError: page.goto: Timeout 15000ms exceeded.
Call log:
  - navigating to "https://conduit.bondaracademy.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e4]:
    - generic:
      - link "conduit" [ref=e5] [cursor=pointer]:
        - /url: /
      - list [ref=e6]:
        - listitem [ref=e7]:
          - link "Home" [ref=e8] [cursor=pointer]:
            - /url: /
        - listitem [ref=e9]:
          - link "Sign in" [ref=e10] [cursor=pointer]:
            - /url: /login
        - listitem [ref=e11]:
          - link "Sign up" [ref=e12] [cursor=pointer]:
            - /url: /register
  - contentinfo [ref=e13]:
    - generic [ref=e14]:
      - link "conduit" [ref=e15] [cursor=pointer]:
        - /url: /
      - generic [ref=e16]:
        - text: © 2026. An interactive learning project from
        - link "RealWorld OSS Project" [ref=e17] [cursor=pointer]:
          - /url: https://github.com/gothinkster/realworld
        - text: . Code licensed under MIT. Hosted by
        - link "Bondar Academy" [ref=e18] [cursor=pointer]:
          - /url: https://bondaracademy.com
        - text: .
```

# Test source

```ts
  1  | import { test as setup, expect } from '@playwright/test';
  2  | import dotenv from 'dotenv';
  3  | 
  4  | dotenv.config();
  5  | 
  6  | setup('Authenticate User', async ({ page }) => {
> 7  |   await page.goto('/');
     |              ^ TimeoutError: page.goto: Timeout 15000ms exceeded.
  8  | 
  9  |   await page.getByRole('link', { name: 'Sign in' }).click();
  10 | 
  11 |   await page.getByPlaceholder('Email').fill(process.env.EMAIL!);
  12 |   await page.getByPlaceholder('Password').fill(process.env.PASSWORD!);
  13 | 
  14 |   await page.getByRole('button', { name: 'Sign in' }).click();
  15 | 
  16 |   await expect(page.getByRole('link', { name: 'New Article' })).toBeVisible();
  17 |   await expect(page.getByRole('link', { name: 'Settings' })).toBeVisible();
  18 | 
  19 |   await page.context().storageState({
  20 |     path: './storage/auth.json',
  21 |   });
  22 | });
```