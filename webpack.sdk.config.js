const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src/javascripts/SDK'),
    entry: [
        path.resolve(__dirname, 'src/javascripts/SDK/main.js')
    ],
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'sdk')
    },
    resolve: {
        root: ['node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"]
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            }
        ]
    },
    devServer: {
        proxy: {
            '/api/*': 'http://ec2-52-38-143-243.us-west-2.compute.amazonaws.com:8001'
        }
    },
    devtool: "#inline-source-map"
};
