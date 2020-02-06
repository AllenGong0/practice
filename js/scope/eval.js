function foo(str){
    eval(str) //欺骗词法，就好像在这里定义的一样
            //但这会消耗性能
    console.log(b)
}

let str = "var b = 6"
foo(str);

