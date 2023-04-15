const HtmlWebpackPlugin=require("html-webpack-plugin")
const path = require('path')

module.exports={
    entry:"./src/main.js",
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'js/[name].js',
        clean:true
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                // use:['./loaders/test-loader.js','./loaders/async-loader.js']
                // loader:"./loaders/raw-loader.js"
                loader:"./loaders/clean-log-loader.js"
            },
            {
                test:/\.js$/,
                loader:'./loaders/banner_loader/banner-loader.js',
                options:{
                    author:"SuperD",
                    // age:19,////不能新增属性
                }
            },
            {
                test:/\.js$/,
                loader:'./loaders/babel_loader',
                options:{
                    presets:['@babel/preset-env']
                }
            },
            {
                test:/\.(png|jpe?g|git)$/,
                loader:'./loaders/file_loader',
                type:"javascript/auto",//阻止webpack默认处理图片资源，只要file-loader处理
            },
            {
                test:/\.css$/,
                use:['./loaders/style-loader','css-loader'],
                
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'public/index.html')
        }),
    ],
    mode:"development"
}