# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: articles\tagFilter.spec.ts >> Filter Articles by Tag >> should not display unrelated articles
- Location: tests\articles\tagFilter.spec.ts:48:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.sidebar').getByRole('link', { name: 'playwright-qa' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.sidebar').getByRole('link', { name: 'playwright-qa' })

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
- link "spes tendo vallum Vergo autem alter thermae apparatus. Read more... term consistency":
  - /url: /article/spes-tendo-vallum-58676
  - heading "spes tendo vallum" [level=1]
  - paragraph: Vergo autem alter thermae apparatus.
  - text: Read more...
  - list:
    - listitem: term
    - listitem: consistency
- link:
  - /url: /profile/RohnDoe1@gmail.com
  - img
- link "RohnDoe1@gmail.com":
  - /url: /profile/RohnDoe1@gmail.com
- text: July 15, 2026
- button " 0"
- link "trucido teres iste Adnuo ambitus ademptio paens cavus timor ait cenaculum auctor. Read more... playwright-qa":
  - /url: /article/trucido-teres-iste-58676
  - heading "trucido teres iste" [level=1]
  - paragraph: Adnuo ambitus ademptio paens cavus timor ait cenaculum auctor.
  - text: Read more...
  - list:
    - listitem: playwright-qa
- link:
  - /url: /profile/RohnDoe1@gmail.com
  - img
- link "RohnDoe1@gmail.com":
  - /url: /profile/RohnDoe1@gmail.com
- text: July 15, 2026
- button " 0"
- link "eos paulatim delibero Quibusdam demergo addo thema amplitudo admoneo vulgus. Read more... playwright-qa":
  - /url: /article/eos-paulatim-delibero-58676
  - heading "eos paulatim delibero" [level=1]
  - paragraph: Quibusdam demergo addo thema amplitudo admoneo vulgus.
  - text: Read more...
  - list:
    - listitem: playwright-qa
- link:
  - /url: /profile/RohnDoe1@gmail.com
  - img
- link "RohnDoe1@gmail.com":
  - /url: /profile/RohnDoe1@gmail.com
- text: July 15, 2026
- button " 0"
- link "velum casus spoliatio Tristis aperio conculco derelinquo depopulo corrigo eaque vespillo. Read more... availability certification":
  - /url: /article/velum-casus-spoliatio-58676
  - heading "velum casus spoliatio" [level=1]
  - paragraph: Tristis aperio conculco derelinquo depopulo corrigo eaque vespillo.
  - text: Read more...
  - list:
    - listitem: availability
    - listitem: certification
- link:
  - /url: /profile/RohnDoe1@gmail.com
  - img
- link "RohnDoe1@gmail.com":
  - /url: /profile/RohnDoe1@gmail.com
- text: July 15, 2026
- button " 0"
- link "tactus ipsam vitae Conicio terebro volutabrum talus. Read more... doubter underneath":
  - /url: /article/tactus-ipsam-vitae-58676
  - heading "tactus ipsam vitae" [level=1]
  - paragraph: Conicio terebro volutabrum talus.
  - text: Read more...
  - list:
    - listitem: doubter
    - listitem: underneath
- link:
  - /url: /profile/RohnDoe1@gmail.com
  - img
- link "RohnDoe1@gmail.com":
  - /url: /profile/RohnDoe1@gmail.com
- text: July 15, 2026
- button " 0"
- link "defetiscor tardus tamdiu Architecto venio campana. Read more... collectivization hornet":
  - /url: /article/defetiscor-tardus-tamdiu-58676
  - heading "defetiscor tardus tamdiu" [level=1]
  - paragraph: Architecto venio campana.
  - text: Read more...
  - list:
    - listitem: collectivization
    - listitem: hornet
- link:
  - /url: /profile/RohnDoe1@gmail.com
  - img
- link "RohnDoe1@gmail.com":
  - /url: /profile/RohnDoe1@gmail.com
- text: July 15, 2026
- button " 0"
- link "verbera theatrum vix Theca videlicet porro excepturi. Read more... independence sarong":
  - /url: /article/verbera-theatrum-vix-58676
  - heading "verbera theatrum vix" [level=1]
  - paragraph: Theca videlicet porro excepturi.
  - text: Read more...
  - list:
    - listitem: independence
    - listitem: sarong
