import { request } from '@playwright/test';

export async function getToken() {
  const apiContext = await request.newContext({
    baseURL: process.env.API_URL,
  });

  const response = await apiContext.post('/api/users/login', {
    data: {
      user: {
        email: process.env.EMAIL,
        password: process.env.PASSWORD,
      },
    },
  });

  const text = await response.text();

  if (!response.ok()) {
    throw new Error(
      `Login API failed: ${response.status()} ${text}`
    );
  }

  const body = JSON.parse(text);

  await apiContext.dispose();

  return body.user.token;
}