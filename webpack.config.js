const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
        template: 'public/index.html'
    }),
    new CopyPlugin([
      { from: 'public', to: '' },
    ]),
  ],
};