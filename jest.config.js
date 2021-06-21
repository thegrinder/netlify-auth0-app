module.exports = {
  rootDir: './src',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '../jest/setEnvVars',
    '../jest/setupTests',
    'jest-localstorage-mock',
  ],
  moduleDirectories: ['node_modules'],
  collectCoverageFrom: ['**/*.js'],
  coverageDirectory: '../coverage',
  moduleNameMapper: {
    '~(.*)$': '<rootDir>/$1',
  },
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '../jest/*.js'],
  transform: {
    '^.+\\.(ts|tsx|js)$': 'babel-jest',
  },
};
