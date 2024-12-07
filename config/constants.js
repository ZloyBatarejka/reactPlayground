

module.exports = {
    port: '3001',

    swcConfig: {
        jsc: {
            transform: {
                react: { runtime: 'automatic' },
            },
            parser: { syntax: 'typescript' },
        },
        sourceMaps: true,
        minify: true
    }
}