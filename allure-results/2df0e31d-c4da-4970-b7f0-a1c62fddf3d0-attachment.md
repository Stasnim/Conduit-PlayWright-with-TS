# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: articles\tagFilter.spec.ts >> Filter Articles by Tag >> should filter articles by tag
- Location: tests\articles\tagFilter.spec.ts:30:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.sidebar').getByRole('link', { name: 'Test' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.sidebar').getByRole('link', { name: 'Test' })

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
      - link "RohnDoe1@gmail.com":
        - /url: /profile/RohnDoe1@gmail.com
        - img
        - text: RohnDoe1@gmail.com
- list:
  - listitem: Your Feed
  - listitem: Global Feed
- link:
  - /url: /profile/RohnDoe1@gmail.com
  - img
- link "RohnDoe1@gmail.com":
  - /url: /profile/RohnDoe1@gmail.com
- text: July 15, 2026
- button " 0"
- link "voluptatem crinis officia Vel ubi demum cilicium. Read more... Test":
  - /url: /article/voluptatem-crinis-officia-58676
  - heading "voluptatem crinis officia" [level=1]
  - paragraph: Vel ubi demum cilicium.
  - text: Read more...
  - list:
    - listitem: Test
- link:
  - /url: /profile/RohnDoe1@gmail.com
  - img
- link "RohnDoe1@gmail.com":
  - /url: /profile/RohnDoe1@gmail.com
- text: July 15, 2026
- button " 0"
- link "dolorum ante comedo Toties adimpleo termes contego spectaculum. Read more... tackle overcoat":
  - /url: /article/dolorum-ante-comedo-58676
  - heading "dolorum ante comedo" [level=1]
  - paragraph: Toties adimpleo termes contego spectaculum.
  - text: Read more...
  - list:
    - listitem: tackle
    - listitem: overcoat
- link:
  - /url: /profile/RohnDoe1@gmail.com
  - img
- link "RohnDoe1@gmail.com":
  - /url: /profile/RohnDoe1@gmail.com
- text: July 15, 2026
- button " 0"
- link "adulescens adsidue ipsum Vis considero causa debeo cursim decretum dolores. Read more... Test":
  - /url: /article/adulescens-adsidue-ipsum-58676
  - heading "adulescens adsidue ipsum" [level=1]
  - paragraph: Vis considero causa debeo cursim decretum dolores.
  - text: Read more...
  - list:
    - listitem: Test
- link:
  - /url: /profile/RohnDoe1@gmail.com
  - img
- link "RohnDoe1@gmail.com":
  - /url: /profile/RohnDoe1@gmail.com
- text: July 15, 2026
- button " 0"
- link "utroque cohaero succedo Timor capitulus summisse coma tubineus damnatio amita videlicet. Read more... handful rule":
  - /url: /article/utroque-cohaero-succedo-58676
  - heading "utroque cohaero succedo" [level=1]
  - paragraph: Timor capitulus summisse coma tubineus damnatio amita videlicet.
  - text: Read more...
  - list:
    - listitem: handful
    - listitem: rule
- link:
  - /url: /profile/RohnDoe1@gmail.com
  - img
- link "RohnDoe1@gmail.com":
  - /url: /profile/RohnDoe1@gmail.com
- text: July 15, 2026
- button " 0"
- link "porro labore quas Tres arcesso cohaero amoveo currus callide. Read more... fibre scale":
  - /url: /article/porro-labore-quas-58676
  - heading "porro labore quas" [level=1]
  - paragraph: Tres arcesso cohaero amoveo currus callide.
  - text: Read more...
  - list:
    - listitem: fibre
    - listitem: scale
- link:
  - /url: /profile/RohnDoe1@gmail.com
  - img
- link "RohnDoe1@gmail.com":
  - /url: /profile/RohnDoe1@gmail.com
