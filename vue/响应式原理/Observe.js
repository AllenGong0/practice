class Watcher {
    constructor(vm, expr, cb) {
        this.vm = vm;
        this.expr = expr;
        this.cb = cb;
        this.oldVal = this.getOldVal();
    }

    getOldVal() {
        Dep.target = this
        const oldVal = compileUtil.getVal(this.expr, this.vm);//初始化数据时拿到老值
        Dep.target = null;
        return  oldVal
    }

    update() {
        let newVal =  compileUtil.getVal(this.expr, this.vm); //数据更新后再次取值
        if(newVal !== this.oldVal){
            this.cb(newVal);
        }
    }

    
}



class Dep {
    constructor() {
        this.subs = [],
        this.arrSubs = [];
    }

    addSub(watcher) {
        this.subs.push(watcher)
    }

    addArrSub(watcher){
        this.arrSubs.push(watcher);
    }

    notifyObj() {
        //数据变更 通知订阅者
        this.subs.forEach(w => w.update())
    }

    notifyArr(){
        this.arrSubs.forEach(w => w.update)
    }

}

class Observe {
    constructor(data) {
        this.data = data;
        this.observe(this.data)
    }

    observe(obj) {
        Object.keys(obj).forEach((key) => {
            if (Array.isArray(obj[key])) {
                this.arrObserve(obj[key])
            } else if (typeof obj[key] === 'object') {
                this.observe(obj[key])
            } else {
                this.defineReactive(obj, key, obj[key])
            }
        })
    }


    observeArr(arr) {
        const arrayProto = Array.prototype
        const arrMethods = Object.create(arrayProto);
        let options = ["push","pop","replace","reverse","shift","unshift"];
        options.forEach((item)=>{
            Object.defineProperty(arrMethods,item,{
                enumerable:true,
                configurable:false,
                value(...args){
                    console.log(args)
                    let original = arrayProto[item];
                    original.call(this,args);
                }
            })
        })
        arr.__proto__ = arrMethods;
    }

    arrObserve(arr) {
        arr.forEach((item) => {
            if (Array.isArray(item)) {
                this.arrObserve(item)
            } else if (typeof item === 'object') {
                this.observe(item)
            } else {
                //this.defineReactive(obj, key, obj[key])
            }
        })
    }



    defineReactive(obj, key, val) {
        const dep = new Dep(); //dep 收集当前对象的所有依赖
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: false,
            get() {
                Dep.target && dep.addSub(Dep.target)
                return val
            },
            set: (newVal) => {
                if (newVal !== val) {
                    val = newVal
                    if (Array.isArray(val)) {
                        this.arrObserve(val)
                    } else if (typeof val === 'object') {
                        this.observe(val)
                    }
                    dep.notify()

                }
            }
        })
    }
}