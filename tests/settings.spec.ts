import { test, expect } from '@playwright/test';
import { SettingsPage } from '../src/pages/SettingsPage';
import { generateUserData } from '../src/utils/testData';

test.describe('Settings Management', () => {
  test('should update user bio and image successfully', async ({ page }) => {
    const settingsPage = new SettingsPage(page);
    const user = generateUserData();

    await page.goto('/');
    await settingsPage.open();

    // 1. Update and wait for the API response
    await settingsPage.updateProfile(user.bio, user.image);
    
    // 2. Force SPA to re-fetch by navigating away and back
    await page.goto('/');
    await settingsPage.open();

    // 3. Resilient Verification
    await settingsPage.verifyValue(settingsPage.bioInput, user.bio);
    await settingsPage.verifyValue(settingsPage.imageUrlInput, user.image);
  });

  test('negative: should not allow saving invalid data', async ({ page }) => {
    const settingsPage = new SettingsPage(page);
    await page.goto('/');
    await settingsPage.open();

    // Trigger validation error
    await settingsPage.bioInput.fill('');
    await settingsPage.updateSettingsButton.click();

    // Assert that the user is still on the settings page and error is handled
    await expect(page).toHaveURL(/.*settings/);
  });
});