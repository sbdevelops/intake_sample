const path = require('path');

module.exports = {
    entry: './src/index.tsx', // Entry point of your application
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'], // Add this section
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, // Transpile TypeScript files
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/, // Example rule for CSS files
                use: ['style-loader', 'css-loader'],
            },
            // Add other rules as needed
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    // Add other Webpack configurations as needed
};
