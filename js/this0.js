// function foo(){
//     // foo.count = 0
//     console.log(++foo.count)
// }
// foo.count = 0;
// foo();
// foo()
// console.log(foo)

// // console.log(undefined++)

// function foo(){
//     console.log(this)
// }


// this 默认绑定到全局对象中

//     有上下文时，this会绑定到上下文中
//      对象属性引用链中只有上一层或者最后一层起作用/
//ex：


// let obj = {
//     a:5,
//     foo:foo
// }
// let obj1 = {
//     a:6,
//     obj:obj
// }
// console.log(obj1.obj.foo)
// let a = 6
// obj.foo()

//当把函数作为参数传递时或者给赋值给其他变量时会造成this的丢失

//通过call绑定的this不可以被修改

//硬绑定，即通过内部函数进行硬绑定，防止this丢失


function foo(arg1,arg2){
    console.log(this.a)
    console.log(arg1,arg2)
}

let o2 = {
    a:5
}
let b = foo.bind(o2,6)
b(4)





// function foo(){
//     console.log(this)
// }
// let o1 = {
//     a:4,
//     b:5
// }
// function bar(){
//     foo.call(o1)
// }
// bar()

