const path = require("path");

module.exports = {
    entry: {
        head: "./assets/js/head.js",
        common: "./assets/js/common.js",
        toc: "./assets/js/toc.js",
        description: "./assets/js/description.js"
    },
    output: {
        filename: "[name].min.js",
        path: path.resolve(__dirname, "./assets/output/"),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, './assets/css'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            }
        ]
    }
}