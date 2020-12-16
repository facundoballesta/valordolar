const path = require('path');
module.exports = {
    entry: './src/app/index.js',
    output: {
        path: path.join(__dirname, 'src/public/js'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}
