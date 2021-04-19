module.exports = {
  collectCoverage: true,
  coverageDirectory: 'jest-coverage',
  collectCoverageFrom: ['src/*.ts', 'src/**/*.ts'],
  coveragePathIgnorePatterns: [],
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/jest.env.js'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  moduleFileExtensions: ['js', 'ts'],
  testMatch: ['<rootDir>/__tests__/**/*.test.ts'],
  testPathIgnorePatterns: ['/node_modules/']
};
