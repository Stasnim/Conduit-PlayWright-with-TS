import { test, expect } from '@playwright/test';

import { EditorPage } from '../../src/pages/EditorPage';
import { generateArticleData } from '../../src/utils/testData';

test.describe('Create Article', () => {

    test('should create a new article', async ({ page }) => {

        const editorPage = new EditorPage(page);

        const article = generateArticleData();

        await page.goto('/');
await expect(page).toHaveTitle(/Conduit/);

        await editorPage.openNewArticle();

        await editorPage.createArticle(
            article.title,
            article.description,
            article.body,
            article.tagList
        );

        // Assertions

       await expect(page).toHaveURL(
    new RegExp(article.title.replace(/\s+/g, '-').toLowerCase())
);

        await expect(
            page.getByRole('heading', {
                name: article.title
            })
        ).toBeVisible();

        await expect(
            page.getByText(article.description)
        ).toBeVisible();

        await expect(
            page.getByText(article.body)
        ).toBeVisible();

        for (const tag of article.tagList) {
            await expect(
                page.getByText(tag)
            ).toBeVisible();
        }
    });

    test('should not create article when title is empty', async ({ page }) => {

        const editorPage = new EditorPage(page);

        const article = generateArticleData();

        await page.goto('/');

        await editorPage.openNewArticle();

        await editorPage.createArticle(
            '',
            article.description,
            article.body,
            article.tagList
        );

        // Stay on editor page

        await expect(page).toHaveURL(/editor/);

        // Publish button still exists

        await expect(editorPage.publishButton).toBeVisible();
    });

});