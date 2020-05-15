module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'd.ts', 'ts', 'tsx'],
  collectCoverage: true,
  coverageReporters: ['json', 'html'],
}
