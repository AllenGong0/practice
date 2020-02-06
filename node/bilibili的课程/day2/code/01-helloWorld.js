var http = require('http');
var fs = require('fs');//官方插件
var artTmp = require('art-template');//第三方
var a = require('./a'); //自定义
console.log(a)

var server = http.createServer();
var wwwDir = 'D:/app/www/'

server.on('request',function (request,response){
    var url = request.url;
    
    fs.readFile('./code/tmp.html',function(error,data){
        if(error){
            console.log(error)
           return response.end('404 Not Found')
        }
        fs.readdir(wwwDir,function(error,files){
            if(error){
                return response.end('Cannot found www dir')
            }
            var htmlStr = artTmp.render(data.toString(),{
                title:'哈哈哈',
                files:files
            })
            response.setHeader('Content-Type','text/html;Charset=utf-8')
            response.end(htmlStr) 
        })
        
    })



    // var filePath = (url === '/') ?'/index.html':wwwDir + url;
    // fs.readFile(wwwDir + filePath,function(error,data){
    //     if(error){
    //         console.log(error)
    //        return response.end('404 Not Found')
    //     }
    //     response.setHeader('Content-Type','text/html;Charset=utf-8')
    //     response.end(data) 
    // })
 

})

server.listen(3000,()=>{
    console.log('running')
})