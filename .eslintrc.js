module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ['@website/custom'],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
}
