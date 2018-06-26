const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const path = require('path');

function tsloader(ngModule) {
    if (ngModule) {
        return {
            test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
            loader: '@ngtools/webpack'
        };
    } else {
        return {
            test: /\.tsx?$/,
            loader: "ts-loader"
        }
    }
}

module.exports = function (name, dirname, ngModule = undefined) {
    const config = {
        entry: path.resolve(dirname, name + '.ts'),
        mode: 'development',
        target: 'web',
        output: {
            path: path.resolve(dirname, 'dist'),
            filename: name + '.js',
            library: name,
            libraryTarget:'umd'
        },
        module: {
            rules: [
                tsloader(ngModule), {
                    test: /\.html$/,
                    loader: 'raw-loader'
                }, {
                    test: /\.css$/,
                    loader: 'raw-loader'
                }]
        },
        resolve: {
            extensions: ['.ts', '.js', '.json']
        },
        plugins: [

        ]
    }

    if (ngModule) {
        console.log(path.resolve(dirname, 'tsconfig.json'));
        console.log(path.resolve(dirname, ngModule));
        config.plugins.push(new AngularCompilerPlugin({
            platform: 0,
            tsConfigPath: path.resolve(dirname, 'tsconfig.json'),
            entryModule: path.resolve(dirname, ngModule),
            sourceMap: true,
            skipCodeGeneration: false
        }))
    }

    return config;
}