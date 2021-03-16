const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: ''
    },
    devtool: 'eval-cheap-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader', options: {
                        importLoaders: 1,
                        modules: {
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                        }
                    }},
                    {loader: 'postcss-loader', options: {
                        ident: 'postcss',
                        plugins: () => [autoprefixer()]
                    }}
                ]
            },
            {test: /\.(png|jp?g|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8129
                        }
                    }
                ]
            } 
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.hmtl',
            inject: 'body'
        })
    ]
};