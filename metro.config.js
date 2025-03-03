const path = require('path');
const { getDefaultConfig } = require('@react-native/metro-config');

// Custom Metro configuration
const config = getDefaultConfig();

config.transformer.babelTransformerPath = require.resolve('react-native-babel-transformer');
config.watchFolders = [
  path.resolve(__dirname, 'src'),
  path.resolve(__dirname, 'node_modules'),
];

config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  'react-native': path.resolve(__dirname, 'node_modules/react-native'),
};

module.exports = config;
