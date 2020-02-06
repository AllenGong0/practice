function foo(obj){
    with(obj){
        console.log(a)
        a = 5;
    }
}
var o1 = {
    a:6
}

var o2 = {
    b:8
}
foo(o1)
console.log(o1.a)

foo(o2)
console.log(o2.a)
console.log(a)