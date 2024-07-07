import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import 'webpack-dev-server';

const config: Configuration = {
  // @ts-expect-error
  mode: process.env.NODE_ENV,
	entry: './src/index.tsx',
  // entry: './src/App.tsx',
	module: {
		rules: [
			{
				test: /.(jsx?)|(tsx?)$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html'),
		}),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
	],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
	devServer: {
		static: path.join(__dirname, 'dist'),
		compress: true,
		port: 4000,
	},
  externals: {}
};

export default config;
