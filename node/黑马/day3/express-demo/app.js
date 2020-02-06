const express = require('express');


//可以自动识别Content-Type,也可以识别html
//express 自动处理404
var app = express() //在createServer

app.use('/public/',express.static('./public/'))

app.get('/',(req,res)=>{
    res.send('发送响应')
})
app.get('/about',(req,res)=>{
    res.send('about')
})
 
app.listen(3000,()=>{
    console.log("监听3000端口")
})
