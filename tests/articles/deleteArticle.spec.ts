import { test, expect } from '@playwright/test';

import { ArticleApi } from '../../src/api/articleApi';
import { EditorPage } from '../../src/pages/EditorPage';
import { HomePage } from '../../src/pages/HomePage';
import { generateArticleData } from '../../src/utils/testData';

test.describe('Delete Article', () => {
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
 

  test('should delete an article', async ({ page }) => {
    const editorPage = new EditorPage(page);
    const homePage = new HomePage(page);

    await page.goto(`/article/${article.article.slug}`);

    await expect(
      page.getByRole('heading', {
        name: article.article.title,
      })
    ).toBeVisible();

    await editorPage.deleteArticle();

    await expect(page).toHaveURL('/');

    await homePage.verifyArticleNotExists(article.article.title);
  });

  test('should delete article successfully', async ({ page }) => {
    const editorPage = new EditorPage(page);
    const homePage = new HomePage(page);

    await page.goto(`/article/${article.article.slug}`);

    await editorPage.deleteArticle();

    await expect(page).toHaveURL('/');

    await homePage.verifyArticleNotExists(article.article.title);

    const response = await page.request.get(
        `${process.env.API_URL}articles/${article.article.slug}`
    );

    expect(response.status()).toBe(404);
});
});