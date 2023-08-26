import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightDevPage {
  // Selectors
  readonly getStartedLink = this.page.locator('a', { hasText: 'Get started' });
  readonly gettingStartedHeader = this.page.locator('h1', { hasText: 'Installation' });
  readonly pomLink = this.page.locator('li', {
    hasText: 'Guides',
  }).locator('a', {
    hasText: 'Page Object Model',
  });
  readonly tocList = this.page.locator('article div.markdown ul > li > a');

  constructor(public page: Page) {}

  async goto() {
    await this.page.goto('https://playwright.dev');
  }

  async getStarted() {
    await this.getStartedLink.first().click();
    await expect(this.gettingStartedHeader).toBeVisible();
  }

  async pageObjectModel() {
    await this.getStarted();
    await this.pomLink.click();
  }
}