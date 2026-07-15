# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: settings.spec.ts >> User Settings >> should not update with invalid email
- Location: tests\settings.spec.ts:32:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/email/i)
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText(/email/i)

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
- heading "Your Settings" [level=1]
- list
- group:
  - group:
    - textbox "URL of profile picture"
  - group:
    - textbox "Username"
  - group:
    - textbox "Short bio about you"
  - group:
    - textbox "Email": invalid-email
  - group:
    - textbox "New Password"
  - button "Update Settings"
- separator
- button "Or click here to logout."
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
  2  | 
  3  | import { SettingsPage } from '../src/pages/SettingsPage';
  4  | import { generateUserData } from '../src/utils/testData';
  5  | 
  6  | test.describe('User Settings', () => {
  7  | 
  8  |   test('should update user bio', async ({ page }) => {
  9  | 
  10 |     const settingsPage = new SettingsPage(page);
  11 | 
  12 |     const user = generateUserData();
  13 | 
  14 |     await page.goto('/');
  15 | 
  16 |     await settingsPage.open();
  17 | 
  18 |     await settingsPage.updateProfile(
  19 |       user.bio,
  20 |       user.image
  21 |     );
  22 | 
  23 |     // Verify the update persisted
  24 |     await settingsPage.open();
  25 | 
  26 |     await expect(settingsPage.bioInput).toHaveValue(user.bio);
  27 | 
  28 |     await expect(settingsPage.imageUrlInput).toHaveValue(user.image);
  29 | 
  30 |   });
  31 | 
  32 |   test('should not update with invalid email', async ({ page }) => {
  33 | 
  34 |     const settingsPage = new SettingsPage(page);
  35 | 
  36 |     await page.goto('/');
  37 | 
  38 |     await settingsPage.open();
  39 | 
  40 |     await settingsPage.emailInput.fill('invalid-email');
  41 | 
  42 |     await settingsPage.updateSettingsButton.click();
  43 | 
  44 |     // Validation should prevent successful update
  45 |     await expect(
  46 |       page.getByText(/email/i)
> 47 |     ).toBeVisible();
     |       ^ Error: expect(locator).toBeVisible() failed
  48 | 
  49 |   });
  50 | 
  51 | });
```