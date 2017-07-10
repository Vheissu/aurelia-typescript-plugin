var webpack = require('webpack');
var wallabyWebpack = require('wallaby-webpack');

var Module = require('module').Module;
var modulePrototype = Module.prototype;
var originalRequire = modulePrototype.require;
modulePrototype.require = function (filePath) {
    if (filePath === 'source-map-support') {
        return {install: () => {}};
    }
    return originalRequire.call(this, filePath);
};

const webpackConfig = require('./webpack.config');

modulePrototype.require = originalRequire;

var wallabyPostprocessor = wallabyWebpack({
    plugins: [
        new webpack.NormalModuleReplacementPlugin(/\.(gif|png|scss|css)$/, 'node-noop')
    ]
});

module.exports = function (wallaby) {
    return {
        files: [
            'node_modules/babel-polyfill/dist/polyfill.js',
            { pattern: 'src/**/*.ts', load: false },
        ],

        tests: [
            { pattern: 'test/unit/**/*.spec.ts', load: false }
        ],

        postprocessor: wallabyPostprocessor,

        compilers: {
            '**/*.ts': wallaby.compilers.typeScript({
                "emitDecoratorMetadata": true,
                "experimentalDecorators": true,
                "noImplicitAny": false,
                typescript: require('typescript')
            })
        },

        setup: function () {
            // required to trigger test loading
            window.__moduleBundler.loadTests();
        }
    };
};
