import { test, expect } from '@playwright/test';

test.describe('', () => {
  test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(
      page.getByRole('heading', { name: 'Installation' })
    ).toBeVisible();
  });
});

// Using POM
import { PlaywrightDevPage } from './page-object-models/playwright-dev.pom';

test('getting started should contain table of contents', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  await playwrightDev.goto();
  await playwrightDev.getStarted();
  await expect(playwrightDev.tocList).toHaveText([
    `How to install Playwright`,
    `What's Installed`,
    `How to run the example test`,
    `How to open the HTML test report`,
    `Write tests using web first assertions, page fixtures and locators`,
    `Run single test, multiple tests, headed mode`,
    `Generate tests with Codegen`,
    `See a trace of your tests`,
  ]);
});

test('should show Page Object Model article', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  await playwrightDev.goto();
  await playwrightDev.pageObjectModel();
  await expect(page.locator('article')).toContainText(
    'Page Object Model is a common pattern'
  );
});

/* ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----*/

import AxeBuilder from '@axe-core/playwright';

test.describe('@accessibility', () => {
  // Scanning an entire page
  test('should not have any automatically detectable accessibility issues', async ({
    page,
  }) => {
    await page.goto('https://playwright.dev');

    const a11yScanResults = await new AxeBuilder({ page }).analyze(); // 4

    expect(a11yScanResults.violations).toEqual([]);
  });

  // Scan a specific part of a page
  test.describe('Navigation Menu', () => {
    test('should not have automatically detectable accessibility violations', async ({
      page,
    }) => {
      await page.goto('https://playwright.dev');

      await page.getByRole('button', { name: 'Navigation Menu' }).click();

      // It is important to waitFor() the page to be in the desired
      // state *before* running analyze(). Otherwise, axe might not
      // find all the elements your test expects it to scan.
      await page.locator('#navigation-menu-flyout').waitFor();

      const a11yScanResults = await new AxeBuilder({ page })
        .include('#navigation-menu-flyout')
        .analyze();

      expect(a11yScanResults.violations).toEqual([]);
    });
  });

  // Scanning for WCAG violations
  // https://playwright.dev/docs/accessibility-testing#scanning-for-wcag-violations

  test('should not have auto-detectable WCAG A or AA violations', async ({
    page,
  }) => {
    await page.goto('https://playwright.dev');

    const a11yScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      // Note: this is how we exclude some known issues
      .exclude('#element-with-known-issue')
      // Note: this is how we can disabling individual scan rules (not recommended)
      .disableRules(['duplicate-id'])
      .analyze();

    expect(a11yScanResults.violations).toEqual([]);
  });
});