- link:
  - /url: /profile/RohnDoe1@gmail.com
  - img
- link "RohnDoe1@gmail.com":
  - /url: /profile/RohnDoe1@gmail.com
- text: July 15, 2026
- button " 0"
- link "bene crudelis appono Cresco vita utique alienus una. Read more... Collaboration commodity":
  - /url: /article/bene-crudelis-appono-58676
  - heading "bene crudelis appono" [level=1]
  - paragraph: Cresco vita utique alienus una.
  - text: Read more...
  - list:
    - listitem: Collaboration
    - listitem: commodity
- link:
  - /url: /profile/RohnDoe1@gmail.com
  - img
- link "RohnDoe1@gmail.com":
  - /url: /profile/RohnDoe1@gmail.com
- text: July 15, 2026
- button " 0"
- link "adhaero assumenda solitudo Hic vir adstringo corrupti. Read more... playwright-qa":
  - /url: /article/adhaero-assumenda-solitudo-58676
  - heading "adhaero assumenda solitudo" [level=1]
  - paragraph: Hic vir adstringo corrupti.
  - text: Read more...
  - list:
    - listitem: playwright-qa
- link:
  - /url: /profile/RohnDoe1@gmail.com
  - img
- link "RohnDoe1@gmail.com":
  - /url: /profile/RohnDoe1@gmail.com
- text: July 15, 2026
- button " 0"
- link "centum summa cunae Audax attonbitus demo canonicus usitas. Read more... disposer deed":
  - /url: /article/centum-summa-cunae-58676
  - heading "centum summa cunae" [level=1]
  - paragraph: Audax attonbitus demo canonicus usitas.
  - text: Read more...
  - list:
    - listitem: disposer
    - listitem: deed
- navigation:
  - list:
    - listitem:
      - button "1"
    - listitem:
      - button "2"
    - listitem:
      - button "3"
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
  6  |   readonly globalFeedTab: Locator;
  7  |   readonly yourFeedTab: Locator;
  8  |   readonly articlePreview: Locator;
  9  | 
  10 |   constructor(page: Page) {
  11 |     this.page = page;
  12 | 
  13 |     this.globalFeedTab = page.getByRole('button', {
  14 |       name: 'Global Feed',
  15 |     });
  16 | 
  17 |     this.yourFeedTab = page.getByRole('button', {
  18 |       name: 'Your Feed',
  19 |     });
  20 | 
  21 |     this.articlePreview = page.locator('.article-preview');
  22 |   }
  23 | 
  24 |   async goto() {
  25 |     await this.page.goto('/');
  26 |   }
  27 | 
  28 |   async selectTag(tag: string) {
  29 |   const tagLink = this.page
  30 |     .locator('.sidebar')
  31 |     .getByRole('link', { name: tag });
  32 | 
> 33 |   await expect(tagLink).toBeVisible();
     |                         ^ Error: expect(locator).toBeVisible() failed
  34 | 
  35 |   await tagLink.click();
  36 | }
  37 | 
  38 |   async openArticle(title: string) {
  39 |     await this.page.getByRole('link', { name: title }).click();
  40 |   }
  41 | 
  42 |   async verifyTagSelected(tag: string) {
  43 |     const selectedTag = this.page.getByRole('link', { name: `# ${tag}` });
  44 |     await expect(selectedTag).toBeVisible();
  45 |     await expect(selectedTag).toHaveClass(/active/);
  46 |   }
  47 | 
  48 |   async verifyArticlesVisible() {
  49 |     await expect(this.articlePreview.first()).toBeVisible();
  50 |   }
  51 | 
  52 |   async verifyArticleExists(title: string) {
  53 |     await expect(
  54 |       this.page.getByRole('link', { name: title })
  55 |     ).toBeVisible();
  56 |   }
  57 | 
  58 |   async verifyArticleNotExists(title: string) {
  59 |     await expect(
  60 |       this.page.getByRole('link', { name: title })
  61 |     ).toHaveCount(0);
  62 |   }
  63 | }
```