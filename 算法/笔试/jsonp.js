
const http = require('http');
const url = require('url');//核心对象url来获取query
let server = http.createServer();
server.on('request',(req,res)=>{
    console.log(req.url)
     if (req.url.startsWith('/jsonp')) {
      // 1:从请求url参数中获取callback对应的值
      let fnName = url.parse(req.url,true).query.callback;//获取请求中callbackName
      let data = JSON.stringify({name:'jack'});  
      // es6拼接函数名 (数据)  的字符串返回给客户端
      let str = fnName + `('${data}')`;      //[Object object]
      console.log(res.end)
      res.end(str);
  }
});
//服务器监听8889端口
server.listen(8080,()=>{
    console.log('服务器启动在8080端口')
})