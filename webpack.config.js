const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: { 
        path: path.join(__dirname, "build"), 
        filename: "index.bundle.js",
    },
    mode: "development",
    resolve: { modules: [path.resolve(__dirname, "src"), "node_modules"] },
    devServer: { 
        contentBase: path.join(__dirname, "src"),
        historyApiFallback: true,
        port: 8081,
        open: true,
    },
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: ["babel-loader"] 
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            { 
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"] 
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
    ],
};