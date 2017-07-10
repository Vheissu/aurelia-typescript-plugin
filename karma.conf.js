'use strict';
const path = require('path');

module.exports = (config) => {
    config.set({

        frameworks: ["jasmine"],

        files: [
            { pattern: './test/karma-bundle.js', watched: false }
        ],

        preprocessors: {
            './test/karma-bundle.js': [ 'webpack' ]
        },

        reporters: [ 'mocha', 'progress', 'coverage-istanbul' ],

        coverageIstanbulReporter: {
            reports: [ 'html', 'lcovonly', 'text-summary' ],
            dir: path.resolve(__dirname, 'coverage-karma'),
            fixWebpackSourcePaths: true,
        },

        webpackServer: { noInfo: true },

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: false,

        browsers: [
            'Chrome',
        ],

        singleRun: true
    });
};
