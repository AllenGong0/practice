let o1 = {
    a:5,
    b:6
}
let o2 = {
    q:4,
    o1:o1
}
Object.defineProperty(o2,"o1",{
    writable:false
})
o2.o1 = 3
console.log(o2)

//结合writable和configurable可以创建对象常量


Object.preventExtensions()//禁止对象添加新属性，并且保留原有属性

//密封：configurable变为false seal  底层调用 
//Object.preventExtensions()
//冻结：configurable writable变为false  

