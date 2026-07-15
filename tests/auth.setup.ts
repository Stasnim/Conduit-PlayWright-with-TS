import { test as setup, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

setup('Authenticate User', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'Sign in' }).click();

  await page.getByPlaceholder('Email').fill(process.env.EMAIL!);
  await page.getByPlaceholder('Password').fill(process.env.PASSWORD!);

  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page.getByRole('link', { name: 'New Article' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Settings' })).toBeVisible();

  await page.context().storageState({
    path: './storage/auth.json',
  });
});