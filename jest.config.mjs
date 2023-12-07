export default {
  preset: 'ts-jest',
  rootDir: './',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/src/__mocks__/fileMock.ts',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  coverageProvider: 'v8',
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.{ts,tsx}',
    '!./src/*.d.ts',
    '!/node_modules/',
    '!<rootDir>/coverage/**',
  ],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  testEnvironment: 'jsdom', 
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  coverageThreshold: {
    "global": {
      "branches": 50,
      "functions": 50,
      "lines": 50,
      "statements": 50
    }
  }, 
};