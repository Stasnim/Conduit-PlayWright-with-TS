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
      - link "conduit" [ref=e5]:
        - /url: /
      - list [ref=e6]:
        - listitem [ref=e7]:
          - link "Home" [ref=e8]:
            - /url: /
        - listitem [ref=e9]:
          - link " New Article" [ref=e10]:
            - /url: /editor
            - generic [ref=e11]: 
            - text: New Article
        - listitem [ref=e12]:
          - link " Settings" [ref=e13]:
            - /url: /settings
            - generic [ref=e14]: 
            - text: Settings
        - listitem [ref=e15]:
          - link "RohnDoe401@gmail.com" [ref=e16]:
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
          - link [ref=e34]:
            - /url: /profile/RohnDoe401@gmail.com
            - img [ref=e35]
          - generic [ref=e36]:
            - link "RohnDoe401@gmail.com" [ref=e37]:
              - /url: /profile/RohnDoe401@gmail.com
            - generic [ref=e38]: July 15, 2026
          - button " 0" [ref=e40] [cursor=pointer]:
            - generic [ref=e41]: 
            - text: "0"
        - link "damno vinco calcar Audio ipsam voluptatum taedium defero conitor acsi atrox. Read more... Test" [ref=e42]:
          - /url: /article/damno-vinco-calcar-58842
          - heading "damno vinco calcar" [level=1] [ref=e43]
          - paragraph [ref=e44]: Audio ipsam voluptatum taedium defero conitor acsi atrox.
          - text: Read more...
          - list [ref=e45]:
            - listitem [ref=e46]: Test
      - generic [ref=e48]:
        - generic [ref=e50]:
          - link [ref=e51]:
            - /url: /profile/RohnDoe401@gmail.com
            - img [ref=e52]
          - generic [ref=e53]:
            - link "RohnDoe401@gmail.com" [ref=e54]:
              - /url: /profile/RohnDoe401@gmail.com
            - generic [ref=e55]: July 15, 2026
          - button " 0" [ref=e57] [cursor=pointer]:
            - generic [ref=e58]: 
            - text: "0"
        - link "cetera tempore arbor Sum dolor volo canis defungo sopor voco unus. Read more... Test" [ref=e59]:
          - /url: /article/cetera-tempore-arbor-58842
          - heading "cetera tempore arbor" [level=1] [ref=e60]
          - paragraph [ref=e61]: Sum dolor volo canis defungo sopor voco unus.
          - text: Read more...
          - list [ref=e62]:
            - listitem [ref=e63]: Test
      - generic [ref=e65]:
        - generic [ref=e67]:
          - link [ref=e68]:
            - /url: /profile/RohnDoe401@gmail.com
            - img [ref=e69]
          - generic [ref=e70]:
            - link "RohnDoe401@gmail.com" [ref=e71]:
              - /url: /profile/RohnDoe401@gmail.com
            - generic [ref=e72]: July 15, 2026
          - button " 0" [ref=e74] [cursor=pointer]:
            - generic [ref=e75]: 
            - text: "0"
        - link "cernuus tepesco depulso Similique fugiat suadeo villa in laborum. Read more... Test" [ref=e76]:
          - /url: /article/cernuus-tepesco-depulso-58842
          - heading "cernuus tepesco depulso" [level=1] [ref=e77]
          - paragraph [ref=e78]: Similique fugiat suadeo villa in laborum.
          - text: Read more...
          - list [ref=e79]:
            - listitem [ref=e80]: Test
      - generic [ref=e82]:
        - generic [ref=e84]:
          - link [ref=e85]:
            - /url: /profile/RohnDoe401@gmail.com
            - img [ref=e86]
          - generic [ref=e87]:
            - link "RohnDoe401@gmail.com" [ref=e88]:
              - /url: /profile/RohnDoe401@gmail.com
            - generic [ref=e89]: July 15, 2026
          - button " 0" [ref=e91] [cursor=pointer]:
            - generic [ref=e92]: 
            - text: "0"
        - link "comprehendo accommodo textus Conculco cariosus claustrum civitas audacia utique carcer adnuo tribuo artificiose. Read more... Test" [ref=e93]:
          - /url: /article/comprehendo-accommodo-textus-58842
          - heading "comprehendo accommodo textus" [level=1] [ref=e94]
          - paragraph [ref=e95]: Conculco cariosus claustrum civitas audacia utique carcer adnuo tribuo artificiose.
          - text: Read more...
          - list [ref=e96]:
            - listitem [ref=e97]: Test
      - generic [ref=e99]:
        - generic [ref=e101]:
          - link [ref=e102]:
            - /url: /profile/RohnDoe401@gmail.com
            - img [ref=e103]
          - generic [ref=e104]:
            - link "RohnDoe401@gmail.com" [ref=e105]:
              - /url: /profile/RohnDoe401@gmail.com
            - generic [ref=e106]: July 15, 2026
          - button " 0" [ref=e108] [cursor=pointer]:
            - generic [ref=e109]: 
            - text: "0"
        - link "clibanus videlicet verto Deduco cuius adhuc pauci. Read more... Test" [ref=e110]:
          - /url: /article/clibanus-videlicet-verto-58842
          - heading "clibanus videlicet verto" [level=1] [ref=e111]
          - paragraph [ref=e112]: Deduco cuius adhuc pauci.
          - text: Read more...
          - list [ref=e113]:
            - listitem [ref=e114]: Test
      - generic [ref=e116]:
        - generic [ref=e118]:
          - link [ref=e119]:
            - /url: /profile/RohnDoe401@gmail.com
            - img [ref=e120]
          - generic [ref=e121]:
            - link "RohnDoe401@gmail.com" [ref=e122]:
              - /url: /profile/RohnDoe401@gmail.com
            - generic [ref=e123]: July 15, 2026
          - button " 0" [ref=e125] [cursor=pointer]:
            - generic [ref=e126]: 
            - text: "0"
        - link "caelum consuasor vis Apud alter compello. Read more... Test" [ref=e127]:
          - /url: /article/caelum-consuasor-vis-58842
          - heading "caelum consuasor vis" [level=1] [ref=e128]
          - paragraph [ref=e129]: Apud alter compello.
          - text: Read more...
          - list [ref=e130]:
            - listitem [ref=e131]: Test
      - generic [ref=e133]:
        - generic [ref=e135]:
          - link [ref=e136]:
            - /url: /profile/RohnDoe401@gmail.com
            - img [ref=e137]
          - generic [ref=e138]:
            - link "RohnDoe401@gmail.com" [ref=e139]:
              - /url: /profile/RohnDoe401@gmail.com
            - generic [ref=e140]: July 15, 2026
          - button " 0" [ref=e142] [cursor=pointer]:
            - generic [ref=e143]: 
            - text: "0"
        - link "error tutis conqueror Cernuus adipiscor ducimus delibero vulgo ventito ver ullam bellicus. Read more... Test" [ref=e144]:
          - /url: /article/error-tutis-conqueror-58842
          - heading "error tutis conqueror" [level=1] [ref=e145]
          - paragraph [ref=e146]: Cernuus adipiscor ducimus delibero vulgo ventito ver ullam bellicus.
          - text: Read more...
          - list [ref=e147]:
            - listitem [ref=e148]: Test
      - generic [ref=e150]:
        - generic [ref=e152]:
          - link [ref=e153]:
            - /url: /profile/RohnDoe401@gmail.com
            - img [ref=e154]
          - generic [ref=e155]:
            - link "RohnDoe401@gmail.com" [ref=e156]:
              - /url: /profile/RohnDoe401@gmail.com
            - generic [ref=e157]: July 15, 2026
          - button " 0" [ref=e159] [cursor=pointer]:
            - generic [ref=e160]: 
            - text: "0"
        - link "conculco caput decet Thalassinus porro apostolus. Read more... Test" [ref=e161]:
          - /url: /article/conculco-caput-decet-58842
          - heading "conculco caput decet" [level=1] [ref=e162]
          - paragraph [ref=e163]: Thalassinus porro apostolus.
          - text: Read more...
          - list [ref=e164]:
            - listitem [ref=e165]: Test
      - generic [ref=e167]:
        - generic [ref=e169]:
          - link [ref=e170]:
            - /url: /profile/RohnDoe401@gmail.com
            - img [ref=e171]
          - generic [ref=e172]:
            - link "RohnDoe401@gmail.com" [ref=e173]:
              - /url: /profile/RohnDoe401@gmail.com
            - generic [ref=e174]: July 15, 2026
          - button " 0" [ref=e176] [cursor=pointer]:
            - generic [ref=e177]: 
            - text: "0"
        - link "defendo comparo alienus Creo utor acer cura ago articulus cur. Read more... lyre pinstripe" [ref=e178]:
          - /url: /article/defendo-comparo-alienus-58842
          - heading "defendo comparo alienus" [level=1] [ref=e179]
          - paragraph [ref=e180]: Creo utor acer cura ago articulus cur.
          - text: Read more...
          - list [ref=e181]:
            - listitem [ref=e182]: lyre
            - listitem [ref=e183]: pinstripe
      - generic [ref=e185]:
        - generic [ref=e187]:
          - link [ref=e188]:
            - /url: /profile/RohnDoe401@gmail.com
            - img [ref=e189]
          - generic [ref=e190]:
            - link "RohnDoe401@gmail.com" [ref=e191]:
              - /url: /profile/RohnDoe401@gmail.com
            - generic [ref=e192]: July 15, 2026
          - button " 0" [ref=e194] [cursor=pointer]:
            - generic [ref=e195]: 
            - text: "0"
        - link "depromo tunc ipsam Spargo tersus cerno sed amplitudo taedium ex perferendis. Read more... Test" [ref=e196]:
          - /url: /article/depromo-tunc-ipsam-58842
          - heading "depromo tunc ipsam" [level=1] [ref=e197]
          - paragraph [ref=e198]: Spargo tersus cerno sed amplitudo taedium ex perferendis.
          - text: Read more...
          - list [ref=e199]:
            - listitem [ref=e200]: Test
      - navigation [ref=e201]:
        - list [ref=e202]:
          - listitem:
            - button "1" [ref=e203]
          - listitem:
            - button "2" [ref=e204] [cursor=pointer]
          - listitem:
            - button "3" [ref=e205] [cursor=pointer]
  - contentinfo [ref=e206]:
    - generic [ref=e207]:
      - link "conduit" [ref=e208]:
        - /url: /
      - generic [ref=e209]:
        - text: © 2026. An interactive learning project from
        - link "RealWorld OSS Project" [ref=e210]:
          - /url: https://github.com/gothinkster/realworld
        - text: . Code licensed under MIT. Hosted by
        - link "Bondar Academy" [ref=e211]:
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