module.exports = function (config) {
    'use strict';

    config.set({
        colors: true,
        autoWatch: true,
        singleRun: true,
        logLevel: config.LOG_ERROR,

        basePath: '',

        jspm: {
            config: "src/main/ES/system.config.js",
            packages: "jspm_packages/",
            loadFiles: [
                'src/test/ES/**/*.spec.js'
            ],
            serveFiles: [
                'src/main/ES/**/*.js'
            ],

            paths: {
                "*": "/ES/*",
                "src/test/*": "/test/*",
                "github:*": "/jspm_packages/github/*",
                "npm:*": "/jspm_packages/npm/*"
            }
        },

        proxies: {
            '/test/': '/base/src/test',
            '/jspm_packages/': '/base/jspm_packages/',
            '/ES/': '/base/src/main/ES/'
        },

        browsers: ['PhantomJS'],

        reporters: ['mocha'],

        frameworks: ['jasmine', 'jspm', 'phantomjs-shim'],
        plugins: [
            'karma-chrome-launcher',
            'karma-phantomjs-shim',
            'karma-phantomjs-launcher',
            'karma-mocha-reporter',
            'karma-jasmine',
            'karma-jspm'
        ]
    });
};
