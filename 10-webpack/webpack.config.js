const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        about: './src/about.js'
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: '[name]_bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
            chunks: ['index']
        }),
        new HtmlWebPackPlugin({
            template: './src/about.html',
            filename: './about.html',
            chunks: ['about']
        })
    ]
}