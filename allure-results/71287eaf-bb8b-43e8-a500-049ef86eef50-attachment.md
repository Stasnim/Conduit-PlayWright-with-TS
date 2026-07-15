# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: articles\tagFilter.spec.ts >> Filter Articles by Tag >> should not display unrelated articles
- Location: tests\articles\tagFilter.spec.ts:43:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.sidebar').getByText('Test', { exact: true })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.sidebar').getByText('Test', { exact: true })

```

```yaml
- navigation:
  - link "conduit":
    - /url: /
  - list:
    - listitem:
      - link "Home":
        - /url: /
    - listitem:
      - link " New Article":
        - /url: /editor
    - listitem:
      - link " Settings":
        - /url: /settings
    - listitem:
      - link "RohnDoe401@gmail.com":
        - /url: /profile/RohnDoe401@gmail.com
        - img
        - text: RohnDoe401@gmail.com
- list:
  - listitem: Your Feed
  - listitem: Global Feed
- text: Loading articles...
- contentinfo:
  - link "conduit":
    - /url: /
  - text: © 2026. An interactive learning project from
  - link "RealWorld OSS Project":
    - /url: https://github.com/gothinkster/realworld
  - text: . Code licensed under MIT. Hosted by
  - link "Bondar Academy":
    - /url: https://bondaracademy.com
  - text: .
```

# Test source

```ts
  1  | import { expect, Locator, Page } from '@playwright/test';
  2  | 
  3  | export class HomePage {
  4  |   readonly page: Page;
  5  | 
  6  |   readonly articlePreview: Locator;
  7  | 
  8  |   constructor(page: Page) {
  9  |     this.page = page;
  10 |     this.articlePreview = page.locator('.article-preview');
  11 |   }
  12 | 
  13 |   async goto() {
  14 |     await this.page.goto('/');
  15 |   }
  16 | 
  17 |   async selectTag(tag: string) {
  18 |   const tagLink = this.page
  19 |     .locator('.sidebar')
  20 |   .getByText(tag, { exact: true });
  21 | 
> 22 |   await expect(tagLink).toBeVisible();
     |                         ^ Error: expect(locator).toBeVisible() failed
  23 |   await tagLink.click();
  24 | }
  25 | 
  26 |   async verifyTagSelected(tag: string) {
  27 |     await expect(
  28 |       this.page.getByRole('link', { name: new RegExp(tag, 'i') })
  29 |     ).toBeVisible();
  30 |   }
  31 | 
  32 |   async verifyArticlesVisible() {
  33 |     await expect(this.articlePreview.first()).toBeVisible();
  34 |   }
  35 | 
  36 |   async verifyArticleExists(title: string) {
  37 |     await expect(
  38 |       this.page.getByRole('heading', { name: title })
  39 |     ).toBeVisible();
  40 |   }
  41 | 
  42 |   async verifyArticleNotExists(title: string) {
  43 |     await expect(
  44 |       this.page.getByRole('heading', { name: title })
  45 |     ).toHaveCount(0);
  46 |   }
  47 | }
```