- text: July 15, 2026
- button " 0"
- link "demo termes claro Fugiat vetus derelinquo arcesso adnuo crux traho curis cruentus. Read more... fit fax":
  - /url: /article/demo-termes-claro-58676
  - heading "demo termes claro" [level=1]
  - paragraph: Fugiat vetus derelinquo arcesso adnuo crux traho curis cruentus.
  - text: Read more...
  - list:
    - listitem: fit
    - listitem: fax
- link:
  - /url: /profile/RohnDoe1@gmail.com
  - img
- link "RohnDoe1@gmail.com":
  - /url: /profile/RohnDoe1@gmail.com
- text: July 15, 2026
- button " 0"
- link "volup crinis cras Sum coniuratio natus contego. Read more... Test":
  - /url: /article/volup-crinis-cras-58676
  - heading "volup crinis cras" [level=1]
  - paragraph: Sum coniuratio natus contego.
  - text: Read more...
  - list:
    - listitem: Test
- link:
  - /url: /profile/RohnDoe1@gmail.com
  - img
- link "RohnDoe1@gmail.com":
  - /url: /profile/RohnDoe1@gmail.com
- text: July 15, 2026
- button " 0"
- link "ait deprimo vindico Creber nobis sint commodo. Read more... godfather cappelletti":
  - /url: /article/ait-deprimo-vindico-58676
  - heading "ait deprimo vindico" [level=1]
  - paragraph: Creber nobis sint commodo.
  - text: Read more...
  - list:
    - listitem: godfather
    - listitem: cappelletti
- link:
  - /url: /profile/RohnDoe1@gmail.com
  - img
- link "RohnDoe1@gmail.com":
  - /url: /profile/RohnDoe1@gmail.com
- text: July 15, 2026
- button " 0"
- link "cogo beatus aperiam Arbor solitudo spiritus cena eligendi iure eligendi decimus. Read more... Test":
  - /url: /article/cogo-beatus-aperiam-58676
  - heading "cogo beatus aperiam" [level=1]
  - paragraph: Arbor solitudo spiritus cena eligendi iure eligendi decimus.
  - text: Read more...
  - list:
    - listitem: Test
- link:
  - /url: /profile/RohnDoe1@gmail.com
  - img
- link "RohnDoe1@gmail.com":
  - /url: /profile/RohnDoe1@gmail.com
- text: July 15, 2026
- button " 0"
- link "defungo atavus ventosus Tandem tergiversatio crinis teneo perspiciatis. Read more...":
  - /url: /article/defungo-atavus-ventosus-58676
  - heading "defungo atavus ventosus" [level=1]
  - paragraph: Tandem tergiversatio crinis teneo perspiciatis.
  - text: Read more...
  - list
- navigation:
  - list:
    - listitem:
      - button "1"
    - listitem:
      - button "2"
    - listitem:
      - button "3"
    - listitem:
      - button "4"
- paragraph: Popular Tags
- text: Test Blog Coding YouTube Git Bondar Academy Slack Zoom GitHub Value-Focused
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
  18 |   const tagLink = this.page.locator('.sidebar').getByRole('link', { name: tag });
> 19 |   await expect(tagLink).toBeVisible();
     |                         ^ Error: expect(locator).toBeVisible() failed
  20 |   await tagLink.click();
  21 | }
  22 | 
  23 |   async verifyTagSelected(tag: string) {
  24 |     await expect(
  25 |       this.page.getByRole('link', { name: new RegExp(tag, 'i') })
  26 |     ).toBeVisible();
  27 |   }
  28 | 
  29 |   async verifyArticlesVisible() {
  30 |     await expect(this.articlePreview.first()).toBeVisible();
  31 |   }
  32 | 
  33 |   async verifyArticleExists(title: string) {
  34 |     await expect(
  35 |       this.page.getByRole('heading', { name: title })
  36 |     ).toBeVisible();
  37 |   }
  38 | 
  39 |   async verifyArticleNotExists(title: string) {
  40 |     await expect(
  41 |       this.page.getByRole('heading', { name: title })
  42 |     ).toHaveCount(0);
  43 |   }
  44 | }
```