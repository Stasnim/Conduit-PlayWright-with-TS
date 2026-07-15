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
    - generic [ref=e30]: Loading articles...
  - contentinfo [ref=e31]:
    - generic [ref=e32]:
      - link "conduit" [ref=e33]:
        - /url: /
      - generic [ref=e34]:
        - text: © 2026. An interactive learning project from
        - link "RealWorld OSS Project" [ref=e35]:
          - /url: https://github.com/gothinkster/realworld
        - text: . Code licensed under MIT. Hosted by
        - link "Bondar Academy" [ref=e36]:
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