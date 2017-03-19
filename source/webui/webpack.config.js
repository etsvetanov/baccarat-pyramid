var path = require('path');
var webpack = require('webpack');

function getNPMPackages() {
    var manifest = require('./package.json');

    return Object.keys(manifest.dependencies)
}

module.exports = {
    debug: true,
    devtool: "source-map",
    entry: {
        app: './app/index.jsx',
        vendor: getNPMPackages()
    },
    output: { path: '../webserver/Baccarat/baccarat/static/js/', filename: 'app.js'},
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: {
                        presets: ['es2015', 'react'],
                        plugins: ['transform-object-rest-spread'],
                        // presets: ['react']
                    }
                }
            }
        ]
    },
    resolve: {
        root: [
            path.resolve('./app')
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
    ]
};