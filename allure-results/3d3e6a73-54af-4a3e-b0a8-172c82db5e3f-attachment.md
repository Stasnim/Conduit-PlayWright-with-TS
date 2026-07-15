# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: articles\deleteArticle.spec.ts >> Delete Article >> should show 404 when deleted article URL is opened
- Location: tests\articles\deleteArticle.spec.ts:50:7

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('button', { name: /Delete Article/ }) resolved to 2 elements:
    1) <button class="btn btn-sm btn-outline-danger">…</button> aka getByRole('button', { name: ' Delete Article' }).first()
    2) <button class="btn btn-sm btn-outline-danger">…</button> aka getByRole('button', { name: ' Delete Article' }).nth(1)

Call log:
  - waiting for getByRole('button', { name: /Delete Article/ })

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
          - link " New Article" [ref=e10] [cursor=pointer]:
            - /url: /editor
            - generic [ref=e11]: 
            - text: New Article
        - listitem [ref=e12]:
          - link " Settings" [ref=e13] [cursor=pointer]:
            - /url: /settings
            - generic [ref=e14]: 
            - text: Settings
        - listitem [ref=e15]:
          - link "RohnDoe1@gmail.com" [ref=e16] [cursor=pointer]:
            - /url: /profile/RohnDoe1@gmail.com
            - img [ref=e17]
            - text: RohnDoe1@gmail.com
  - generic [ref=e19]:
    - generic [ref=e21]:
      - heading "laboriosam valeo deputo" [level=1] [ref=e22]
      - generic [ref=e24]:
        - link [ref=e25] [cursor=pointer]:
          - /url: /profile/RohnDoe1@gmail.com
          - img [ref=e26]
        - generic [ref=e27]:
          - link "RohnDoe1@gmail.com" [ref=e28] [cursor=pointer]:
            - /url: /profile/RohnDoe1@gmail.com
          - generic [ref=e29]: July 15, 2026
        - generic [ref=e30]:
          - link " Edit Article" [ref=e31] [cursor=pointer]:
            - /url: /editor/laboriosam-valeo-deputo-58676
            - generic [ref=e32]: 
            - text: Edit Article
          - button " Delete Article" [ref=e33] [cursor=pointer]:
            - generic [ref=e34]: 
            - text: Delete Article
    - generic [ref=e35]:
      - generic [ref=e37]:
        - paragraph [ref=e39]: Denuo vorago defero bonus comminor inventore aestas. Turpis validus curvo amaritudo consequuntur cunae stella excepturi. Calcar vomito victoria eum amplus. Thesaurus tempus utroque viduo officiis corona possimus. Umquam patruus carbo trans cultura agnitio. Amplexus argumentum curatio statim voro cresco.
        - list [ref=e40]:
          - listitem [ref=e41]: acquaintance
          - listitem [ref=e42]: chasuble
      - separator [ref=e43]
      - generic [ref=e46]:
        - link [ref=e47] [cursor=pointer]:
          - /url: /profile/RohnDoe1@gmail.com
          - img [ref=e48]
        - generic [ref=e49]:
          - link "RohnDoe1@gmail.com" [ref=e50] [cursor=pointer]:
            - /url: /profile/RohnDoe1@gmail.com
          - generic [ref=e51]: July 15, 2026
        - generic [ref=e52]:
          - link " Edit Article" [ref=e53] [cursor=pointer]:
            - /url: /editor/laboriosam-valeo-deputo-58676
            - generic [ref=e54]: 
            - text: Edit Article
          - button " Delete Article" [ref=e55] [cursor=pointer]:
            - generic [ref=e56]: 
            - text: Delete Article
      - generic [ref=e59]:
        - generic:
          - list
        - group [ref=e61]:
          - textbox "Write a comment..." [ref=e63]
          - generic [ref=e64]:
            - img [ref=e65]
            - button "Post Comment" [ref=e66] [cursor=pointer]
  - contentinfo [ref=e67]:
    - generic [ref=e68]:
      - link "conduit" [ref=e69] [cursor=pointer]:
        - /url: /
      - generic [ref=e70]:
        - text: © 2026. An interactive learning project from
        - link "RealWorld OSS Project" [ref=e71] [cursor=pointer]:
          - /url: https://github.com/gothinkster/realworld
        - text: . Code licensed under MIT. Hosted by
        - link "Bondar Academy" [ref=e72] [cursor=pointer]:
          - /url: https://bondaracademy.com
        - text: .
```

# Test source

```ts
  1  | import { expect, Locator, Page } from '@playwright/test';
  2  | 
  3  | export class EditorPage {
  4  |   readonly page: Page;
  5  | 
  6  |   readonly newArticleLink: Locator;
  7  |   readonly titleInput: Locator;
  8  |   readonly descriptionInput: Locator;
  9  |   readonly bodyInput: Locator;
  10 |   readonly tagsInput: Locator;
  11 |   readonly publishButton: Locator;
  12 |   readonly editButton: Locator;
  13 |   readonly deleteButton: Locator;
  14 | 
  15 |   constructor(page: Page) {
  16 |     this.page = page;
  17 | 
  18 |     this.newArticleLink = page.getByRole('link', {
  19 |       name: 'New Article'
  20 |     });
  21 | 
  22 |     this.titleInput = page.getByPlaceholder('Article Title');
  23 | 
  24 |     this.descriptionInput = page.getByPlaceholder(
  25 |       "What's this article about?"
  26 |     );
  27 | 
  28 |     this.bodyInput = page.getByPlaceholder('Write your article (in markdown)');
  29 | 
  30 |     this.tagsInput = page.getByPlaceholder('Enter tags');
  31 | 
  32 |     this.publishButton = page.getByRole('button', {
  33 |       name: /Publish Article|Update Article/
  34 |     });
  35 | 
  36 |     this.editButton = page.getByRole('link', {
  37 |       name: /Edit Article/
  38 |     });
  39 | 
  40 |     this.deleteButton = page.getByRole('button', {
  41 |       name: /Delete Article/
  42 |     });
  43 |   }
  44 | 
  45 |   async openNewArticle() {
  46 |     await this.newArticleLink.click();
  47 |   }
  48 | 
  49 |   async createArticle(
  50 |     title: string,
  51 |     description: string,
  52 |     body: string,
  53 |     tags: string[]
  54 |   ) {
  55 |     await this.titleInput.fill(title);
  56 | 
  57 |     await this.descriptionInput.fill(description);
  58 | 
  59 |     await this.bodyInput.fill(body);
  60 | 
  61 |     for (const tag of tags) {
  62 |       await this.tagsInput.fill(tag);
  63 |       await this.tagsInput.press('Enter');
  64 |     }
  65 | 
  66 |     await this.publishButton.click();
  67 |   }
  68 | 
  69 |   async editArticle(
  70 |     title: string,
  71 |     description: string,
  72 |     body: string
  73 |   ) {
  74 |     await this.editButton.click();
  75 | 
  76 |     await this.titleInput.fill(title);
  77 | 
  78 |     await this.descriptionInput.fill(description);
  79 | 
  80 |     await this.bodyInput.fill(body);
  81 | 
  82 |     await this.publishButton.click();
  83 |   }
  84 | 
  85 |   async deleteArticle() {
> 86 |     await this.deleteButton.click();
     |                             ^ Error: locator.click: Error: strict mode violation: getByRole('button', { name: /Delete Article/ }) resolved to 2 elements:
  87 |   }
  88 | 
  89 |   async verifyArticle(title: string) {
  90 |     await expect(
  91 |       this.page.getByRole('heading', { name: title })
  92 |     ).toBeVisible();
  93 |   }
  94 | }
```