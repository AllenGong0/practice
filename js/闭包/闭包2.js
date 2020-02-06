function foo(){
    var a = 2;

    function baz(){
        console.log(a)
    }
    bar(baz)
}
function bar(fn){
    fn()
}
foo()
function foo1(){
    var b = 3;
    return function(){
        console.log(b)
    }
}
let f1 = foo1()
f1()