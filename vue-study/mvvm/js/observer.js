function Observer(data){
    this.data = data;
    this.walk(data)
}

Observer.prototype = {
    constructor: Observer,
    walk: function(data){
        let me  = this;
        Object.keys(data).forEach(function(key){
            me.convert(key,data[key])
        })
    },
    convert:function(){
        this.defineReactive(this.data,key,val);
    },
    defineReactive:function(data,key,val){
        let dep = new Dep();
        let childObj = observe(val);

        Object.defineProperty(data,key,{
            get:function(){
                return val;
            },
            set:function(newVal){
                if(newVal === val){
                    return;
                }

                val = newVal;

                //如果新值是obj继续进行监听
                childObj = observe(newVal)
                dep.notify();
            }
        })
    }
}

function observe(val,vm){
    if(!val || typeof val !== 'object'){
        return;
    }
    return new Observer(val)
}

let uid = 0;

function Dep(){
    this.id = uid++;
    this.subs = []
}

Dep.prototype = {

    //增加订阅者
    addSub: function(sub){
        this.subs.push(sub)
    },

    depend:function(){
        Dep.target.addDep(this);
    },

    removeSub: function(sub){
        let index = this.subs.indexOf(sub);
        if(index != -1){
            this.subs.splice(index,1)
        }
    },

    notify:function(){
        this.subs.forEach(function(){
            sub.update()
        })
    }
}

Dep.target = null;