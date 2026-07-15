# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: settings.spec.ts >> User Settings >> should update user bio
- Location: tests\settings.spec.ts:6:7

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  getByPlaceholder('Short bio about you')
Expected: "entrepreneur"
Received: ""
Timeout:  5000ms

Call log:
  - Expect "toHaveValue" with timeout 5000ms
  - waiting for getByPlaceholder('Short bio about you')
    13 × locator resolved to <textarea rows="8" formcontrolname="bio" placeholder="Short bio about you" class="form-control form-control-lg ng-untouched ng-pristine ng-valid">              </textarea>
       - unexpected value ""

```

```yaml
- textbox "Short bio about you"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { SettingsPage } from '../src/pages/SettingsPage';
  3  | import { generateUserData } from '../src/utils/testData';
  4  | 
  5  | test.describe('User Settings', () => {
  6  |   test('should update user bio', async ({ page }) => {
  7  |     const settingsPage = new SettingsPage(page);
  8  |     const user = generateUserData();
  9  | 
  10 |     await page.goto('/');
  11 |     await settingsPage.open();
  12 | 
  13 |     // 1. Update and wait for the API response
  14 |     await settingsPage.updateProfile(user.bio, user.image);
  15 |     
  16 |     // 2. Force state synchronization via a navigation cycle and GET request check
  17 |     await settingsPage.reloadAndVerify();
  18 | 
  19 |     // 3. Simple, reliable assertion
> 20 |     await expect(settingsPage.bioInput).toHaveValue(user.bio);
     |                                         ^ Error: expect(locator).toHaveValue(expected) failed
  21 |     await expect(settingsPage.imageUrlInput).toHaveValue(user.image);
  22 |   });
  23 | 
  24 |   test('should not update with invalid email', async ({ page }) => {
  25 |     const settingsPage = new SettingsPage(page);
  26 | 
  27 |     await page.goto('/');
  28 |     await settingsPage.open();
  29 | 
  30 |     await settingsPage.emailInput.fill('invalid-email');
  31 |     await settingsPage.updateSettingsButton.click();
  32 | 
  33 |     // Verify error state (user remains on settings page)
  34 |     await expect(page).toHaveURL(/.*settings/);
  35 |     await expect(settingsPage.emailInput).toHaveValue('invalid-email');
  36 |   });
  37 | });
```