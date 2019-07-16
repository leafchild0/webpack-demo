const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: ['./src/index.js', './src/component.js']
    //component: './src/component.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Testing webpack'
    })
  ],
  mode: 'production',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};