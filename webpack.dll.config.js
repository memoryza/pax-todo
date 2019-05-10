var path = require('path');
var webpack = require('webpack');

module.exports = {
  watch: false,
  mode: 'development',
  entry: {
    vendor: [path.resolve(process.cwd(), 'src', 'vendor.js')],
  },
  output: {
    path: path.resolve(__dirname, 'src', 'dll'),
    filename: '[name].dll.js',
    library: '[name]_[hash]',
    libraryTarget: 'this'
  },
  plugins: [
    new webpack.DllPlugin({
      // 定义程序中打包公共文件的入口文件vendor.js
      context: process.cwd(),

      // manifest.json文件的输出位置
      path: path.join(process.cwd(), 'src','dll', '[name]-manifest.json'),

      // 定义打包的公共vendor文件对外暴露的函数名
      name: '[name]_[hash]'
    })
  ]
};