var nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/handler.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: '.',
        filename: 'handler.js'
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
