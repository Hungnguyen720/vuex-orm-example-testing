module.exports = {
  preset: 'ts-jest',
  rootDir: __dirname,
  globals: {
    __DEV__: true
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^test/(.*)$': '<rootDir>/tests/$1'
  },
  testMatch: ['<rootDir>/tests/**/*.spec.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov', 'text-summary', 'clover'],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/attributes/types/Increment.ts',
    '!src/polyfills/index.ts',
    '!src/support/Utils.ts',
    '!src/index.cjs.ts',
    '!src/index.ts'
  ],
  transform: {"\\.ts$": ['ts-jest']}

}
