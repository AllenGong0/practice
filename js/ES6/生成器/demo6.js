function *foo(){
    var r2 = yield Request("url");
    var r3 = yield Request("url?"+r2);
    return r3
}

function *bar(){
    var r1 = Request("url");
    var r3 = yield *foo();
    console.log(r3)
}

