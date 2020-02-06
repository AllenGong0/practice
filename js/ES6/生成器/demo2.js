// function *foo(){
//     //a:1,b:1
//     a++;
//     yield;
//     b = b * a;//b:2 a:2
//     a = (yield b) + 3 //a:5
// }
// //停在yield并把值传出来
// //next永远比yield多一个
// function *bar(){
//     b--;
//     yield;
//     a = (yield 8) + b; //a:10
//     b = a * (yield 2); //b:20
// }
// var a = 1,b = 2;
// function step(gen){
//     let it = gen();
//     let last;
//     return function(){
//         last = it.next(last).value;
//     }
// }

// let s1 = step(foo);
// let s2 = step(bar);

// s2()
// s2() //a:1 b:1
// console.log(a,b)
// s1()
// s1() 
// s1()
// s2() 
// s2()
// console.log(a,b)


//for of 遍历可迭代的，如果将一个东西设置为迭代器那就需要有[Symbol.iterator]属性

// var something = (function(){
//     var nextVal;
//     return {
//         [Symbol.iterator]: function(){return this}, //
//         next:function(){
//             return {
//                 value:nextVal = nextVal ? (3 * nextVal) + 6 : 1;,
//                 done:false
//             }
//         }
//     }
// })()

// for (var it of something) {
//     console.log(it);
//     if(it>500){
//         break;
//     }
// }

// let re = something.next()
// console.log(re)

// for(var ret; (ret= something.next()) && !ret.done;){
//     console.log(ret)
//     if(ret.value>500)
//     break;
// }

//二者区别为：一个是自动next，另一个手动next。手动优点可以在next的时候传递参数

//for in还可以遍历对象原型链上可以枚举的属性

function *something(){
    try{
        var nextVal;
        while(1){
            yield nextVal = nextVal ? (3 * nextVal) + 6 : 1;
        }
    }
    finally{
        console.log("cleaning up")
    }

}

let it = something()//something:生成器 it:迭代器
//迭代结束后会向生成器的迭代器发送一个迭代结束的消息
for (const iterator of it) {
    console.log(iterator);
    if(iterator>500) {
        // break //利用break发送消息或者return:
        let obj = it.return("hello word");
        console.log(obj) //done 已经被设置为true
        
    };
}