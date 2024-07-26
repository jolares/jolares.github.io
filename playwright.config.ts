import { PlaywrightTestConfig, defineConfig, devices } from '@playwright/test';

const CI = process.env.CI == 'true';
const HEADLESS = !(process.env.HEADLESS == 'false');
const TEST_DIR = process.env.TEST_DIR || './e2e-tests';
const ENV = process.env.ENV || 'development';
const GREP = process.env.GREP || undefined;
const GREP_INVERT = process.env.GREP || undefined;

/*
 * Playwright Configuration
 * Refer to https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  /*
   * Filter tests
   */
  testDir: TEST_DIR,
  grep: (GREP || undefined) as any,
  grepInvert: (GREP_INVERT || undefined) as any,

  // Run tests within a test file in parallel by default.
  fullyParallel: true,
  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!CI,
  // Number of times to retry failed tests
  retries: CI ? 2 : 0,
  // Opt out of parallel tests on CI
  workers: CI ? 1 : undefined,
  // Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',

  /*
   * Shared settings for all the projects below.
   * See https://playwright.dev/docs/api/class-testoptions.
   */
  use: {
    // Base URL to use in actions like `await page.goto('/')`
    // baseURL: 'http://127.0.0.1:3000',
    headless: HEADLESS,

    //  Collect trace when retrying failed test. See https://playwright.dev/docs/trace-viewer
    trace: 'on-first-retry',
  },

  /*
   * Configure projects for major browsers
   * See https://playwright.dev/docs/api/class-testoptions.
   */
  projects: [
    /* Desktop Viewports. */

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'Smoke',
    //   testMatch: /.*smoke.spec.ts/,
    //   retries: 0,
    //   grep:
    // },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },

    /* Mobile Viewports. */

    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },
  ],

  /* Run your local dev server before starting the tests */

  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
};
export default defineConfig(config);
