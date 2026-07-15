import { test, expect } from '@playwright/test';

import { SettingsPage } from '../src/pages/SettingsPage';
import { generateUserData } from '../src/utils/testData';

test.describe('User Settings', () => {

  test('should update user bio', async ({ page }) => {

    const settingsPage = new SettingsPage(page);

    const user = generateUserData();

    await page.goto('/');

    await settingsPage.open();

    await settingsPage.updateProfile(
      user.bio,
      user.image
    );

    // Verify the update persisted
    await settingsPage.open();

    await expect(settingsPage.bioInput).toHaveValue(user.bio);

    await expect(settingsPage.imageUrlInput).toHaveValue(user.image);

  });

  test('should not update with invalid email', async ({ page }) => {
  const settingsPage = new SettingsPage(page);

  await page.goto('/');

  await settingsPage.open();

  await settingsPage.emailInput.fill('invalid-email');

  await settingsPage.updateSettingsButton.click();

  await expect(page).toHaveURL(/settings/);

  await expect(settingsPage.updateSettingsButton).toBeVisible();

  await expect(settingsPage.emailInput).toHaveValue('invalid-email');
});
});