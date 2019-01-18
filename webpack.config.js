const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(path.resolve(__dirname, './dist'))

module.exports = {

	mode:'development',
	watch:true,

    entry: path.resolve(__dirname, './src/js/index.js'), //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
    output: {
        path: path.resolve(__dirname, './dist'), // 输出的路径
        filename: './app/[name]_[hash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                   
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    plugins: [
　　 　　new HtmlWebpackPlugin({
	 		filename: 'index.html',
　　　　 　　template: path.resolve(__dirname, './src/index.html'),
　　　　　　 inject: true
　　　　 })
　　 ]
}