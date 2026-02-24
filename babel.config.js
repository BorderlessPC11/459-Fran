module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@services': './src/services',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation',
          '@assets': './assets',
        },
      },
    ],
  ],
};
