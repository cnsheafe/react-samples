const path = require("path");

module.exports = {
    entry: "./app/src/index.tsx",
    output: {
        path: path.resolve(__dirname, "app/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname,"app")
                ],
                loader: "babel-loader",
                options: {
                    presets: [
                        "es2015",
                        "react"
                    ]
                }
            },
            {
                test: /\.tsx?$/,
                include: [
                    path.resolve(__dirname, "app")
                ],
                loader: "awesome-typescript-loader",
                options: {
                    useBabel: true,
                    babelOptions: {
                        presets: [
                            "es2015",
                            "react"
                        ]
                    },
                    useCache: true
                }
            }
        ]
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "app")
        ],
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
    },
    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        compress: true,
        port: 3000,
        historyApiFallback: true
    },
    context: __dirname,
    externals: {
        react: "React",
        "react-dom": "ReactDOM"
    }
}