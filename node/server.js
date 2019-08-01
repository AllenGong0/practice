var http = require("http");
var url = require("url");
function start(route,handle) {
    console.log(route,handle)
   function onRequest(req,resp) {
       if(req.url!=="/favicon.ico"){
           // 将resp传递给route
           var pathname = url.parse(req.url).pathname;
           var postData = "";

           console.log("Request for " + pathname + " received.");
           resp.writeHead(200,{"Content-Type":"text/plain","charset":"utf-8"});
           req.setEncoding("utf-8");
           console.log("data---------")
           console.log(req)
           console.log("data---------")
           console.log("Request for " + pathname + " received.");
           route(handle, pathname, resp, req);
           // req.addListener("data", function(postDataChunk) {
           //     postData += postDataChunk;
           //     console.log("Received POST data chunk '"+
           //         postDataChunk + "'.");
           // });
           //
           // req.addListener("end", function() {
           //     route(handle, pathname, resp, postData);
           // });

           //从router接受返回数据
           // let content = route(handle,pathname,resp)
           // console.log(content)
           // resp.write( content);
           // resp.end();
       }


    }
    http.createServer(onRequest).listen(8888)
    console.log("server has start")
}
exports.start = start;

