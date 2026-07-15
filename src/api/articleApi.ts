import { APIRequestContext, expect, request } from '@playwright/test';
import dotenv from 'dotenv';
import { getToken } from './authApi';

dotenv.config();

export class ArticleApi {
  private apiContext!: APIRequestContext;

  async init() {
    const token = await getToken();

    this.apiContext = await request.newContext({
      baseURL: process.env.API_URL,
      extraHTTPHeaders: {
        Authorization: `Token ${token}`,
      },
    });
  }

  async createArticle(
    title: string,
    description: string,
    body: string,
    tagList: string[] = []
  ) {
    const response = await this.apiContext.post('articles', {
      data: {
        article: {
          title,
          description,
          body,
          tagList,
        },
      },
    });

    expect(response.ok()).toBeTruthy();

    return await response.json();
  }

  async getArticle(slug: string) {
    const response = await this.apiContext.get(`articles/${slug}`);

    expect(response.ok()).toBeTruthy();

    return await response.json();
  }

  async deleteArticle(slug: string) {
    const response = await this.apiContext.delete(`articles/${slug}`);

    expect(response.ok()).toBeTruthy();
  }

  async dispose() {
  if (this.apiContext) {
    await this.apiContext.dispose();
  }
}
}