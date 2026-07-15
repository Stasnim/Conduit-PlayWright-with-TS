import { test } from '@playwright/test';
import { ArticleApi } from '../../src/api/articleApi';
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


  test('should delete an article', async () => {

    await articleApi.deleteArticle(
      article.article.slug
    );

  });

});