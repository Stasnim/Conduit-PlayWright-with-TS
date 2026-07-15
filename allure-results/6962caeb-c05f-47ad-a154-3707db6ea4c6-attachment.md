# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: articles\editArticle.spec.ts >> Edit Article >> should edit an existing article
- Location: tests\articles\editArticle.spec.ts:28:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /\/article\/convoco-volva-cupressus-58676/
Received string:  "https://conduit.bondaracademy.com/article/verbera-theatrum-vix-58676"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    5 × unexpected value "https://conduit.bondaracademy.com/editor/convoco-volva-cupressus-58676"
    9 × unexpected value "https://conduit.bondaracademy.com/article/verbera-theatrum-vix-58676"

```

```yaml
- navigation:
  - link "conduit":
    - /url: /
- heading "verbera theatrum vix" [level=1]
- link:
  - /url: /profile/RohnDoe1@gmail.com
  - img
- link "RohnDoe1@gmail.com":
  - /url: /profile/RohnDoe1@gmail.com
- text: July 15, 2026
- link " Edit Article":
  - /url: /editor/verbera-theatrum-vix-58676
- button " Delete Article"
- paragraph: Toties ut dignissimos coma combibo vulariter vallum clementia. Quo cena saepe sol varietas spargo maxime aegrus sponte. Ter amo doloremque tollo armarium ad conor asporto. Infit terreo debeo accommodo arto conatus viduo tabesco sperno. Non arceo alioqui defessus. Tepesco uberrime cubitum.
- list:
  - listitem: independence
  - listitem: sarong
- separator
- link:
  - /url: /profile/RohnDoe1@gmail.com
  - img
- link "RohnDoe1@gmail.com":
  - /url: /profile/RohnDoe1@gmail.com
- text: July 15, 2026
- link " Edit Article":
  - /url: /editor/verbera-theatrum-vix-58676
- button " Delete Article"
- list
- group:
  - textbox "Write a comment..."
  - img
  - button "Post Comment"
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
  1  | import { test, expect } from '@playwright/test';
  2  | import { ArticleApi } from '../../src/api/articleApi';
  3  | import { EditorPage } from '../../src/pages/EditorPage';
  4  | import { generateArticleData } from '../../src/utils/testData';
  5  | 
  6  | test.describe('Edit Article', () => {
  7  |   let articleApi: ArticleApi;
  8  |   let article: any;
  9  | 
  10 |   test.beforeEach(async () => {
  11 |     articleApi = new ArticleApi();
  12 |     await articleApi.init();
  13 | 
  14 |     const data = generateArticleData();
  15 | 
  16 |     article = await articleApi.createArticle(
  17 |       data.title,
  18 |       data.description,
  19 |       data.body,
  20 |       data.tagList
  21 |     );
  22 |   });
  23 | 
  24 |   test.afterEach(async () => {
  25 |     await articleApi.dispose();
  26 |   });
  27 | 
  28 |   test('should edit an existing article', async ({ page }) => {
  29 |     const editorPage = new EditorPage(page);
  30 | 
  31 |     const updated = generateArticleData();
  32 | 
  33 |     await page.goto(`/article/${article.article.slug}`);
  34 | 
  35 |     await editorPage.editArticle(
  36 |       updated.title,
  37 |       updated.description,
  38 |       updated.body
  39 |     );
  40 | 
> 41 |     await expect(page).toHaveURL(
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  42 |       new RegExp(`/article/${article.article.slug}`)
  43 |     );
  44 | 
  45 |     await expect(
  46 |       page.getByRole('heading', { name: updated.title })
  47 |     ).toBeVisible();
  48 | 
  49 |     await expect(page.getByText(updated.description)).toBeVisible();
  50 | 
  51 |     await expect(page.getByText(updated.body)).toBeVisible();
  52 |   });
  53 | 
  54 |   test('should not update article with empty title', async ({ page }) => {
  55 |     const editorPage = new EditorPage(page);
  56 | 
  57 |     await page.goto(`/article/${article.article.slug}`);
  58 | 
  59 |     await editorPage.editArticle(
  60 |       '',
  61 |       article.article.description,
  62 |       article.article.body
  63 |     );
  64 | 
  65 |     await expect(page).toHaveURL(/editor/);
  66 | 
  67 |     await expect(editorPage.publishButton).toBeVisible();
  68 |   });
  69 | });
```