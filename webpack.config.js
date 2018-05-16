const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
    const isProductionBuild = !!(env && env.production);

    const config = {
        entry: './src/client/index.js',
        output: {
            path: path.resolve(__dirname, './dist'),
            publicPath: '/dist/',
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.css$/,
                    use: [
                        'vue-style-loader',
                        'css-loader'
                    ]
                },
                {
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    exclude: /node_modules/,
                    loader: 'eslint-loader'
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]?[hash]'
                    }
                }
            ]
        },
        resolve: {
            alias: {
                vue$: 'vue/dist/vue.esm.js',
                common: path.resolve(__dirname, 'src/client/common'),
                catalogModule: path.resolve(__dirname, 'src/client/modules/catalog'),
                favoritesModule: path.resolve(__dirname, 'src/client/modules/favorites'),
                beerInfoModule: path.resolve(__dirname, 'src/client/modules/beerInfo'),
                features: path.resolve(__dirname, 'src/client/features'),
                favoritesManagement: path.resolve(__dirname, 'src/client/features/favoritesManagement'),
                store: path.resolve(__dirname, 'src/client/store')
            },
            extensions: ['*', '.js', '.vue', '.json']
        },
        devServer: {
            historyApiFallback: true,
            noInfo: true,
            overlay: true,
            publicPath: '/dist/',
            proxy: {
                '/': 'http://localhost:3030'
            }
        },
        performance: {
            hints: false
        },
        devtool: '#eval-source-map'
    };

    if (isProductionBuild) {
        config.devtool = '#source-map';
        config.plugins = (config.plugins || []).concat([
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"'
                }
            }),
            new webpack.LoaderOptionsPlugin({
                minimize: true
            })
        ]);
        config.optimization = {
            minimize: true
        };
    }
    return config;
};
