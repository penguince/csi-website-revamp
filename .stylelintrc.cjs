module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-a11y/recommended',
  ],
  plugins: ['stylelint-a11y'],
  rules: {
    // Add custom rules or overrides here
  },
  ignoreFiles: ['**/node_modules/**', '**/dist/**', '**/public/**'],
};