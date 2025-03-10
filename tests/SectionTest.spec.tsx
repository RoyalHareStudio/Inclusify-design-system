import { test, expect} from '@playwright/test';

test.describe('Section Component', () => {
    test.beforeEach( async ({ page }) => {
        const websiteLink = 'Inclusify-design-system/iframe.html?globals=&args=&id=wrapper-section--roleis-main&viewMode=story';

        await page.goto(websiteLink);
    });

    test('Should render the section component properly', async ({ page }) => {
        const sectionComponent = page.getByTestId('section-roleismain-storybook-test');
        await expect(sectionComponent).toBeVisible();
    });

    test('Should render the section children properly', async ({ page }) => {
        const headingComponent = page.getByTestId('testSubcomponents-heading');
        await expect(headingComponent).toBeVisible();
    });

    test('Section role should be Main', async ({ page }) => {
        const sectionComponent = page.getByTestId('section-roleismain-storybook-test');
        await expect(sectionComponent).toHaveRole('main');
    });
})