var webpack = require('webpack'),
    path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    debug: true,
    entry: {
        main: './src/js/main.js'

    },
    output: {
        path: path.join(__dirname, './dist/js'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            // loaders: ["style", "css", "sass"]
            loader: ExtractTextPlugin.extract("css!sass")
        }, {
            test: /\.json/,
            loader: "json-loader"
        }, {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader'
        }],
        sassLoader: {
            includePaths: [path.resolve(__dirname, "./dist/css/")]
        },
    },
    plugins: [
        new ExtractTextPlugin("../css/style.css"),
        /*  new HtmlWebpackPlugin({
              hash: true,
              title: "Racial Classification Interactive",
              filename: "../index.html"
          }),*/
        new CopyWebpackPlugin([{
            from: './src/data/data.json',
            to: '../data/data.json'
        }, {
            from: './index.html',
            to: '../index.html'
        },
        {
            from: './src/images',
            to: '../images'
        }])
    ]
};
