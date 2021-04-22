const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = (env, argv) => {
  console.log('argv.mode', argv.mode)
  
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'main.js'
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'build'),
      compress: true,
      port: 3000,
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'public/index.html',
        inject: 'body',
        chunks: ['main']
      }),
    ],
    resolve: {
      extensions: [".js", ".jsx"]
    }
  }
}
module.exports = config