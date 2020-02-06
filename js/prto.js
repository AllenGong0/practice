// new Promise((resolve,reject)=>{
//     resolve()
// }).then(()=>{
// console.log("then1")
// // 参数就是undefined
    
// }).then((data)=>{
//     console.log(data);
//     console.log("then2");
// }).then(()=>{
//     console.log("then3")
// })
setTimeout(function(){
    console.log(this)
})
// 构造函数
// 箭头函数不能做构造函数
// 普通函数


// 箭头函数没有this

// let a = ()=>{
//     console.log(this)
// }

// let b = new a()
// setTimeout是window的函数

let obj = {
    a:5,
    b:function(){
        console.log(this)
    }
}
obj.b()