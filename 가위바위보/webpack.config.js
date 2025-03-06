const path=require('path');//node에서 제공하는 경로 도와주는거
const VueLoaderPlugin=require('vue-loader/lib/plugin');

module.exports={
    mode:'development',
    devtool:'eval',
    resolve:{
        extensions:['.js','.vue'],
    },
    entry:{
        app:  path.join(__dirname,'main.js'),
    },
    module:{
        //이상한거 만나면 rule을 따른다.
        rules:[{
            test:/\.vue$/,
            use:'vue-loader',
        },{
            test: /\.css$/,
            use:[
                'vue-style-loader',
                'css-loader',
            ]
        }],
    },
    plugins:[
        new VueLoaderPlugin(),//module들이 후처리
    ],
    output:{
        //최종 결과
        filename:'[name].js',
        path: path.join(__dirname,'dist'),
        publicPath:'/dist',
    },
};