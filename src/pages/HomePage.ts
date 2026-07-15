import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  readonly articlePreview: Locator;

  constructor(page: Page) {
    this.page = page;
    this.articlePreview = page.locator('.article-preview');
  }

  async goto() {
    await this.page.goto('/');
  }

  async selectTag(tag: string) {
  const tagLink = this.page
    .locator('.sidebar')
  .getByText(tag, { exact: true });

  await expect(tagLink).toBeVisible();
  await tagLink.click();
}

  async verifyTagSelected(tag: string) {
    await expect(
      this.page.getByRole('link', { name: new RegExp(tag, 'i') })
    ).toBeVisible();
  }

  async verifyArticlesVisible() {
    await expect(this.articlePreview.first()).toBeVisible();
  }

  async verifyArticleExists(title: string) {
    await expect(
      this.page.getByRole('heading', { name: title })
    ).toBeVisible();
  }

  async verifyArticleNotExists(title: string) {
    await expect(
      this.page.getByRole('heading', { name: title })
    ).toHaveCount(0);
  }
}