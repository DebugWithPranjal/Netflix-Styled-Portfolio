const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
// This configuration allows you to use '@' as an alias for the 'src' directory in your imports.