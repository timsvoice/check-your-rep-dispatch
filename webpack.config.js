const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/handler.js',
    target: 'node',
    noParse: [/aws-sdk/],
    output: {
        path: '.',
        filename: 'handler.js',
        libraryTarget: 'commonjs'
    },
    module: {
      loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.json$/, loaders: ['json']
        }
      ]
    }
};
