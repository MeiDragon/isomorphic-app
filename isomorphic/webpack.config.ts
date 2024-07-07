import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'

export default {
	entry: './server.js',
	output: {
		filename: 'ssr.js',
		path: path.resolve(__dirname, './dist')
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
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
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
		]
	},
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		}),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
	],
	target: 'node' // 重要：指定目标环境为 Node.js
}
