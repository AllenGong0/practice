// //yield 委托
// function *foo(){
//     yield *bar();
//     yield 6;
// }
// function *bar(){
//     yield 1;
//     yield 2;
//     return 5;
// }

// var it1 = foo()
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());

function *foo(){
    console.log("inside *foo:",yield "B");
    console.log("inside *foo:",yield "C");
    return 'D' //D值传给yield
}
function *bar(){
    console.log("inside *bar:",yield "A");
    console.log("inside *bar:",yield *foo());
    console.log("inside *bar:",yield "E");
}

let it = bar()
console.log("outside",it.next()) //a
console.log("outside",it.next(1)) //b
console.log("outside",it.next(2))//c
console.log("outside",it.next(3)) //d //
console.log("outside",it.next(4))

