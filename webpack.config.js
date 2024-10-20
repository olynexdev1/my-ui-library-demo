// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js',   // Entry file
  output: {
    path: path.resolve(__dirname, 'dist'),  // Output directory
    filename: 'my-ui-library.js',  // Output file name
    library: 'MyUILibrary',  // Export as a global variable
    libraryTarget: 'umd',  // Universal Module Definition, usable in Node and browser
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',  // Use Babel for transpiling JS
      },
    ],
  },
  mode: 'production',
};
