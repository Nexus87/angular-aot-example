const path = require('path')

module.exports = {
    entry: './dist/componentLib.js', // string | object | array
    // Here the application starts executing
    // and webpack starts bundling

    output: {
        // options related to how webpack emits results

        path: path.resolve(__dirname, 'dist/bundles'), // string
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)

        filename: 'componentLib.umd.js', // string
        // the filename template for entry chunks

        // publicPath: '/assets/', // string
        // the url to the output directory resolved relative to the HTML page

        library: 'componentLib', // string,
        // the name of the exported library

        libraryTarget: 'umd', // universal module definition
        // the type of the exported library

        umdNamedDefine: true,
    },

    module: {
        // configuration regarding modules

        rules: [
            // rules for modules (configure loaders, parser options, etc.)

            // {
            //     test: /\.js$/,
            //     include: [
            //         path.resolve(__dirname, 'dist'),
            //     ],
            //     loader: 'babel-loader',
            //     options: {
            //         presets: [
            //             ['env', {
            //                 modules: false
            //             }]
            //         ],
            //         babelrc: false,
            //     }
            // },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            }
        ]
    },

    resolve: {
        modules: [
            'node_modules',
        ],
        extensions: ['.js']
    },

    devtool: 'source-map', // enum

    externals: {
        '@angular/core': { // UMD
            commonjs: '@angular/core',
            commonjs2: '@angular/core',
            amd: '@angular/core',
            root: ['ng', 'core']
        },
        '@angular/common': { // UMD
            commonjs: '@angular/common',
            commonjs2: '@angular/common',
            amd: '@angular/common',
            root: ['ng', 'common']
        },
        '@angular/platform-browser': { // UMD
            commonjs: '@angular/platform-browser',
            commonjs2: '@angular/platform-browser',
            amd: '@angular/platform-browser',
            root: ['ng', 'platformBrowser']
        },
        '@angular/forms': { // UMD
            commonjs: '@angular/forms',
            commonjs2: '@angular/forms',
            amd: '@angular/forms',
            root: ['ng', 'forms']
        },
    },
    node: {
        process: false,
        setImmediate: false,
        timers: false,
    },
};