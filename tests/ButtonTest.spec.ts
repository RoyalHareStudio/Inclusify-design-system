import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Button Component', () => {
    test.beforeEach( async ({ page }) => {
        await page.goto('http://localhost:6006/iframe.html?globals=&id=example-button--primary&viewMode=story')
    });

    test('Should render and be visible', async ({ page }) => {
        const button = page.getByTestId('button-primary-storybook-test');
        await expect(button).toBeVisible();
    });

    test('Check accessibility violations on Storybook', async ({ page }) => {
        const results = await new AxeBuilder({ page }).analyze();
        console.log(results);
        expect(results.violations).toEqual([]);
    })
});