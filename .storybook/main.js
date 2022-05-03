const path = require('path');

module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async config => {
    config.resolve.modules = [...config.resolve.modules, path.resolve(__dirname, '../src')];

    const cssLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.css'));

    for (const { loader, options } of cssLoaderRule.use) {
      if (loader?.includes('css-loader') && options) {
        options.modules = {
          mode: 'local',
          localIdentName: '[name]__[local]--[hash:base64:5]',
        };
      }
    }

    // Remove svg from existing rule
    const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
