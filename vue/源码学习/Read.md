# 初始化
    一、
        将一些常用函数进行封装，转换成is形式。点运算符也封装成函数进行调用
        example:
        `
        var hasOwnPrototype = Object.prototype.hasOwnPrototype
        function hasOwn(obj,key){
            hasOwnPrototype.call(obj,key)
        }
        
        function polyfillBind (fn, ctx) {
            function boundFn (a) {
                var l = arguments.length;
                return l
                ? l > 1
                    ? fn.apply(ctx, arguments)
                    : fn.call(ctx, a)
                : fn.call(ctx)
            }

            boundFn._length = fn.length;
            return boundFn
        }
        `
        `
        function isPromise (val) {
            return (
                isDef(val) &&
                typeof val.then === 'function' &&
                typeof val.catch === 'function'
            )   
        }`
# 官方文档
## 深入响应式原理
    Vue无法检测到对象属性的添加或者删除
    对于已经创建的实例，Vue不允许添加根级别的响应事件
    对于已经创建的实例，Vue 不允许动态添加根级别的响应式属性。但是，可以使用 Vue.set(object, propertyName, value) 方法向嵌套对象添加响应式属性。例如，对于：

    Vue.set(vm.someObject, 'b', 2)
    您还可以使用 vm.$set 实例方法，这也是全局 Vue.set 方法的别名：

    this.$set(this.someObject,'b',2)
    有时你可能需要为已有对象赋值多个新属性，比如使用 Object.assign() 或 _.extend()。但是，这样添加到对象上的新属性不会触发更新。在这种情况下，你应该用原对象与要混合进去的对象的属性一起创建一个新的对象。

    // 代替 `Object.assign(this.someObject, { a: 1, b: 2 })`
    this.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 })
### 异步更新队列
    Vue更新dom是异步执行的，只要侦测到数据变化，Vue将开启一个队列,并缓冲在同一事件循发生的所有变更数据。如果同一个watcher被多次触发，那么只会被推入到队列中一次。在下一次事件循环'tick'中，vue刷新并执行实际的工作。队列内使用promise.then setImmediate，MuationObserve 
## 声明周期
    beforeCreate Created beforeMount Mounted BeforeUpdate Updated BeforeDestroy Destroyed
    
    以下两个是在使用keep-alive的时候用的生命周期，第一次进入和离开组件时会触发这两个生命周期
    第二次进入的时候只会触发activated
    activated deactivated

    errorCaptured  serverPrefetch  错误捕获和服务器预加载

# Vue3
    可读性变强 (Composition API、New Syntax) 
    代码重用问题
    1. mixin
        优点：变得更有组织性
        易发生冲突，不清楚的关系，不容易被复用
    2. mixin Factory 
        优点：更容易复用，清楚的关系
        缺点：较弱的namespace 、隐式属性添加、运行时不能实例访问
    3. slot
        优点：解决了mixin的问题
        缺点：缩进增加，不灵活，效率低，更多的配置

    
