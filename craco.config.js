const path = require('path')
const { ESLINT_MODES } = require('@craco/craco')

module.exports = {
  webpack: {
    alias: {
      '@images': path.resolve(__dirname, 'src/assets/images/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@store': path.resolve(__dirname, 'src/store/'),
    },
  },
  eslint: {
    mode: ESLINT_MODES.file,
  },
}
