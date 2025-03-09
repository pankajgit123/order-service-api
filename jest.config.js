export default {
  collectCoverage: true, // Enables coverage collection
  coverageDirectory: 'coverage', // Specifies the directory for the coverage report
  coverageReporters: ['text', 'lcov', 'json'], // Formats for the coverage report
  collectCoverageFrom: [
    'src/**/*.js', // Adjust the paths according to your project structure
    '!src/**/*.test.js', // Exclude test files from coverage
  ],
  transform: {
    '^.+\\.js$': 'babel-jest', // Transforms JavaScript files using Babel
  },
  testEnvironment: 'node', // Specifies the test environment (Node.js in this case)
};
