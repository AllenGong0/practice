const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./router');
const session = require('express-session')

var app = express();

//默认session是内存存储的，服务器一旦重启就会丢失，
//真正的生产环境会把session进行持久化存储
app.use(session({
    secret: 'keyboard cat', //自定义加密字符串，在原有加密基础之上和这个字符串拼接进行加密
    resave: false,
    saveUninitialized: true //默认会发送一把钥匙去取服务端的数据

}))

//文件操作中： './' 相对于执行node命令所属的路径
//模块路径中文件标识不受node执行命令所属目录的影响
//文件中使用相对路径不可靠。

app.use('/public/', express.static(path.join(__dirname, './public')));
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(router)

app.use((req,res)=>{
    res.render()
})

app.engine('html', require('express-art-template'));

// app.set('/views/',path.join(__dirname,'./views'))



app.listen(3000, () => {
    console.log('Server is running');
    // node中的成员变量 动态的绝对路径 当前文件模块所属的绝对路径
    // console.log(__dirname) //目录名字  
    // console.log(__filename)//文件名字    绝对路径+文件名字 
})
