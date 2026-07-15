import { expect, Locator, Page } from '@playwright/test';

export class SettingsPage {
  readonly page: Page;

  readonly settingsLink: Locator;
  readonly imageUrlInput: Locator;
  readonly usernameInput: Locator;
  readonly bioInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly updateSettingsButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.settingsLink = page.getByRole('link', {
      name: 'Settings',
    });

    this.imageUrlInput = page.getByPlaceholder(
      'URL of profile picture'
    );

    this.usernameInput = page.getByPlaceholder(
      'Your Name'
    );

    this.bioInput = page.getByPlaceholder(
      'Short bio about you'
    );

    this.emailInput = page.getByPlaceholder(
      'Email'
    );

    this.passwordInput = page.getByPlaceholder(
      'New Password'
    );

    this.updateSettingsButton = page.getByRole('button', {
      name: 'Update Settings',
    });
  }

  async open() {
    await this.settingsLink.click();
  }

  async updateProfile(
    bio: string,
    imageUrl?: string,
    password?: string
  ) {
    await this.bioInput.fill(bio);

    if (imageUrl) {
      await this.imageUrlInput.fill(imageUrl);
    }

    if (password) {
      await this.passwordInput.fill(password);
    }

    await this.updateSettingsButton.click();
  }

  async verifyBioUpdated(bio: string) {
    await this.settingsLink.click();

    await expect(this.bioInput).toHaveValue(bio);
  }
}