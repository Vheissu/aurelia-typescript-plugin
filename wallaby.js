var wallabyWebpack = require('wallaby-webpack');
var wallabyPostprocessor = wallabyWebpack({});

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
