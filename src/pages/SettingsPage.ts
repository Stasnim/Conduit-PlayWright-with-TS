import { expect, Locator, Page } from '@playwright/test';

export class SettingsPage {
  readonly page: Page;
  readonly settingsLink: Locator;
  readonly bioInput: Locator;
  readonly imageUrlInput: Locator;
  readonly updateSettingsButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.settingsLink = page.getByRole('link', { name: 'Settings' });
    this.bioInput = page.getByPlaceholder('Short bio about you');
    this.imageUrlInput = page.getByPlaceholder('URL of profile picture');
    this.updateSettingsButton = page.getByRole('button', { name: 'Update Settings' });
  }

  async open() {
    await this.settingsLink.click();
  }

  // Atomic Update: Fills fields, submits, and waits for API success
  async updateProfile(bio: string, imageUrl: string) {
    await this.bioInput.fill(bio);
    await this.imageUrlInput.fill(imageUrl);

    const [response] = await Promise.all([
      this.page.waitForResponse(res => res.url().includes('/api/user') && res.request().method() === 'PUT'),
      this.updateSettingsButton.click(),
    ]);
    
    expect(response.ok()).toBeTruthy();
  }

  // Robust Verification: Polls the element property directly
  // Replace your existing verifyValue method with this
async verifyValue(locator: Locator, expectedValue: string) {
  await expect.poll(async () => {
  return await locator.evaluate((el: HTMLTextAreaElement | HTMLInputElement) => el.value);
}, {
message: `Failed to verify value for ${locator}`,
 timeout: 10000, // 10 seconds is more than enough for SPA hydration
}).toBe(expectedValue);
}
}