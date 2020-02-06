// var x = 5;

// function *foo(){
//     x++;
//     let y = 2 * (yield function a(){
//         console.log("aaa")
//     });
//     console.log(y)
//     return 5;
// }

// function bar(){
//     x++;
// }


// //1.next的值传递给上一个yield
// //2.yield后面的值传递给当前value
// var it = foo();
// console.log(it)
// let b = it.next()
// let second = it.next(7)
// console.log(second)
// let aa = b.value
// aa()
// x++;


