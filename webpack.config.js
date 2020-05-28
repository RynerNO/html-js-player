const path = require('path');
const MiniCssExtract = require('mini-css-extract-plugin')
module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: "/",
    index: "demo.html",
    port: 3000
  },
  entry: './src/player.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'Player',
    libraryExport: 'default',
    filename: 'player.js'
  },
  plugins: [new MiniCssExtract({
    filename: 'player.css'
  })],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtract.loader,
          'css-loader',
          'sass-loader',
        ],
      },

      {
        test: /\.m?js/i,
        use: [
         'babel-loader'
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: [
          'raw-loader',
        ]
      },
      {
        test: /\.pug$/,
        use: [
          'raw-loader',
          'pug-html-loader',
          ]
    }
    ]
  }
};
