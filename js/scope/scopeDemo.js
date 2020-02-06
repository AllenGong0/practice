function fn(){
    a = 5
}
// fn()
// console.log(a);
function foo4(){
    console.log(this)
}

let a = {
    name:'allen',
    foo1:foo4
}
function foo2(){
    this.name = 'lisa';
    function foo3(){
        console.log(this)
    }
    foo3()
}
// foo2()
a.foo1()

 