# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: articles\editArticle.spec.ts >> Edit Article >> should edit an existing article
- Location: tests\articles\editArticle.spec.ts:28:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Pauci cupiditate supellex volutabrum artificiose curiositas mollitia sophismata inflammatio subnecto.')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Pauci cupiditate supellex volutabrum artificiose curiositas mollitia sophismata inflammatio subnecto.')

```

```yaml
- navigation:
  - link "conduit":
    - /url: /
- heading "desolo vulgaris toties" [level=1]
- link:
  - /url: /profile/RohnDoe1@gmail.com
  - img
- link "RohnDoe1@gmail.com":
  - /url: /profile/RohnDoe1@gmail.com
- text: July 15, 2026
- link " Edit Article":
  - /url: /editor/desolo-vulgaris-toties-58676
- button " Delete Article"
- paragraph: Totus clarus super. Vespillo comes ipsum architecto. Universe demergo stillicidium. In admoneo vitiosus harum avaritia consequuntur alveus suasoria tersus. Vel armarium anser auditor tondeo cupressus. Cariosus caries super sequi ulterius textor cura thymbra.
- list
- separator
- link:
  - /url: /profile/RohnDoe1@gmail.com
  - img
- link "RohnDoe1@gmail.com":
  - /url: /profile/RohnDoe1@gmail.com
- text: July 15, 2026
- link " Edit Article":
  - /url: /editor/desolo-vulgaris-toties-58676
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
  41 |    await expect(page).toHaveURL(/\/article\/[a-z0-9-]+/);
  42 |     
  43 |     await expect(
  44 |       page.getByRole('heading', { name: updated.title })
  45 |     ).toBeVisible();
  46 | 
> 47 |     await expect(page.getByText(updated.description)).toBeVisible();
     |                                                       ^ Error: expect(locator).toBeVisible() failed
  48 | 
  49 |     await expect(page.getByText(updated.body)).toBeVisible();
  50 |   });
  51 | 
  52 |   test('should not update article with empty title', async ({ page }) => {
  53 |     const editorPage = new EditorPage(page);
  54 | 
  55 |     await page.goto(`/article/${article.article.slug}`);
  56 | 
  57 |     await editorPage.editArticle(
  58 |       '',
  59 |       article.article.description,
  60 |       article.article.body
  61 |     );
  62 | 
  63 |     await expect(page).toHaveURL(/editor/);
  64 | 
  65 |     await expect(editorPage.publishButton).toBeVisible();
  66 |   });
  67 | });
```