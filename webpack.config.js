var path = require('path')
var webpack = require('webpack')

module.exports = env => {
    const isProductionBuild = !!(env && env.production);

    const config = {
        entry: './src/main.js',
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
                Components: path.resolve(__dirname, 'src/components'),
                Ajax: path.resolve(__dirname, 'src/ajax'),
                Api: path.resolve(__dirname, 'src/api'),
                LocalStorage: path.resolve(__dirname, 'src/localStorage'),
                Router: path.resolve(__dirname, 'src/router'),
                Store: path.resolve(__dirname, 'src/store'),
                Utils: path.resolve(__dirname, 'src/utils'),
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