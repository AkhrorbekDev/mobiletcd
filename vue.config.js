// vue.config.js
const path = require('path');

module.exports = {
  devServer: {
    port: 3000,
    https: false,
    hotOnly: false,
  },
  // configureWebpack: {
  //   output: {
  //     path: path.resolve(__dirname, 'dist'),
  //     publicPath: '/',
  //     filename: 'app.js',
  //   },
  //   resolve: {
  //     extensions: ['.vue', '.js', '.jsx'],
  //     alias: {
  //       'vue$': 'vue/dist/vue.js',
  //     },
  //   },
  // module: {
  //   rules: [
  //     {
  //       test: /\.vue$/,
  //       loader: 'vue-loader',
  //     },
  //     {
  //       test: /\.(scss|sass)$/,
  //       loader: 'sass-loader',
  //     },
  //
  //   ],
  // },
  //
  // },

  // chainWebpack: (config) => chainWebpack(config),
};
