var exec = require("child_process").exec;
var querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");
function start(resp) {
    console.log("Request handler 'start' was called.");
    // function sleep(milliSeconds) {
    //     var startTime = new Date().getTime();
    //     while (new Date().getTime() < startTime + milliSeconds);
    // }
    // exec("find /",
    //     { timeout: 10000, maxBuffer: 20000*1024 },
    //     function (error, stdout, stderr) {
    //     resp.writeHead(200, {"Content-Type": "text/plain"});
    //     resp.write(stdout);
    //     resp.end();
    // });
    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" method="post">'+
        '<textarea name="text" rows="20" cols="60"></textarea>'+
        '<input type="file" name="upload">'+
        `<input type="text" name="qwe">`+
        '<input type="submit" value="Submit text" />'+
        '</form>'+
        '</body>'+
        '</html>';

    resp.writeHead(200, {"Content-Type": "text/html"});
    resp.write(body);
    resp.end();


    //

}

function upload(resp,req) {
    var form = new formidable.IncomingForm();
    console.log("Request handler 'upload' was called.");
    form.parse(req,function (error,fields,files) {
        fs.renameSync(files.upload.path,"D:/947849.jpg")
        resp.writeHead(200, {"Content-Type": "text/plain",charset:"utf-8"});
        resp.write(`<img src="/show/">`);
        resp.end();
    })

}


function show(resp){
    console.log("Request handler 'show' was called.");
    fs.readFile("D:/947849.jpg","binary",function (error,file) {
        if (error){
            resp.writeHead(500, {"Content-Type": "text/plain"});
            resp.write(error + "\n");
            resp.end();
        }else{
            resp.writeHead(200, {"Content-Type": "image/png"});
            resp.write(file, "binary");
            resp.end();
        }
    })
}

exports.start = start;
exports.upload = upload;
exports.show = show;