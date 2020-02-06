// (function foo(){
//     console.log("aa")
// })()
// (function (a){
//     console.log(a)
// }("------"))
// (function IIFE(undefined){
//     console.log(undefined)
//     var a;
//     if(a===undefined){
//         console.log(a)
//     }
// })()
// (function foo(fn){
//     fn()
// })(function (){
//     var promise = new Promise((resolve,reject)=>{
//         resolve()
//     })
//     promise.then(()=>{
//         console.log("promise");
//     })

// })
console.log(foo)
var foo = function(){
    console.log("aa")
}