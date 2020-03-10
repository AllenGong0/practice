// // let fibonacci = (function(){
// //     let tmp = [0,1];
// //     return function(n){
// //         if(tmp[n]!==undefined) return tmp[n]
// //         else{

// //         }
// //     }
// // }())
// let f1 = function() {
//     let arr = [0,1,1,1,1];
//     return function(n) {
//         let result = arr[n];
//         if(typeof result != 'number') {
//             result = f1(n - 1) + f1(n - 4);
//             arr[n] = result; 
//         }
//         return result;
//     }
// }();
// console.log(f1(4))
// // console.log(f1(5))
// function test(){
//     return get;
//     var get = function(){
//         console.log("get let")
//     }
//     // function get(){
//     //     console.log("get function")
//     // }
//     get()
// }
// test()()

// let tmp = {name:'allen'};
// console.log(tmp?.name);
// console.log(typeof test())


// function fib(n,a,b){
//     if(n<=4)return b
//     else {
//         return fib(n-1,b,a+b)
//     }
// }

// let r = fib(6,1,1)
// console.log(r)

// setTimeout(() => {
//     console.log(8)
// }, 6000);

// let time = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("546")
//     }, 5000);
// })

// let o = {"name":'allen'}
// let a = ()=>{
//     console.log(this.name)
// }
// let res = a.bind(o)()

// (function(){var a =b = 1}()); 
// // console.log(a=='undefined');
// console.log(b=='undefined')
// a, b
// let p1 = new Promise((resolve, reject) => {
//     resolve("22")
//     console.log("resolve");
// })


// p1.then((res)=>{
//     console.log(res)
// })
// let p2 = new Promise((resolve, reject) => {
//     resolve(b)
// })

// let a = p1.then(res => res).then(res => res + 1)
// console.log(a)

// async function get() {
//     let b = await p2.then(res => res)
//     console.log(b)
//     // return a+b
// }
// get();



// const promise = new Promise((resolve, reject) => { 
//     console.log(1); 
//     resolve(); 
//     console.log(2);
//     setTimeout(() => { 
//         console.log(7); 
//     }) 
// }); 
// promise.then(() => { 
//     console.log(3); 
//     setTimeout(() => { 
//         console.log(6);
//     }) 
// }); 
// setTimeout(() => { 
//     console.log(5);
// });
// console.log(4);


// console.log('1');
// //1 7 8 6 2 4 3 5 9 11 10 12
// setTimeout(function() {
//     console.log('2');
//     process.nextTick(function() {
//         console.log('3');
//     })
//     new Promise(function(resolve) {
//         console.log('4');
//         resolve();
//     }).then(function() {
//         console.log('5')
//     })
// })
// process.nextTick(function() {
//     console.log('6');
// })
// new Promise(function(resolve) {
//     console.log('7');
//     resolve();
// }).then(function() {
//     console.log('8')
// })
// setTimeout(function() {
//     console.log('9');
//     process.nextTick(function() {
//         console.log('10');
//     })
//     new Promise(function(resolve) {
//         console.log('11');
//         resolve();
//     }).then(function() {
//         console.log('12')
//     })
// })

// function fn(a,b){
//     this.a = a;
//     this.b = b;
// }
// fn.prototype.say = function(){
//     console.log("say")
// }
// function newMethod(fn,...rest){
//     var obj = Object.create(fn.prototype);
//     fn.apply(obj,rest);
//     return obj;
// }
// let b = newMethod(fn,2,4);
// let c = newMethod(fn,3,5);
// b.say()
// c.q = 5;
// console.log(b,c)


// function deepCopy(obj){
//     if(obj instanceof Object){
//         let res = Array.isArray(obj)?[]:{};
//         for(let key in obj){
//             if(obj[key] instanceof Object){
//                 res[key] = deepCopy(obj[key]);
//             }else{
//                 res[key] = obj[key];
//             }
//         }
//         return res;
//     }else{
//         return "请传入对象作为参数"
//     }
// }
// let obj = {name:'allen',age:20,child:[{
//     name:"SafeArray",
//     age:50
// }]}
// let res = deepCopy(obj);
// res.age = 50;
// res.child.push("45")
// console.log(res,obj)

// function target(){

// }

// target.prototype.say = function(){
//     console.log("sayName");
// }
// function source(a){
//     this.name = a;
// }

// function extend(source,target){
//     var obj = Object.create(target.prototype);
//     target.call(obj);
//     source.prototype = obj;
//     source.constructor = source
// }

// extend(source,target);
// console.log(source.constructor)
// source.prototype.get = function (){
//     console.log("get")
// }
// source.prototype.get()
// var b = new source(5);

// let str = 'sad.js';
// let reg = /(?<!\.min)\.js$/;
// console.log(reg.test(str))

// let a = Math.random(1)*100;
// console.log(a);

// let url = 'http://www.google.com/?q=sa%20ngfor&&w=5&&e'
// // sangfor
// function isExit(url,par){
//     let reg = /\w+=\w+/gi
//     let res = url.match(reg);
//     for(let i=0; i<res.length; i++){
//         if(res[i].split("=")[0] === par){
//             return true
//         }
//     }
//     return false
// }


// let path = '/,abc,def,g';
// let reg = /\w+/g
// let newStr = path.match(reg).join("/");
// if(path.charAt(0)==='/'){
//     return '/'+newStr
// }
// if(path.charAt(path.length-1) === '/'){
//     return newStr+'/'
// }
// console.log();


// let o1 = {name:'allen'}
// o1.__proto__.say = function(){
//     console.log(this)
// }
// let o2 = Object.create(o1);
// o2.name = '54';
// o2.__proto__.say = function(){
//     console.log("555")
// }
// console.log(o1.name);

// function father(){
//     this.name = 'allen'
// }

// function son(){
//     father.call(this);
//     this.age = 20;
// }

// father.prototype.say = function(){
//     console.log("father say")
// }

// son.prototype = new father();
// extend(son,father)
// let s1 = new son()
// s1.say()
// father.prototype.say = function(){
//     console.log("----")
// }
// s1.say()
// function extend(source,target){
//     let o1 = Object.create(target.prototype);
//     o1.constructor = source;
//     source.prototype = o1
// }


function f(){
    this.name = 'father';
}

f.prototype.say = function(){
    console.log(this)
}

function s(){
    f.call(this)
    this.age = 20;
}

// function extend(source,target){
//     let o1 = Object.create(target.prototype);
//     o1.constructor = source;
//     source.prototype = o1;
// }

// function extend(f){
//     function fn(){}
//     fn.prototype = f.prototype;
//     return new fn();
// }
// s.prototype = extend(f);


s.prototype = Object.create(f.prototype);
// f.prototype.say = function(){
//     console.log("last")
// }
s.prototype.constructor = s;
let a = new s()
a.say()
console.log(a.__proto__)
console.log(a.name)
