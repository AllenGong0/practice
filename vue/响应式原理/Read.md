VUE2.0

响应式原理
        通过Object.definePrototype 进行数据劫持，结合发布者-订阅者模式，进行数据监听，当数据变更时，通知订阅者进行数据更新，并触发响应回调。
        这里面主要有四个类    Compile(指令解析器)  Observer(数据劫持)  
                            Watcher(观察者) Dep(依赖收集器-收集观察者)
        首先对vue中的数据进行劫持，修改每个对象的get以及set函数，
        渲染页面，解析指令 例如：{{}}、v-for、v-text、v-html 即compile，并添的wa添加相应的watcher
        注：若要解析指令，必定需要操作dom元素，对dom元素进行替换，所以要使用DocumentFragment(碎片化文档)
        数据更改时，就会触发相应的set函数，并通知订阅者进行数据更新。
        更改试图时，如input框，就需要对input框事件进行监听，当数据变化时，调用相应的set函数。


订阅者  观察者  指令解析器  
一、   订阅者用来订阅数据变化
二、   观察者根据数据变化来通知订阅者，并渲染页面进行数据响应
三、    指令解析器解析页面中指令 比如 {{}}  以及 v-model v-html 等指令
    Compile
        1.获取文档碎片，减少页面回流重绘
        2.编译子节点
        3.将子节点添加到根元素
        4.对元素节点进行解析

遇到的问题：
    1.reduce    第二个参数是初始值，选填，如果有值则将当前的pre设置为initial,否则用数组第一个元素
                做为pre
            用途：
                example 1:
                    obj = {
                        "msg":"name",
                        "person":{
                            "name":'allen'
                        }
                    }
                    即：str = "msg" || "person.name" 时，可以用reduce取值
                    str.split(".").reduce((data,currentValue)=>{
                        return data[currentValue]
                    },obj)
    2.childNodes 
            <div>text</div> 这是两个节点 标签节点和里面的文本节点

    3.正则表达式  暂时不会
            content.replace(/\{\{(.+?)\}\}/g,(...args)=>{
                console.log(args[1]);   //args 取到里面的值
            })
    4.watcher：
        数据变化时添加观察者，更新数据之后将当前观察者销毁掉，对每个属性进行观察
        在指令解析时添加watcher
    5.compile:
        对vue的指令进行解析替换成数据，例如：v-text v-html v-on 以及模板指令 {{}}
    6.observe：
        数据变化时调用notify方法，对对象的get以及set属性进行劫持
    7.Dep:
        依赖收集器，用于收集所有的Watcher

数组如何进行监听
    1.监听数组的方法， 监听数组的长度变化。
    2.通过Object.create(Array.prototype) 创建新新的数组对象，防止污染原数组
    3.对新数组对象的方法进行监听
    4.方法被调用时调用原数组的方法， 并通知订阅者更新数据。