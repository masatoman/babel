module.exports = {
    context: __dirname + '/src' ,
    entry: "./entry",
    output: {
        path: __dirname + '/js',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
