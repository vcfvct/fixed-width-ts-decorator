/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  rootDir: '.',
  testEnvironment: 'node',
  preset: 'ts-jest',
  testMatch: ['<rootDir>/**/*.test.ts'],
  clearMocks: true,
  coverageReporters: ['html', 'text', 'lcov'],
  coveragePathIgnorePatterns: [
    '/scripts/',
  ],
  reporters: ['default'],
};

