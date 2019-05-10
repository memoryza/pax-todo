var path = require('path');
var webpack = require('webpack');
var config = {
  watch: true,
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
}
if (process.argv.filter(item => item.split('=')[0] === '--ext').map(item => item.split('=')[1]).includes('dll_build')) {
  config.resolve = {
    alias: {
      // 活动工作流常用组件路径map
      jquery: "jquery",
      redux: "redux"
    },
    extensions: ['.js']
  };
  config.plugins = [
    new webpack.DllReferencePlugin({
      context: process.cwd(), // 跟dll.config里面DllPlugin的context一致
      manifest: require(path.join(__dirname, 'src', 'dll', "vendor-manifest.json"))
    }),
  ];
}
module.exports = config;