'use strict';

const webpack = require('webpack');

module.exports = {
    context: __dirname + "/src",
    entry: {
        build: "./index",
    },
    output: {
        path: __dirname + '/public/content/',
        filename: "[name].js",
        library: "[name]"
    },

    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: "source-map",

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        /*new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),*/
        
      /*  new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings: false,
                drop_console: false,
                unsafe: true
            }
        })*/
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        "react",
                        "es2015",
                        "stage-2"
                    ],
                },
            }

        ]

    }

}