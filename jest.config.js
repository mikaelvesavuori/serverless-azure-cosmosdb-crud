module.exports = {
  collectCoverage: true,
  coverageDirectory: 'jest-coverage',
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/jest.env.js'],
  transform: {
    '^.+\\.mjs$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest'
  },
  moduleFileExtensions: ['js', 'mjs', 'ts'],
  testMatch: ['<rootDir>/__tests__/**/*.test.+(js|mjs)'],
  testPathIgnorePatterns: ['/node_modules/']
};
