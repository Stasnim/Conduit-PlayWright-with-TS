import { test, expect } from '@playwright/test';
import { ArticleApi } from '../../src/api/articleApi';
import { HomePage } from '../../src/pages/HomePage';
import { generateArticleData } from '../../src/utils/testData';

test.describe('Filter Articles by Tag', () => {
  let articleApi: ArticleApi;
  let article: any;

  test.beforeEach(async () => {
    articleApi = new ArticleApi();
    await articleApi.init();

    const data = generateArticleData();

    data.tagList = ['Test'];

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

  test('should filter articles by tag', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();

    await homePage.selectTag('Test');

    await homePage.verifyArticlesVisible();

    await homePage.verifyArticleExists(article.article.title);
  });

  test('should not display unrelated articles', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();

    await homePage.selectTag('Test');

    await homePage.verifyArticleNotExists(
      'This Article Does Not Exist'
    );
  });
});