const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, '../components'),
      hooks: path.resolve(__dirname, '../hooks'),
      styles: path.resolve(__dirname, '../styles'),
      assets: path.resolve(__dirname, '../assets'),
    };

    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];

    const rule = config.module.rules.find(({ test }) => test.test('.svg'));
    rule.exclude = /\.svg$/;

    config.module.rules.unshift({
      test: /\.svg$/,
      issuer: /\.{js|jsx|ts|tsx}$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
