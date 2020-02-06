let obj = {
    name:'allen',
    age:20
}
function foo(arg,arg1){
    console.log(arg);
    console.log(arg1)
    console.log(this)
}
let bin = foo.bind(obj,'name','20');
console.log(bin)
bin();
