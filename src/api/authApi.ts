import { request } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export async function getToken(): Promise<string> {
  console.log('API_URL:', process.env.API_URL);

  const apiContext = await request.newContext({
    baseURL: process.env.API_URL,
  });

  const response = await apiContext.post('users/login', {
    data: {
      user: {
        email: process.env.EMAIL,
        password: process.env.PASSWORD,
      },
    },
  });

   console.log('Actual URL:', response.url());
  console.log('Status:', response.status());

  const text = await response.text();
  console.log(text);

  if (!response.ok()) {
    throw new Error(
      `Login API failed: ${response.status()} ${await response.text()}`
    );
  }

  const body = await response.json();

  await apiContext.dispose();

  return body.user.token;
}