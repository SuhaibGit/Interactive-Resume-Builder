const path = require('path');

module.exports = {
  entry: './main.ts', // Entry point for your application
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  resolve: {
    extensions: ['.ts', '.js'], // Resolve .ts and .js files
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Process .ts files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'development', // Set the mode to development or production
};
