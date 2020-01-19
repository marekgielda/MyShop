module.exports = {
  extends: [
    'react-app',
    'airbnb',
    'plugin:jsx-a11y/recommended'
  ],
  plugins: [
    'jsx-a11y'
  ],
  rules: {
    semi: ['error', 'never'],
    indent: ['error', 2],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        'extensions': ['.js', '.jsx']
      }
    ],
  }
}