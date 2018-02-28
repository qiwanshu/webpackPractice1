const path = require("path");

module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/app/main.js",   //唯一入口文件
    output: {
        path: path.resolve(__dirname,'public'),    //打包后的文件存放的地方
        filename: "bundle.js"           //打包后输出文件的文件名
    },

    //配置本地服务器 devserver
    devServer: {
        contentBase: "./public",   //本地服务器所加载的页面所在的目录
        historyApiFallback: true,   //不跳转   如果设置为true，所有的跳转将指向index.html
        inline: true,  //实时刷新  设置为true，当源文件改变时会自动刷新页面
        port: "8090"   //设置默认监听端口，如果省略，默认为”8080“
    },

    //loader配置
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,  //用以匹配loaders所处理文件的拓展名(正则表达式必须)
                use: {
                    loader: "babel-loader",   //loader的名称（必须）

                    //babel配置单独放在.babelrc文件中
                    /*options: {
                        presets: [
                            "env","react"
                        ]
                    }*/
                },
                exclude: /node_module/,    //手动添加必须处理(include)的文件（文件夹）或屏蔽不需要处理(exclude)的文件（文件夹）（可选）
                // query：为loaders提供额外的设置选项（可选）
            }
        ]
    }
};