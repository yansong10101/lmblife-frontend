const webpack = require('webpack');
const path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: [
        path.resolve(__dirname, 'src/javascripts/main.js')
    ],
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        proxy: {
            '/api/*': 'http://ec2-52-38-143-243.us-west-2.compute.amazonaws.com:8001'
        }
    },
    devtool: "#inline-source-map",
    resolve: {
        root: ['node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"]
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            // {output}/file.txt
            {from: '../node_modules/bootstrap/fonts', to: 'fonts'},
            {from: '../node_modules/bootstrap/dist/css/bootstrap.css'},
            {from: '../node_modules/tinymce/tinymce.js'},
            {from: '../node_modules/tinymce/plugins', to: 'plugins'},
            {from: '../node_modules/tinymce/skins', to: 'skins'},
            {from: '../node_modules/tinymce/themes', to: 'themes'}
        ]),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"dev"'
        })
    ]
};
