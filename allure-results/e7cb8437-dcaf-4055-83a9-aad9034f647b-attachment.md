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
Expected: "parent, philosopher, leader 🎟️"
Received: ""
Timeout:  10000ms

Call log:
  - Expect "toHaveValue" with timeout 10000ms
  - waiting for getByPlaceholder('Short bio about you')
    19 × locator resolved to <textarea rows="8" formcontrolname="bio" placeholder="Short bio about you" class="form-control form-control-lg ng-untouched ng-pristine ng-valid">              </textarea>
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
  13 |     // The updateProfile now handles the API synchronization and UI reload
  14 |     await settingsPage.updateProfile(user.bio, user.image);
  15 | 
  16 |     // Assertions now read fresh data from the server
  17 |     // Increased timeout handles the SPA hydration lag after reload
> 18 |     await expect(settingsPage.bioInput).toHaveValue(user.bio, { timeout: 10000 });
     |                                         ^ Error: expect(locator).toHaveValue(expected) failed
  19 |     await expect(settingsPage.imageUrlInput).toHaveValue(user.image, { timeout: 10000 });
  20 |   });
  21 | 
  22 |   test('should not update with invalid email', async ({ page }) => {
  23 |     const settingsPage = new SettingsPage(page);
  24 | 
  25 |     await page.goto('/');
  26 |     await settingsPage.open();
  27 | 
  28 |     await settingsPage.emailInput.fill('invalid-email');
  29 |     await settingsPage.updateSettingsButton.click();
  30 | 
  31 |     // Verify we remain on the settings page due to validation failure
  32 |     await expect(page).toHaveURL(/.*settings/);
  33 |     await expect(settingsPage.emailInput).toHaveValue('invalid-email');
  34 |   });
  35 | });
```