import { expect, Locator, Page } from '@playwright/test';

export class EditorPage {
  readonly page: Page;
  readonly newArticleLink: Locator;
  readonly titleInput: Locator;
  readonly descriptionInput: Locator;
  readonly bodyInput: Locator;
  readonly tagsInput: Locator;
  readonly publishButton: Locator;
  readonly editButton: Locator;
  readonly deleteButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newArticleLink = page.getByRole('link', { name: 'New Article' });
    this.titleInput = page.getByPlaceholder('Article Title');
    this.descriptionInput = page.getByPlaceholder("What's this article about?");
    this.bodyInput = page.getByPlaceholder('Write your article (in markdown)');
    this.tagsInput = page.getByPlaceholder('Enter tags');
    // Regex allows the button to match 'Publish Article' or 'Update Article'
    this.publishButton = page.getByRole('button', { name: /Publish Article|Update Article/ });
    this.editButton = page.getByRole('link', { name: /Edit Article/ }).first();
    this.deleteButton = page.locator('.banner').getByRole('button', { name: /Delete Article/ });
  }

  async openNewArticle() {
    await this.newArticleLink.click();
  }

  /**
   * Clears and fills an input field to ensure clean state
   */
  private async clearAndFill(locator: Locator, value: string) {
    await locator.fill('');
    await locator.fill(value);
  }

  async createArticle(title: string, description: string, body: string, tags: string[]) {
    await this.clearAndFill(this.titleInput, title);
    await this.clearAndFill(this.descriptionInput, description);
    await this.clearAndFill(this.bodyInput, body);

    for (const tag of tags) {
      await this.tagsInput.fill(tag);
      await this.tagsInput.press('Enter');
    }

    // CRITICAL: Synchronize test with the API request
    await Promise.all([
      this.page.waitForResponse(res => res.url().includes('/api/articles') && res.request().method() === 'POST'),
      this.publishButton.click()
    ]);
  }

  async editArticle(title: string, description: string, body: string) {
    await this.editButton.click();

    await this.clearAndFill(this.titleInput, title);
    await this.clearAndFill(this.descriptionInput, description);
    await this.clearAndFill(this.bodyInput, body);

    // CRITICAL: Synchronize test with the PUT request
    await Promise.all([
      this.page.waitForResponse(res => res.url().includes('/api/articles/') && res.request().method() === 'PUT'),
      this.publishButton.click()
    ]);
  }

  async deleteArticle() {
    await Promise.all([
      this.page.waitForResponse(res => res.url().includes('/api/articles/') && res.request().method() === 'DELETE'),
      this.deleteButton.click()
    ]);
  }
}