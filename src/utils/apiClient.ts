import { APIRequestContext, request } from '@playwright/test';

export class ApiClient {
  private apiContext!: APIRequestContext;

  async init(token?: string) {
    this.apiContext = await request.newContext({
      baseURL: process.env.API_URL,
      extraHTTPHeaders: token
        ? {
            Authorization: `Token ${token}`,
          }
        : {},
    });
  }

  get context() {
    return this.apiContext;
  }

  async dispose() {
    await this.apiContext.dispose();
  }
}