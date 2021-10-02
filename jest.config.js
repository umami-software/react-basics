module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: {
    '\\.(css|less|jpg|png|svg)$': '<rootDir>/mocks/emptyModule.js',
  },
};
