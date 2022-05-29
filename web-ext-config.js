module.exports = {
  artifactsDir: 'builds',
  ignoreFiles: [
    'web-ext.config.js',
    'package.json',
    'package-lock.json',
  ],
  // Command options:
  build: {
    overwriteDest: true,
  },
};
