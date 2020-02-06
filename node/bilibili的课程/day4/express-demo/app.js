var express = require('express')

var app = express()

// app.use('/public/',express.static('./public'))
// app.use('/a/',express.static('./public'))  //第一个参数可以是其他名字

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.send('hello World')
})

app.listen(3000,()=>{console.log("aaa")})