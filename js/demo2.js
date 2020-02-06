var p = new Promise(function(resolve,reject){
    var a = 5;
    function foo(){
        console.log(a)
    }
    // throw new Error("error") ，fn()  错误会传递给promise的reject
    reject("foo");    
});
p.then(()=>{

})

.then((res)=>{
    foo();
},(err)=>{
    console.log(err)
    console.log("------------------")
}).catch((err)=>{
    console.log("err: "+err)
})


// var p = new Promise((res,rej)=>{
//     res(42)
// })
// p.then((msg)=>{
//     foo.bar();
//     console.log(msg)
// },()=>{

// })



// function delayTime(time) {
//     return new Promise((resolve,reject) => {
//         setTimeout(resolve, time, 'done')
//     })
// }

// var p = Promise.resolve();

//     p.then(() => {
//         // return new Promise((res, rej) => {
//         //     setTimeout(res, 2000, 'done')
//         // })
//         return delayTime(2000);
//     }).then((res) => {
//         console.log(5)
//     })



// function delayThread(time,fn=()=>{console.log("4")}){
//     setTimeout(fn,time*1000)
// }
// for(let i=0; i<3; i++){
//      ((i)=>{
//          setTimeout(()=>{
//              console.log(i)
//          },i*1000)
//      })(i)
//     // delayThread(i)
// }

