#!/usr/bin/env node

const childProcess = require('child_process');

const CI = process.env.CI;

if (CI) {
  process.exit(0);
} else {
  // Installs Husky. Refer to https://typicode.github.io/husky/
  childProcess.execSync('npx husky install');
}
