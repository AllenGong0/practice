// // let p = new Promise((resolve,reject)=>{
// //     resolve()
// // })
// // p.then(()=>{
// //     console.log("then1");
// //     return 'then'
// // }).finally((res)=>{
// //     console.log(res)
// // })


// //利用Promise.all对数组进行操作
// if(!Promise.map){
//     Promise.map = function(val,cb){
//         return Promise.all(
//             val.map((item)=>{
//                 return new Promise((resolve)=>{
//                     cb(item,resolve) //进行决议
//                     //
//                 })
//             })
//         )
        
//     }
// }

// let arr = [Promise.resolve(3),4,5,6];

// function fn(pr,done){
//     //code 对promise的决议以及对数组的操作！！！
//     Promise.resolve(pr)
//         .then((res)=>{
//             console.log(res);
//             done(res*2)
//         },{

//         })
// }

// let b = Promise.map(arr,fn)
// b.then((res)=>{
//     console.log(res)
// })
// console.log(b)

// var rejectedTh = {
//     then:function(resolve,rejected){
//         rejected("oOps")
//     }
// }
// var p = Promise.resolve(rejectedTh)
// p.then((err)=>{console.log(err)},(err)=>{console.log("err:  "+err)})


// var p = new Promise((resolve,reject)=>{
//     resolve()
// })
// let d = p.then(()=>{
//     return Promise.reject()
// })
// d.catch(()=>{
//     console.log("catch")
// })


//值数组
function getY(x){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,1000,3*x+1) 
    })
}
// function foo(a,b){
//     var x = a+b
//     return getY(x).then((y)=>{
//         return [x,y]
//     })
// }
// foo(1,2).then((arr)=>{
//     console.log(arr)
// })

//promise数组
function foo(a,b){
    var x = a+b;
    return [
            Promise.resolve(x),
            getY(x)
    ]
}
Promise.all(foo(1,2)).then(([x,y])=>{
    console.log(x,y)
})