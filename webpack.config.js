const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.ts',// Entry point of your application
   resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
            ],
          },
        },
      },
      {
        test: /\.scss$/, // SCSS files
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.less$/, // LESS files
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/, // Image files
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // Font files
        use: ['file-loader'],
      },
      {
        test: /\.xml$/, // XML files
        use: ['xml-loader'],
      },
      {
        test: /\.csv$/, // CSV files
        use: ['csv-loader'],
      },
    ],
  },

  plugins: [
    // other plugins...
    new HtmlWebpackPlugin({
      template: './src/index.html', // Path to your HTML file
      inject: false,
    }),
  ],
};
