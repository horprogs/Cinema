global.Promise = require('bluebird');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var cssName = process.env.NODE_ENV === 'production' ? 'styles-[hash].css' : 'styles.css';
var jsName = process.env.NODE_ENV === 'production' ? 'bundle-[hash].js' : 'bundle.js';

var plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            BROWSER: JSON.stringify(true),
            NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
        }
    }),
    new ExtractTextPlugin(cssName)
];

if (process.env.NODE_ENV === 'production') {
    plugins.push(
        new CleanWebpackPlugin(['public/'], {
            root: __dirname,
            verbose: true,
            dry: false
        })
    );
    plugins.push(new webpack.optimize.DedupePlugin());
    plugins.push(new webpack.optimize.OccurenceOrderPlugin());
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }));
}

module.exports = {
    devtool: process.env.NODE_ENV !== 'production' ? 'source-map' : null,
    entry: ['babel-polyfill', './src/client.js'],
    debug: process.env.NODE_ENV !== 'production',
    resolve: {
        root: path.join(__dirname, 'src'),
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx']
    },
    plugins,
    output: {
        path: path.join(__dirname, 'public'),
        filename: jsName,
        publicPath: '/public/'
    },
    module: {
        loaders: [
            {                                            
                test: /\.js/,
                loader: process.env.NODE_ENV !== 'production' ? 'babel!eslint-loader' : 'babel',
                exclude: [/node_modules/, /public/],
                include: path.join(__dirname, 'src')
            },
            {                                                       
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?modules&importLoaders=1',
                    'postcss-loader'
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    eslint: {configFile: '.eslintrc'}
}