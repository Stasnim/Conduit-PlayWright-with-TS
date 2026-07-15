# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: articles\tagFilter.spec.ts >> Filter Articles by Tag >> should filter articles by tag
- Location: tests\articles\tagFilter.spec.ts:31:7

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
- link:
  - /url: /profile/RohnDoe401@gmail.com
  - img
- link "RohnDoe401@gmail.com":
  - /url: /profile/RohnDoe401@gmail.com
- text: July 15, 2026
- button " 0"
- link "cernuus tepesco depulso Similique fugiat suadeo villa in laborum. Read more... Test":
  - /url: /article/cernuus-tepesco-depulso-58842
  - heading "cernuus tepesco depulso" [level=1]
  - paragraph: Similique fugiat suadeo villa in laborum.
  - text: Read more...
  - list:
    - listitem: Test
- link:
  - /url: /profile/RohnDoe401@gmail.com
  - img
- link "RohnDoe401@gmail.com":
  - /url: /profile/RohnDoe401@gmail.com
- text: July 15, 2026
- button " 0"
- link "comprehendo accommodo textus Conculco cariosus claustrum civitas audacia utique carcer adnuo tribuo artificiose. Read more... Test":
  - /url: /article/comprehendo-accommodo-textus-58842
  - heading "comprehendo accommodo textus" [level=1]
  - paragraph: Conculco cariosus claustrum civitas audacia utique carcer adnuo tribuo artificiose.
  - text: Read more...
  - list:
    - listitem: Test
- link:
  - /url: /profile/RohnDoe401@gmail.com
  - img
- link "RohnDoe401@gmail.com":
  - /url: /profile/RohnDoe401@gmail.com
- text: July 15, 2026
- button " 0"
- link "clibanus videlicet verto Deduco cuius adhuc pauci. Read more... Test":
  - /url: /article/clibanus-videlicet-verto-58842
  - heading "clibanus videlicet verto" [level=1]
  - paragraph: Deduco cuius adhuc pauci.
  - text: Read more...
  - list:
    - listitem: Test
- link:
  - /url: /profile/RohnDoe401@gmail.com
  - img
- link "RohnDoe401@gmail.com":
  - /url: /profile/RohnDoe401@gmail.com
- text: July 15, 2026
- button " 0"
- link "caelum consuasor vis Apud alter compello. Read more... Test":
  - /url: /article/caelum-consuasor-vis-58842
  - heading "caelum consuasor vis" [level=1]
  - paragraph: Apud alter compello.
  - text: Read more...
  - list:
    - listitem: Test
- link:
  - /url: /profile/RohnDoe401@gmail.com
  - img
- link "RohnDoe401@gmail.com":
  - /url: /profile/RohnDoe401@gmail.com
- text: July 15, 2026
- button " 0"
- link "error tutis conqueror Cernuus adipiscor ducimus delibero vulgo ventito ver ullam bellicus. Read more... Test":
  - /url: /article/error-tutis-conqueror-58842
  - heading "error tutis conqueror" [level=1]
  - paragraph: Cernuus adipiscor ducimus delibero vulgo ventito ver ullam bellicus.
  - text: Read more...
  - list:
    - listitem: Test
- link:
  - /url: /profile/RohnDoe401@gmail.com
  - img
- link "RohnDoe401@gmail.com":
  - /url: /profile/RohnDoe401@gmail.com
- text: July 15, 2026
- button " 0"
- link "conculco caput decet Thalassinus porro apostolus. Read more... Test":
  - /url: /article/conculco-caput-decet-58842
  - heading "conculco caput decet" [level=1]
  - paragraph: Thalassinus porro apostolus.
  - text: Read more...
  - list:
    - listitem: Test
- link:
  - /url: /profile/RohnDoe401@gmail.com
  - img
- link "RohnDoe401@gmail.com":
  - /url: /profile/RohnDoe401@gmail.com
- text: July 15, 2026
- button " 0"
- link "defendo comparo alienus Creo utor acer cura ago articulus cur. Read more... lyre pinstripe":
  - /url: /article/defendo-comparo-alienus-58842
  - heading "defendo comparo alienus" [level=1]
  - paragraph: Creo utor acer cura ago articulus cur.
  - text: Read more...
  - list:
    - listitem: lyre
    - listitem: pinstripe
- link:
  - /url: /profile/RohnDoe401@gmail.com
  - img
- link "RohnDoe401@gmail.com":
  - /url: /profile/RohnDoe401@gmail.com
- text: July 15, 2026
- button " 0"
- link "depromo tunc ipsam Spargo tersus cerno sed amplitudo taedium ex perferendis. Read more... Test":
  - /url: /article/depromo-tunc-ipsam-58842
  - heading "depromo tunc ipsam" [level=1]
  - paragraph: Spargo tersus cerno sed amplitudo taedium ex perferendis.
  - text: Read more...
  - list:
    - listitem: Test
- link:
  - /url: /profile/RohnDoe401@gmail.com
  - img
- link "RohnDoe401@gmail.com":
  - /url: /profile/RohnDoe401@gmail.com
- text: July 15, 2026
- button " 0"
- link "vulpes carus copia Acidus damno aqua deprecator venustas viduo eaque certe. Read more... Test":
  - /url: /article/vulpes-carus-copia-58842
  - heading "vulpes carus copia" [level=1]
  - paragraph: Acidus damno aqua deprecator venustas viduo eaque certe.
  - text: Read more...
  - list:
    - listitem: Test
- link:
  - /url: /profile/RohnDoe401@gmail.com
  - img
- link "RohnDoe401@gmail.com":
  - /url: /profile/RohnDoe401@gmail.com
- text: July 15, 2026
- button " 0"
- link "aspicio perferendis tempora Audentia canonicus acer alias villa clementia volutabrum cervus votum verus. Read more... Test":
  - /url: /article/aspicio-perferendis-tempora-58842
  - heading "aspicio perferendis tempora" [level=1]
  - paragraph: Audentia canonicus acer alias villa clementia volutabrum cervus votum verus.
  - text: Read more...
  - list:
    - listitem: Test
- navigation:
  - list:
    - listitem:
      - button "1"
    - listitem:
      - button "2"
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