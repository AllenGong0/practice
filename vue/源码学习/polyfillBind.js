function polyfillBind (fn, ctx) {
    function boundFn (a) {
        console.log(arguments)
        var l = arguments.length;

        //判断其是0个参数 || 一个参数 || 多个参数
        return l
        ? l > 1
            ? fn.apply(ctx, arguments)
            : fn.call(ctx, a)
        : fn.call(ctx)
    }

    boundFn._length = fn.length;
    return boundFn
}

function test(a,b){
    console.log(this);
}
var obj = {
    name:'allen'
}
var res = polyfillBind(test,obj);
res(2,3);