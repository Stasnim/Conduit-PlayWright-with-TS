import { APIRequestContext, expect, request } from '@playwright/test';
import { getToken } from './authApi';

export class ArticleApi {
  private apiContext!: APIRequestContext;

  async init() {
    const token = await getToken();

    this.apiContext = await request.newContext({
      // Ensure your .env API_URL is just the base (e.g., https://conduit-api.bondaracademy.com)
      baseURL: process.env.API_URL, 
      extraHTTPHeaders: {
        Authorization: `Token ${token}`,
      },
    });
  }

  async createArticle(title: string, description: string, body: string, tagList: string[] = []) {
    // Correct endpoint path: /api/articles
    const response = await this.apiContext.post('/api/articles', {
      data: { article: { title, description, body, tagList } },
    });

    const text = await response.text();

    if (!response.ok()) {
      throw new Error(`Create article failed: ${response.status()} ${text}`);
    }

    return JSON.parse(text);
  }

  async getArticle(slug: string) {
    // Correct endpoint path: /api/articles/${slug}
    const response = await this.apiContext.get(`/api/articles/${slug}`);

    const text = await response.text();

    if (!response.ok()) {
      throw new Error(`Get article failed: ${response.status()} ${text}`);
    }

    return JSON.parse(text);
  }

  async deleteArticle(slug: string) {
    // Correct endpoint path: /api/articles/${slug}
    const response = await this.apiContext.delete(`/api/articles/${slug}`);

    if (!response.ok()) {
      throw new Error(`Delete article failed: ${response.status()} ${await response.text()}`);
    }
  }

  async dispose() {
    if (this.apiContext) {
      await this.apiContext.dispose();
    }
  }
}