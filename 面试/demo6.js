// let obj = {
//     a:function(){
//         console.log(this)
//     }
// }
// const a = obj.a;
// // console.log(a);
// a()

// Function.prototype.myBind = function(that,...rest){
//     // this();
//     return (...res)=>{
//         this.bind(that,...rest,...res)
//     }   

// }
// function fn(){
//     console.log(this)
// }
// fn.myBind({name:5})(5)



// var name = 'global';
// var obj = {
//     name: 'local',
//     foo: function(){
//         this.name = 'foo';
//     }.bind(window)
// };
// var bar = new obj.foo();
// setTimeout(function() {
//     console.log(window.name);
// }, 0);
// console.log(bar.name);
  
// var bar3 = bar2 = bar;
// bar2.name = 'foo2';
// console.log(bar3.name);
let obj = {name:'allen',age:20};
 obj.a = obj;
function deepCopy(source,weakMap = new Map()){
    var target = Array.isArray(source)?[]:{};
    weakMap.set(source,target);
    for(let key in obj){
        if(obj[key] instanceof Object){
            if(weakMap.get(obj[key])){
                target[key] = weakMap.get(source);
            }else{
                target[key] = deepCopy(obj[key],map);
            }
        }else{
            target[key] = obj[key];
        }
    }
    return target;
}
let res = deepCopy(obj);
res.a = 5;
console.log(res);
console.log(obj)

