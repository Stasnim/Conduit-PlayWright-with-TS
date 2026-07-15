# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: settings.spec.ts >> Settings >> should update user bio and profile image
- Location: tests\settings.spec.ts:14:7

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Sign in' })

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
          - link "RohnDoe401@gmail.com" [ref=e16] [cursor=pointer]:
            - /url: /profile/RohnDoe401@gmail.com
            - img [ref=e17]
            - text: RohnDoe401@gmail.com
  - generic [ref=e22]:
    - list [ref=e24]:
      - listitem [ref=e25]:
        - generic [ref=e26] [cursor=pointer]: Your Feed
      - listitem [ref=e27]:
        - generic [ref=e28]: Global Feed
      - text: 
    - generic [ref=e29]:
      - generic [ref=e31]:
        - generic [ref=e33]:
          - link [ref=e34] [cursor=pointer]:
            - /url: /profile/RohnDoe401@gmail.com
            - img [ref=e35]
          - generic [ref=e36]:
            - link "RohnDoe401@gmail.com" [ref=e37] [cursor=pointer]:
              - /url: /profile/RohnDoe401@gmail.com
            - generic [ref=e38]: July 15, 2026
          - button " 0" [ref=e40] [cursor=pointer]:
            - generic [ref=e41]: 
            - text: "0"
        - link "approbo surgo creptio Allatus suppono ad summisse. Read more... Test" [ref=e42] [cursor=pointer]:
          - /url: /article/approbo-surgo-creptio-58842
          - heading "approbo surgo creptio" [level=1] [ref=e43]
          - paragraph [ref=e44]: Allatus suppono ad summisse.
          - text: Read more...
          - list [ref=e45]:
            - listitem [ref=e46]: Test
      - generic [ref=e48]:
        - generic [ref=e50]:
          - link [ref=e51] [cursor=pointer]:
            - /url: /profile/RohnDoe401@gmail.com
            - img [ref=e52]
          - generic [ref=e53]:
            - link "RohnDoe401@gmail.com" [ref=e54] [cursor=pointer]:
              - /url: /profile/RohnDoe401@gmail.com
            - generic [ref=e55]: July 15, 2026
          - button " 0" [ref=e57] [cursor=pointer]:
            - generic [ref=e58]: 
            - text: "0"
        - link "debitis suscipit damnatio Excepturi acsi certus asporto valens ratione vulnus. Read more... Test" [ref=e59] [cursor=pointer]:
          - /url: /article/debitis-suscipit-damnatio-58842
          - heading "debitis suscipit damnatio" [level=1] [ref=e60]
          - paragraph [ref=e61]: Excepturi acsi certus asporto valens ratione vulnus.
          - text: Read more...
          - list [ref=e62]:
            - listitem [ref=e63]: Test
      - generic [ref=e65]:
        - generic [ref=e67]:
          - link [ref=e68] [cursor=pointer]:
            - /url: /profile/RohnDoe401@gmail.com
            - img [ref=e69]
          - generic [ref=e70]:
            - link "RohnDoe401@gmail.com" [ref=e71] [cursor=pointer]:
              - /url: /profile/RohnDoe401@gmail.com
            - generic [ref=e72]: July 15, 2026
          - button " 0" [ref=e74] [cursor=pointer]:
            - generic [ref=e75]: 
            - text: "0"
        - link "volutabrum natus acsi Curtus ubi veritas decumbo. Read more... character membership" [ref=e76] [cursor=pointer]:
          - /url: /article/volutabrum-natus-acsi-58842
          - heading "volutabrum natus acsi" [level=1] [ref=e77]
          - paragraph [ref=e78]: Curtus ubi veritas decumbo.
          - text: Read more...
          - list [ref=e79]:
            - listitem [ref=e80]: character
            - listitem [ref=e81]: membership
      - generic [ref=e83]:
        - generic [ref=e85]:
          - link [ref=e86] [cursor=pointer]:
            - /url: /profile/RohnDoe401@gmail.com
            - img [ref=e87]
          - generic [ref=e88]:
            - link "RohnDoe401@gmail.com" [ref=e89] [cursor=pointer]:
              - /url: /profile/RohnDoe401@gmail.com
            - generic [ref=e90]: July 15, 2026
          - button " 0" [ref=e92] [cursor=pointer]:
            - generic [ref=e93]: 
            - text: "0"
        - link "quaerat subvenio audax Coniecto laborum deorsum. Read more... Test" [ref=e94] [cursor=pointer]:
          - /url: /article/quaerat-subvenio-audax-58842
          - heading "quaerat subvenio audax" [level=1] [ref=e95]
          - paragraph [ref=e96]: Coniecto laborum deorsum.
          - text: Read more...
          - list [ref=e97]:
            - listitem [ref=e98]: Test
      - generic [ref=e100]:
        - generic [ref=e102]:
          - link [ref=e103] [cursor=pointer]:
            - /url: /profile/RohnDoe401@gmail.com
            - img [ref=e104]
          - generic [ref=e105]:
            - link "RohnDoe401@gmail.com" [ref=e106] [cursor=pointer]:
              - /url: /profile/RohnDoe401@gmail.com
            - generic [ref=e107]: July 15, 2026
          - button " 0" [ref=e109] [cursor=pointer]:
            - generic [ref=e110]: 
            - text: "0"
        - link "cresco repellendus iste Torrens carus perspiciatis quia. Read more... Test" [ref=e111] [cursor=pointer]:
          - /url: /article/cresco-repellendus-iste-58842
          - heading "cresco repellendus iste" [level=1] [ref=e112]
          - paragraph [ref=e113]: Torrens carus perspiciatis quia.
          - text: Read more...
          - list [ref=e114]:
            - listitem [ref=e115]: Test
      - generic [ref=e117]:
        - generic [ref=e119]:
          - link [ref=e120] [cursor=pointer]:
            - /url: /profile/RohnDoe401@gmail.com
            - img [ref=e121]
          - generic [ref=e122]:
            - link "RohnDoe401@gmail.com" [ref=e123] [cursor=pointer]:
              - /url: /profile/RohnDoe401@gmail.com
            - generic [ref=e124]: July 15, 2026
          - button " 0" [ref=e126] [cursor=pointer]:
            - generic [ref=e127]: 
            - text: "0"
        - link "basium voluptatibus tabesco Abscido apostolus patrocinor corroboro. Read more... Test" [ref=e128] [cursor=pointer]:
          - /url: /article/basium-voluptatibus-tabesco-58842
          - heading "basium voluptatibus tabesco" [level=1] [ref=e129]
          - paragraph [ref=e130]: Abscido apostolus patrocinor corroboro.
          - text: Read more...
          - list [ref=e131]:
            - listitem [ref=e132]: Test
      - generic [ref=e134]:
        - generic [ref=e136]:
          - link [ref=e137] [cursor=pointer]:
            - /url: /profile/RohnDoe401@gmail.com
            - img [ref=e138]
          - generic [ref=e139]:
            - link "RohnDoe401@gmail.com" [ref=e140] [cursor=pointer]:
              - /url: /profile/RohnDoe401@gmail.com
            - generic [ref=e141]: July 15, 2026
          - button " 0" [ref=e143] [cursor=pointer]:
            - generic [ref=e144]: 
            - text: "0"
        - link "antiquus verumtamen ventito Delego damnatio venia vorax spoliatio cras. Read more... Test" [ref=e145] [cursor=pointer]:
          - /url: /article/antiquus-verumtamen-ventito-58842
          - heading "antiquus verumtamen ventito" [level=1] [ref=e146]
          - paragraph [ref=e147]: Delego damnatio venia vorax spoliatio cras.
          - text: Read more...
          - list [ref=e148]:
            - listitem [ref=e149]: Test
      - generic [ref=e151]:
        - generic [ref=e153]:
          - link [ref=e154] [cursor=pointer]:
            - /url: /profile/RohnDoe401@gmail.com
            - img [ref=e155]
          - generic [ref=e156]:
            - link "RohnDoe401@gmail.com" [ref=e157] [cursor=pointer]:
              - /url: /profile/RohnDoe401@gmail.com
            - generic [ref=e158]: July 15, 2026
          - button " 0" [ref=e160] [cursor=pointer]:
            - generic [ref=e161]: 
            - text: "0"
        - link "turpis ustulo cruentus Tero tondeo utrimque. Read more... alb blowgun" [ref=e162] [cursor=pointer]:
          - /url: /article/turpis-ustulo-cruentus-58842
          - heading "turpis ustulo cruentus" [level=1] [ref=e163]
          - paragraph [ref=e164]: Tero tondeo utrimque.
          - text: Read more...
          - list [ref=e165]:
            - listitem [ref=e166]: alb
            - listitem [ref=e167]: blowgun
      - generic [ref=e169]:
        - generic [ref=e171]:
          - link [ref=e172] [cursor=pointer]:
            - /url: /profile/RohnDoe401@gmail.com
            - img [ref=e173]
          - generic [ref=e174]:
            - link "RohnDoe401@gmail.com" [ref=e175] [cursor=pointer]:
              - /url: /profile/RohnDoe401@gmail.com
            - generic [ref=e176]: July 15, 2026
          - button " 0" [ref=e178] [cursor=pointer]:
            - generic [ref=e179]: 
            - text: "0"
        - link "damno vinco calcar Audio ipsam voluptatum taedium defero conitor acsi atrox. Read more... Test" [ref=e180] [cursor=pointer]:
          - /url: /article/damno-vinco-calcar-58842
          - heading "damno vinco calcar" [level=1] [ref=e181]
          - paragraph [ref=e182]: Audio ipsam voluptatum taedium defero conitor acsi atrox.
          - text: Read more...
          - list [ref=e183]:
            - listitem [ref=e184]: Test
      - generic [ref=e186]:
        - generic [ref=e188]:
          - link [ref=e189] [cursor=pointer]:
            - /url: /profile/RohnDoe401@gmail.com
            - img [ref=e190]
          - generic [ref=e191]:
            - link "RohnDoe401@gmail.com" [ref=e192] [cursor=pointer]:
              - /url: /profile/RohnDoe401@gmail.com
            - generic [ref=e193]: July 15, 2026
          - button " 0" [ref=e195] [cursor=pointer]:
            - generic [ref=e196]: 
            - text: "0"
        - link "cetera tempore arbor Sum dolor volo canis defungo sopor voco unus. Read more... Test" [ref=e197] [cursor=pointer]:
          - /url: /article/cetera-tempore-arbor-58842
          - heading "cetera tempore arbor" [level=1] [ref=e198]
          - paragraph [ref=e199]: Sum dolor volo canis defungo sopor voco unus.
          - text: Read more...
          - list [ref=e200]:
            - listitem [ref=e201]: Test
      - navigation [ref=e202]:
        - list [ref=e203]:
          - listitem:
            - button "1" [ref=e204]
          - listitem:
            - button "2" [ref=e205] [cursor=pointer]
          - listitem:
            - button "3" [ref=e206] [cursor=pointer]
  - contentinfo [ref=e207]:
    - generic [ref=e208]:
      - link "conduit" [ref=e209] [cursor=pointer]:
        - /url: /
      - generic [ref=e210]:
        - text: © 2026. An interactive learning project from
        - link "RealWorld OSS Project" [ref=e211] [cursor=pointer]:
          - /url: https://github.com/gothinkster/realworld
        - text: . Code licensed under MIT. Hosted by
        - link "Bondar Academy" [ref=e212] [cursor=pointer]:
          - /url: https://bondaracademy.com
        - text: .
