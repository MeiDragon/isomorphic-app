import path from 'path'
import { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import 'webpack-dev-server'

const clientWebpackConfig: Configuration = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  target: 'web',
  entry: './client/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'client.bundle.js',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ]
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',

    })
  ],
  devServer: {
    port: 8080,
    hot: true,
    historyApiFallback: true,
    static: path.join(__dirname, 'build'),
  },
}
const serverWebpackConfig: Configuration = {
  target: 'node',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: './server/index.js',
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        loader: "babel-loader",
      }
    ]
  }
}

export default [clientWebpackConfig, serverWebpackConfig]
