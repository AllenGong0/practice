var fs = require('fs')
fs.readFile('./data/hell.txt',function(error,data){
    //<Buffer 68 65 6c 6c 6f 20>
    //文件中存储的是二进制，显示的是十六禁止
    //toString()方法可以转换为我们认识的字符
    console.log(error)
})