```

# Test source

```ts
  1  | import { expect, Locator, Page } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |   readonly page: Page;
  5  | 
  6  |   readonly signInLink: Locator;
  7  |   readonly emailInput: Locator;
  8  |   readonly passwordInput: Locator;
  9  |   readonly signInButton: Locator;
  10 |   readonly newArticleLink: Locator;
  11 |   readonly settingsLink: Locator;
  12 | 
  13 |   constructor(page: Page) {
  14 |     this.page = page;
  15 | 
  16 |     this.signInLink = page.getByRole('link', { name: 'Sign in' });
  17 |     this.emailInput = page.getByPlaceholder('Email');
  18 |     this.passwordInput = page.getByPlaceholder('Password');
  19 |     this.signInButton = page.getByRole('button', { name: 'Sign in' });
  20 | 
  21 |     this.newArticleLink = page.getByRole('link', {
  22 |       name: 'New Article',
  23 |     });
  24 | 
  25 |     this.settingsLink = page.getByRole('link', {
  26 |       name: 'Settings',
  27 |     });
  28 |   }
  29 | 
  30 |   async goto() {
  31 |     await this.page.goto('/');
> 32 |     await this.signInLink.click();
     |                           ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  33 |   }
  34 | 
  35 |   async login(email: string, password: string) {
  36 |     await this.emailInput.fill(email);
  37 |     await this.passwordInput.fill(password);
  38 |     await this.signInButton.click();
  39 |   }
  40 | 
  41 |   async verifyLoginSuccess() {
  42 |     await expect(this.newArticleLink).toBeVisible();
  43 |     await expect(this.settingsLink).toBeVisible();
  44 |   }
  45 | 
  46 |   async verifyLoginFailed() {
  47 |     await expect(
  48 |       this.page.getByText('email or password is invalid')
  49 |     ).toBeVisible();
  50 |   }
  51 | }
```