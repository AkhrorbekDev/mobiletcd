const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  entry: {
    js: './main.js',
    html: './index.html',
    vendor: [
      'vue',
      'vue-router',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'vue$': 'vue/dist/vue.js',
    },
  },
  plugins: [
    new VueLoaderPlugin(),
  ],

};
