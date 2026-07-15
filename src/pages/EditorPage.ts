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

    this.newArticleLink = page.getByRole('link', {
      name: 'New Article'
    });

    this.titleInput = page.getByPlaceholder('Article Title');

    this.descriptionInput = page.getByPlaceholder(
      "What's this article about?"
    );

    this.bodyInput = page.getByPlaceholder('Write your article (in markdown)');

    this.tagsInput = page.getByPlaceholder('Enter tags');

    this.publishButton = page.getByRole('button', {
      name: /Publish Article|Update Article/
    });

    this.editButton = page.getByRole('link', { name: /Edit Article/ })
  .first();

    this.deleteButton = page
    .locator('.banner')
    .getByRole('button', {
        name: /Delete Article/
    });
  }

  async openNewArticle() {
    await this.newArticleLink.click();
  }

  async createArticle(
    title: string,
    description: string,
    body: string,
    tags: string[]
  ) {
    await this.titleInput.fill(title);

    await this.descriptionInput.fill(description);

    await this.bodyInput.fill(body);

    for (const tag of tags) {
      await this.tagsInput.fill(tag);
      await this.tagsInput.press('Enter');
    }

    await this.publishButton.click();
  }

  async editArticle(
    title: string,
    description: string,
    body: string
  ) {
    await this.editButton.click();

    await this.titleInput.fill(title);

    await this.descriptionInput.fill(description);

    await this.bodyInput.fill(body);

    await this.publishButton.click();
  }

 async deleteArticle() {
    await this.deleteButton.click();
}

  async verifyArticle(title: string) {
    await expect(
      this.page.getByRole('heading', { name: title })
    ).toBeVisible();
  }
}