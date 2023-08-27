#!/usr/bin/env node
/*
 * This npm pre-install script runs before the package is installed. It checks that
 * the necessary system dependencies are installed. Checks for:
 *  - NodeJS version
 */

const CI = process.env.CI;

if (CI) {
  process.exit(0);
}

// const childProcess = require('child_process');

// Check node version
const nodeVersion = process.version.slice(1).split('.');
const expectedNodeVersion = 18;
if (+nodeVersion[0] < expectedNodeVersion) {
  console.error(
    `Make sure that your installed Node version is greater than v${expectedNodeVersion}`
  );
  process.exit(1);
}
