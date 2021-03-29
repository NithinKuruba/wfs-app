var path = require('path');
module.exports = {
    entry: './dist/server.js',
    mode: 'production',
    target: 'node',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'server.bundle.js'
    }
};
//# sourceMappingURL=webpack.config.js.map