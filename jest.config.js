/** @type {import('jest').Config} */
const config = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|@react-navigation)/)',
  ],
  setupFilesAfterEnv: ['./setup-jest.js'],
  setupFiles: ['reflect-metadata'],
};

module.exports = config;
