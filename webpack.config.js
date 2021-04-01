const { resolve } = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const port = process.env.PORT || 3030;

module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ["react-hot-loader/babel"],
              },
            },
          },
          {
            test: /\.css$/,
            exclude: /(node_modules)/,
            use: [
              { loader: 'style-loader' },
              { loader: 'css-loader' },
            ],            
          },
          {
            test: /\.scss$/,
            exclude: /(node_modules)/,
            use: [
              { loader: 'style-loader' },
              { loader: 'css-loader' },
              { loader: 'sass-loader' },
            ],
          },
          {
            test: /\.(png|jpg|gif|svg)$/,
            exclude: /(node_modules)/,
            use: [
              { loader: 'file-loader' },
            ],
          },
        ],
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanAfterEveryBuildPatterns: ['dist']
      }),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
      }),
    ],
    devServer: {
      host: 'localhost',
      port: port,
      historyApiFallback: true,
      open: true,
      hot: true,
    }
  }