/**
 * webpack config for compiling the client-side app
 */

/* dependencies */
var
// node.js deps
path = require('path'),

// 3rd-party deps
webpack = require('webpack');

var appRoot = path.join(__dirname)

module.exports = {

    colors: true,

    context: appRoot,

    // note: relative to context!!!
    entry: "./client/app.jsx",

    output: {
        path: path.join(appRoot, "./js"),
        filename: "app.js"
    },

    watch: true,
    watchDelay: 500,

    resolve: {

        root: path.join(appRoot, "/client/"),
        modulesDirectories: ["node_modules", "bower_components"],
    },

    module: {
        preLoaders: [
            // Used for reactjs
            {
                test: /\.jsx$/,
                // TODO: Keep an eye on PRs/updates from https://github.com/petehunt/jsx-loader
                loader: path.join(__dirname, "webpack/jsx-loader.js"),
                query: "harmony"
            }
        ]
    },

    plugins: [

        new webpack.ProvidePlugin({
            'React': "react"
        }),

        // new webpack.optimize.UglifyJsPlugin({ output: {comments: false} }),
    ]
};
