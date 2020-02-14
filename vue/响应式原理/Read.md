响应式原理
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