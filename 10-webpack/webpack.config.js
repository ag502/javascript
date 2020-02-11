const path = require('path');

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
    }
}