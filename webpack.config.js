
const os = require('os');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });


module.exports = {
    entry: {
        appCode: './src/app.js',
    },
    devtool: 'inline-source-map',
    mode: 'development',
    devServer: {
        contentBase: './src',
        stats: 'errors-only',
        open: true,
        port: 8081,
    },
    context: path.resolve(__dirname, ''),
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: true,
                            minimize: {
                                safe: true,
                            },
                        },
                    },
                    'sass-loader',
                ]
            },
        ]
    },
    plugins: [
        new HappyPack({
            id: 'js',
            threadPool: happyThreadPool,
            loaders: ['babel-loader'],
        }),
        new HtmlWebpackPlugin({
            title: '/build',
            hash: true,
            template: './src/index.html',
            inject: 'body',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
    },
}
