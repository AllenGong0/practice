一、this
    this是在运行时绑定的，并不是在编写时绑定的，它的上下文取决于函数调用时的各种条件，
    this的绑定和函数声明的位置没有任何关系，只取决于函数的调用方法

    当一个函数被调用时，会创建一个活动记录(执行上下文)，这个记录会包含函数在哪里调用
    (调用栈)、函数调用的方式、传入的参数等信息。this就是这个记录的一个属性，会在函数
    执行过程中用到
    (1) 默认绑定
        fn()直接使用不带任何参数修饰的函数引用进行调用，则会将this绑定至全局，在严格
        模式下会将this绑定至undefined
        *在严格模式下调用在非严格模式下绑定的fn,并不会影响fn的this*
        function fn(){
            console.log(this)
        }
        (function(){
            "use strict"
            fn();
        })()
    (2) 隐式绑定
        调用位置有上下文对象，或者说被某个对象拥有，或者包含
        function fn(){console.log(this.a)}
        var obj = {a:2,fn:fn};
        obj.fn()
        使用obj上下文来引用函数，因此可以说函数调用时obj对象“拥有”或者“包含”函数引用
        在这个时候默认规则会把this绑定至这个上下文对象。
        在对象引用链中只有最后一层调用的位置才起作用
        var obj1 = {a:3,fn:obj.fn}  *输出fn*
        隐式丢失
            1)var foo = obj.fn *其实只是对fn函数本身，此时的bar是一个不带任何修饰的函数调用，应用默认绑定*
            2)  function bar(fn){fn()} 
                bar(obj.fn) 参数传递就是一个隐式赋值
    (3)显示绑定
        call apply bind
        把null或者undefined传入函数中会被忽略
    (4)强制绑定
        new 操作符
        创建新对象，连接原型，绑定this，返回新对象

