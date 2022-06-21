module.exports = {
  plugins: ['stylelint-prettier'],
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'prettier/prettier': true,
  },
  overrides: [
    {
      files: ['**/*.vue'],
      extends: [
        'stylelint-config-standard-vue',
        'stylelint-config-standard-vue/scss',
        'stylelint-config-prettier',
      ],
    },
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
      extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier'],
    },
  ],
}
