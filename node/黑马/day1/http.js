var http = require('http');
var fs = require('fs')
var server = http.createServer()
server.on('request',(request,response)=>{
    console.log(request.url);
    let url = request.url;
    if(url==='/'){
        fs.readFile('./index/index.html',function(error,data){
            if(error){

            }else{
                response.setHeader('Content-Type','text/html;charset=utf-8')
                response.end(data);   
            }
        })
        
        console.log(request.socket.remotePort)
        console.log(request.socket.remoteAddress)

    } else if(url === '/products'){
        var arr = [
            {
                name:'allen',
                age:30
            },{
                name:'sara',
                age:28
            },{
                name:'lisa',
                age:30
            },{
                name:'mike',
                age:30
            }
        ]
        response.end(JSON.stringify(arr));
    }
    // console.log(response)
    console.log('收到请求');
})
server.listen(3000,()=>{
    console.log('服务器启动成功')
}) 