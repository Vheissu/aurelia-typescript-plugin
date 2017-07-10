const webpack = require('webpack');
const path = require('path');
const { TsConfigPathsPlugin, CheckerPlugin } = require('awesome-typescript-loader');
const autoprefixer = require('autoprefixer')

const PATHS = {
    src: path.join(__dirname, './src'),
    build: path.join(__dirname, './lib')
};

const libraryName = 'typescript-plugin';
const outputFile = `${libraryName}.js`;

const cssRules = [
    { loader: 'style-loader' },
    { loader: 'css-loader', options: { importLoaders: 1, url: false } },
    {
        loader: 'postcss-loader',
        options: {
            plugins: function() {
                return [autoprefixer('last 2 versions', 'ie > 9')]
            }
        }
    }
];

let config = {
    entry: {
        'index.bundle': `${PATHS.src}/index.ts`
    },
    devtool: 'source-map',
    output: {
        path: PATHS.build,
        filename: '[name].js',
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /\.css$/i,
                exclude: '/node_modules/',
                use: cssRules
            },
            { test: /\.html$/i, loader: 'html-loader' },
            { test: /\.ts$/i, loader: 'awesome-typescript-loader', exclude: path.resolve(__dirname, 'node_modules') },
            { test: /\.(png|gif|jpg|cur)$/i, loader: 'url-loader', options: { limit: 8192 } },
            { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff2' } },
            { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff' } },
            { test: /\.(ttf|eot|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'file-loader' },
        ]
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new TsConfigPathsPlugin(),
        new CheckerPlugin(),
        new webpack.IgnorePlugin(/test\.ts$/),
    ]
};

module.exports = config;
