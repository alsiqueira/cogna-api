export default {
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testMatch: ['**/__tests__/unit/**/*.test.js'],
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/unit/setup.js'],
  testTimeout: 10000,
  verbose: true,
}; 