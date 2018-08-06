var path = require('path');

module.exports = {
    entry: './src/2.js',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist',
        filename: 'bundle.js'

    }
}