import { test, expect } from '@playwright/test';
import { ArticleApi } from '../../src/api/articleApi';
import { EditorPage } from '../../src/pages/EditorPage';
import { generateArticleData } from '../../src/utils/testData';

test.describe('Edit Article', () => {
  let articleApi: ArticleApi;
  let article: any;

  test.beforeEach(async () => {
    articleApi = new ArticleApi();
    await articleApi.init();

    const data = generateArticleData();

    article = await articleApi.createArticle(
      data.title,
      data.description,
      data.body,
      data.tagList
    );
  });

  test.afterEach(async () => {
    await articleApi.dispose();
  });

  test('should edit an existing article', async ({ page }) => {
    const editorPage = new EditorPage(page);

    const updated = generateArticleData();

    await page.goto(`/article/${article.article.slug}`);

    await editorPage.editArticle(
      updated.title,
      updated.description,
      updated.body
    );

    // Wait until redirected to article page
    await expect(page).toHaveURL(/\/article\/.+/);

    // Verify updated title
    await expect(
      page.getByRole('heading', { name: updated.title })
    ).toBeVisible();

    // Current Bondar Academy UI only displays article body
    await expect(page.getByText(updated.body)).toBeVisible();
  });

  test('should not update article with empty title', async ({ page }) => {
    const editorPage = new EditorPage(page);

    await page.goto(`/article/${article.article.slug}`);

    await editorPage.editArticle(
      '',
      article.article.description,
      article.article.body
    );

    await expect(page).toHaveURL(/editor/);

    await expect(editorPage.publishButton).toBeVisible();
  });
});