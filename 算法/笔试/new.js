// // 让我们从一个自身拥有属性a和b的函数里创建一个对象o：
// let f = function () {
//     this.a = 1;
//     this.b = 2;
//  }
//  /* 这么写也一样
//  function f() {
//    this.a = 1;
//    this.b = 2;
//  }
//  */
//  let o = new f();
// let cc=f.prototype
// cc
//  // 在f函数的原型上定义属性
//  f.prototype.b = 3;
//  f.prototype.c = 4;
 
//  // 不要在 f 函数的原型上直接定义 f.prototype = {b:3,c:4};这样会直接打破原型链
//  // o.[[Prototype]] 有属性 b 和 c
//  //  (其实就是 o.__proto__ 或者 o.constructor.prototype)
//  // o.[[Prototype]].[[Prototype]] 是 Object.prototype.
//  // 最后o.[[Prototype]].[[Prototype]].[[Prototype]]是null
//  // 这就是原型链的末尾，即 null，
//  // 根据定义，null 就是没有 [[Prototype]]。
 
//  // 综上，整个原型链如下: 
 
//  // {a:1, b:2} ---> {b:3, c:4} ---> Object.prototype---> null
 
//  console.log(o.a); // 1
//  // a是o的自身属性吗？是的，该属性的值为 1
 
//  console.log(o.b); // 2
//  // b是o的自身属性吗？是的，该属性的值为 2
//  // 原型上也有一个'b'属性，但是它不会被访问到。
//  // 这种情况被称为"属性遮蔽 (property shadowing)"
 
//  console.log(o.c); // 4
//  // c是o的自身属性吗？不是，那看看它的原型上有没有
//  // c是o.[[Prototype]]的属性吗？是的，该属性的值为 4
 
//  console.log(o.d); // undefined
//  // d 是 o 的自身属性吗？不是，那看看它的原型上有没有
//  // d 是 o.[[Prototype]] 的属性吗？不是，那看看它的原型上有没有
//  // o.[[Prototype]].[[Prototype]] 为 null，停止搜索
//  // 找不到 d 属性，返回 undefined
//  function doSomething(){}
// console.log( doSomething.prototype );
// // 和声明函数的方式无关，
// // JavaScript 中的函数永远有一个默认原型属性。
// var doSomething = function(){};
// console.log( doSomething.prototype );

// function doSomething(){}
// doSomething.prototype.foo = "bar";
// var doSomeInstancing = new doSomething();
// doSomeInstancing.prop = "some value";
// console.log("doSomeInstancing.prop:      " + doSomeInstancing.prop);
// console.log("doSomeInstancing.foo:       " + doSomeInstancing.foo);
// console.log("doSomething.prop:           " + doSomething.prop);
// console.log("doSomething.foo:            " + doSomething.foo);
// console.log("doSomething.prototype.prop: " + doSomething.prototype.prop);
// console.log("doSomething.prototype.foo:  " + doSomething.prototype.foo);
// function Graph() {
//     this.vertices = [];
//     this.edges = [];
//   }
  
//   Graph.prototype = {
//     addVertex: function(v){
//       this.vertices.push(v);
//     }
//   };

//   function a(){
//     Graph.call(this)
//   };
//   function b(){
//     Graph.call(this)
//   }
// a
//   a.__proto__=Graph.prototype;
  
//   console.log(a.prototype)
//   console.log(a.addVertex)
//   console.log(a.vertices)
//   var g = new Graph();
//   // g 是生成的对象，他的自身属性有 'vertices' 和 'edges'。
//   // 在 g 被实例化时，g.[[Prototype]] 指向了 Graph.prototype。

//   (function test(){
//       console.log("apply")
//   }).apply(this,[]);


//   let obj3 = {
//       name:'allen'
//   }
//   function obj1(){
//       this.a  = function(){console.log(this)} 
//   }
// //   let obj = new obj1();
// //   obj1.call(obj3)
// //   let obj2= new obj1()
// //   obj.a()
// //   console.log(obj2)


//   function obj(){
//       this.name = 'allen';
//       console.log(this)
//   }
//   function person(){
//       obj.call(this)
//   }
//   function student(){
//       obj.call(this)
//   }

//   let str = new student();

//   let per = new person();
  
//   str
  
  

//   let obj2 = {

//   }

// function a(){
//     this.name = 'allen';
//     console.log("this is a");
// }  

function a(){
    b.call(this);
}

function b(){
    this.age = 5
    console.log("this is b");
}

b.prototype.hello = function (){
    console.log("this is b hello")
}


var inherit = (function(c,p){
    var F = function(){}
    return function(c,p){
        // F.prototype = p.prototype;
        c.prototype =  p.prototype;
        c.prototype.constructor = c;
    }
})()
inherit(a,b) //实现extend关键字
let newB = new a();

console.log(newB)
newB.hello()
console.log(a)
function Base(){

}
var obj = {};
obj.__proto__ = Base.prototype;
Base.call(obj);


function fn(){

    this.a = 5;
}
function fn1(){

}
fn.prototype = fn1.prototype;
