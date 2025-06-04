const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js', // Webpack knows where your app starts
  output: {
    filename: 'bundle.js', // Final compiled JS
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Deletes old files on each build
  },
  module: {
    rules: [
      { // JS transpilation
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      // Styles written in SCSS and compiled via Webpack sass loader.
      { // SASS processing
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Load template from src // Inject assets into HTML //
    }),
  ],
  devServer: {
    static: './src',
    open: true,
    port: 3000,
    hot: true,
    liveReload: true,
  },
  mode: 'development',
};
