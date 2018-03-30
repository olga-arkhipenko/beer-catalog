var path = require('path')
var webpack = require('webpack')

module.exports = env => {
    const isProductionBuild = !!(env && env.production);

    const config = {
        entry: './src/index.js',
        output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
        },
        module: {
        rules: [
            {
            test: /\.vue$/,
            loader: 'vue-loader',
            },
            {
            test: /\.css$/,
            use: [
                'vue-style-loader',
                'css-loader'
            ],
            },
            {
            enforce: "pre",
            test: /\.(js|vue)$/,
            exclude: /node_modules/,
            loader: "eslint-loader",
            options: {
                formatter: require('eslint-friendly-formatter')
            }
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
                'vue$': 'vue/dist/vue.esm.js',
                common: path.resolve(__dirname, 'src/common'),
                catalogModule: path.resolve(__dirname, 'src/modules/catalog'),
                favoritesModule: path.resolve(__dirname, 'src/modules/favorites'),
                features: path.resolve(__dirname, 'src/features'),
                favoritesManagement: path.resolve(__dirname, 'src/features/favoritesManagement'),
                router: path.resolve(__dirname, 'src/router'),
                store: path.resolve(__dirname, 'src/store'),
            },
            extensions: ['*', '.js', '.vue', '.json']
            },
            devServer: {
            historyApiFallback: true,
            noInfo: true,
            overlay: true,
            publicPath: '/dist/'
            },
            performance: {
            hints: false
            },
            devtool: '#eval-source-map'
        };

    if (isProductionBuild) {
        config.devtool = '#source-map'
        config.plugins = (config.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
            NODE_ENV: '"production"'
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
        ])
        config.optimization = {
        minimize: true
        };
    }
    
    return config;
}