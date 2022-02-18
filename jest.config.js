const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

module.exports = createJestConfig({
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^~src/(.*)$': '<rootDir>/src/$1',
    '^~common/(.*)$': '<rootDir>/src/common/$1',
    '^~modules/(.*)$': '<rootDir>/src/modules/$1',
  },
})
