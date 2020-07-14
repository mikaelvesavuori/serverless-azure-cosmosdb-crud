const path = require('path');
const slsw = require('serverless-webpack');

console.log('Webpack config is in', __dirname);
console.log('slsw found Entries: ', slsw.lib.entries);

module.exports = {
  mode: 'production',
  // Since Azure Functions is slow to load many small files, we should have NO externals (if at all possible)
  //externals: [],
  entry: slsw.lib.entries,
  target: 'node',
  output: {
    libraryTarget: 'commonjs2',
    library: 'index',
    path: path.resolve(__dirname, '.webpack'),
    filename: '[name].js'
  },
  optimization: {
    minimize: false
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.(mjs|js)/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src'),
        exclude: [path.resolve(__dirname, 'node_modules')]
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        include: path.resolve(__dirname, 'src'),
        exclude: [path.resolve(__dirname, 'node_modules')]
      }
    ]
  },
  plugins: []
};
