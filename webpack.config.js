const path = require('path');

module.exports = {
  entry: {
    index: ['./src/index.js', './src/component.js']
    //component: './src/component.js'
  },
  mode: 'production',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};