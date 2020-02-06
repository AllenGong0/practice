var http = require('http');
var fs = require('fs');
var artTemp = require('art-template')
var URL = require('url');
var queryString = require("querystring");

var comments = [
    {
        name:'allen1',
        age:20,
        message:'我事阿勒',
        date:'2019-02-20'
    },{
        name:'allen2',
        age:20,
        message:'我事阿勒',
        date:'2019-02-20'
    },{
        name:'allen3',
        age:20,
        message:'我事阿勒',
        date:'2019-02-20'
    },{
        name:'allen4',
        age:20,
        message:'我事阿勒',
        date:'2019-02-20'
    },{
        name:'allen5',
        age:20,
        message:'我事阿勒',
        date:'2019-02-20'
    },{
        name:'allen6',
        age:20,
        message:'我事阿勒',
        date:'2019-02-20'
    },
]

http.createServer((req, res) => {
    var parseObj = URL.parse(req.url,true)
    var pathName = parseObj.pathname;
    if(pathName === '/'){
        fs.readFile('./view/index.html',function(error,data){
            if(error){
                return res.end('404 NOT FOUND')
            }
            var htmlStr = artTemp.render(data.toString(),{comments})
            res.end(htmlStr)
        });
    }else if(pathName === '/post'){
        fs.readFile('./view/post.html',function(error,data){
            if(error){
                return res.end('404 NOT FOUND')
            }
            res.end(data)
        });
    }else if(pathName.indexOf('/public/') === 0){
        fs.readFile('.'+url,function(err,data){
            if(error){
                return res.end('404 NOT FOUND')
            }
            res.end(data)
        });
    }else if(pathName === '/commit'){
        var obj = null;
        //监听data事件
        //调用queryString.parse()将其转换为对象
        req.on("data",function(chunk){
            let info = queryString.parse(chunk.toString())
            // currentData += chunk.toString();
            console.log(info.name)
        });
        // console.log(req)
        var post
        // console.log(util.inspect(post))
        res.end();
     
                // comments.push({
        //     name:info.name,
        //     message:info.message,
        //     date: (new Date())
        // })
        // res.statusCode = 302;
        // res.setHeader('Location','/');

    }else{
        fs.readFile('./view/404.html',function(error,data){
            if(error){
                return res.end('404 NOT FOUND')
            }
            res.end(data)
        });
    }
}).listen(3000, () => {
    console.log("Server is running")
})