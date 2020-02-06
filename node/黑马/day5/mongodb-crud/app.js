/*
    入口文件：
        创建服务：
        做一些相关配置
            模板引擎
            body-parser post请求体
            提供静态资源服务
        挂在路由
        监听端口号


*/


var express = require('express');
var app = express();
var router = require('./router')
var bodyParser = require('body-parser');

//配置中间件，解析post请求
app.engine('html',require('express-art-template'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use('/node_modules/',express.static('./node_modules'));
app.use('/public/',express.static('./public'));
app.use(router) //把router挂载到app上

app.listen(3000,()=>{
    console.log("服务器已经启动",new Date().toUTCString())
})

module.exports = app;