var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

// console.log("source Dir, :>> ", SRC_DIR);

var config = {
    devtool : 'source-map',
    entry : SRC_DIR + "/app/index.js",
    output : {
        path : DIST_DIR + "/app",
        filename : "bundle.js",
        publicPath : "/app/"
    },
    module : {
        loaders  : [
            {
                test : /\.js?/,
                include : SRC_DIR,
                loader : "babel-loader",
                query : {
                    presets : ["react", "es2015", "stage-2"]
                }
            }
        ]
    }
};

module.exports = config;