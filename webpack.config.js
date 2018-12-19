const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, options) => {
    let development = options.mode !== 'production';

    const config = {
        entry: {
            index: ['./src/index.js']
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: '[name].[hash:8].js',
        },
        devServer: {
            overlay: true
        },
        resolve: {
            alias: {
                'assets': path.resolve(__dirname, 'assets')
            }
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: '/node_modules/',
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    '@babel/preset-env',
                                    '@babel/preset-react',
                                ],
                                plugins: [
                                    ["@babel/plugin-proposal-class-properties", {"loose": false}],
                                    "@babel/plugin-transform-spread",
                                    ['@babel/plugin-proposal-decorators', { legacy: true }],
                                    ["@babel/plugin-syntax-dynamic-import"]
                                ],
                                babelrc: false,
                            }
                        },
                    ],
                },
                {
                    test: /\.(less|css)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'less-loader',
                    ],
                },
                {
                    test: /\.(svg|png)$/,
                    oneOf: [
                        {
                            test: /\.(svg)$/,
                            use: [
                                {
                                    loader: 'url-loader',
                                }
                            ]
                        },
                        {
                            test: /\.(png)$/,
                            use: [
                                {
                                    loader: 'file-loader',
                                    options: {
                                        name: '[path][name].[ext]',
                                    }
                                }
                            ]
                        }
                    ],
                },
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].[hash:8].css',
            }),
            new HtmlWebpackPlugin({
                template: 'public/index.html'
            }),
            new CleanWebpackPlugin(['dist'])
        ],
        devtool: development ? 'source-map' : false,
    };

    return config;
};
