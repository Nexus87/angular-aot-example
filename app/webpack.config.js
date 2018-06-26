const path = require('path');
const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
module.exports = {
    entry: path.resolve(__dirname, 'src/main.ts'),
    mode: 'development',
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            // {
            //     test: /\.html$/,
            //     use: 'html-loader'
            // },

            // {
            //     test: /\.css$/,
            //     use: ['to-string-loader', 'css-loader'],
            // },
            {
                test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                loader: '@ngtools/webpack'
            },
            {
                test: /\.css$/,
                loader: 'raw-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            // tsloader(ngModule), {
            //     test: /\.html$/,
            //     loader: 'raw-loader'
            // }, {
            //     test: /\.css$/,
            //     loader: 'raw-loader'
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    plugins: [
        new AngularCompilerPlugin({
            tsConfigPath: './tsconfig.json',
            entryModule: './src/app.module#AppModule',
            sourceMap: true,
            basePath: __dirname
        })
    ]
}