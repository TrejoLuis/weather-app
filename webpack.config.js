const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Todo-List App'
    })
  ],
  devtool: 'source-map',
  devServer: {
    static: './dist'
  },
}
