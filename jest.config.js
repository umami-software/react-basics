module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.svg': '<rootDir>/test/mocks/svg.js',
    '\\.(css|less|jpg|png)$': '<rootDir>/test/mocks/emptyModule.js',
    '^(components|assets|hooks|styles)(.*)': '<rootDir>/src/$1/$2',
    '^(icons)': '<rootDir>/src/$1',
  },
};
