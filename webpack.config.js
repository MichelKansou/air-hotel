const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './index_bundle.js'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    mode: isProduction ? 'production' : 'development',
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/template.html'
        })
    ],
    resolve: {
        extensions: ['.js'],
        alias: {
            Containers: path.resolve(__dirname, 'src/containers/'),
            Components: path.resolve(__dirname, 'src/components/'),
            Actions: path.resolve(__dirname, 'src/actions/'),
            Reducers: path.resolve(__dirname, 'src/reducers/'),
            Utils: path.resolve(__dirname, 'src/utils')
        }
    }
};
