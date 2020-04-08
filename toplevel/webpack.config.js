const path = require("path");

module.exports = () => ({
    entry: {
        widget: "./src/index.ts",
    },

    output: {
        publicPath: "/",
        path: path.join(process.cwd(), "dist"),
        filename: "[name].js",
    },

    devtool: "none",

    resolve: {
        extensions: [".ts", ".tsx", ".mjs", ".js"],
        mainFields: ['module', 'main'],
        modules: [
            path.join(process.cwd(), "src"),
            path.join(process.cwd(), "node_modules"),
        ],
    },

    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                use: [
                    {loader: "babel-loader"},
                    {loader: "ts-loader"},
                ],
            },
        ],
    },

    plugins: [],
});
