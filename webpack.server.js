const path = require('path');

module.exports = {
  // Inform webpack that we're building a bundle for NodeJS,
  // rather than building a bundle for the browser
  target: 'node',

  // Tell webpack the roote file of our server application
  entry: './src/index.js',

  // Tell webpack wehre to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] }}]
          ]
        }
      }
    ]
  }
};
