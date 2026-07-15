import { test, expect } from '@playwright/test';
import { EditorPage } from '../../src/pages/EditorPage';
import { generateArticleData } from '../../src/utils/testData';

test.describe('Create Article', () => {
  test('should create a new article', async ({ page }) => {
    const editorPage = new EditorPage(page);
    const article = generateArticleData();

    await page.goto('/');
    await editorPage.openNewArticle();

    // Use the EditorPage method which now includes network synchronization
    await editorPage.createArticle(
      article.title,
      article.description,
      article.body,
      article.tagList
    );

    // Verify URL pattern after navigation
    await expect(page).toHaveURL(/\/article\/.+/);

    // Assert article details
    await expect(page.getByRole('heading', { name: article.title })).toBeVisible();
    await expect(page.getByText(article.description)).toBeVisible();
    await expect(page.getByText(article.body)).toBeVisible();

    // Precisely check tags within the container
    const tagList = page.locator('.tag-list');
    for (const tag of article.tagList) {
      await expect(tagList).toContainText(tag);
    }
  });

  test('should not create article when title is empty', async ({ page }) => {
    const editorPage = new EditorPage(page);
    const article = generateArticleData();

    await page.goto('/');
    await editorPage.openNewArticle();

    // Fill form without title
    await editorPage.titleInput.fill('');
    await editorPage.descriptionInput.fill(article.description);
    await editorPage.bodyInput.fill(article.body);
    await editorPage.publishButton.click();

    // Verify stay on editor page (URL should still contain 'editor')
    await expect(page).toHaveURL(/.*editor/);
    await expect(editorPage.publishButton).toBeVisible();
  });
});