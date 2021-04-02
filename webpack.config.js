const { resolve } = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const port = process.env.PORT || 3030;

module.exports = {
    entry: './src/index.js',
    output: {
      filename:  'js/[name].bundle.js',
      path: resolve(__dirname, 'dist'),
    },
    performance: {
      hints: false,
      maxEntrypointSize: 400000,
      maxAssetSize: 100000,
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
            use: [
             MiniCssExtractPlugin.loader, 'css-loader'
               /*{ loader: 'style-loader', options :{ outputPath: "css/[name].[ext]" } },
              { loader: 'css-loader', options :{ outputPath: "css/[name].[ext]" } },*/
            ],            
          },
          {
            test: /\.scss$/,
            use: [
              { loader: 'style-loader' },
              { loader: 'css-loader' },
              { loader: 'sass-loader' },
            ],
          },
          {
            test: /\.(ttf|eot|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: [
              { loader: 'file-loader' , options :{ outputPath: 'fonts' }},
              { loader: 'url-loader?limit=100000', options :{ outputPath: 'fonts' }},
            ]            
          },
          {
            test: /\.(jpe?g|gif|svg|png)$/i,
            use: [
              { loader: 'file-loader?limit=10000', options :{ outputPath: 'images' } },
            ],
          },
        ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        title : 'Base-Webpack',
        template: './src/index.html',
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
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