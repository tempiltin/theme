{
    test: [/\.js?$/, /\.ts?$/, /\.jsx?$/, /\.tsx?$/],
    enforce: 'pre',
    exclude: /node_modules/,
    use: ['source-map-loader'],
}