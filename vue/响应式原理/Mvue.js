const compileUtil = {
    getVal(expr, vm) {
        //这个reduce简直太棒了  
        return expr.split(".").reduce((pre, currentValue) => {
            return pre[currentValue];
        }, vm.data)  //reduce，第二个参数是 初始值 如果没有初始值则使用数组第一个参数作为初始值
    },

    getContent(expr, vm) {
        return expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
            return this.getVal(args[1], vm);
        })
    },

    text(node, expr, vm,data) {
        let val;
        if (~expr.indexOf("{{")) {
            if(data !== undefined){
                val = data
            }else{
                val = expr.replace(/\{\{(.+?)\}\}/g, (...args) => {

                    new Watcher(vm, args[1], () => {
                        this.update.updateText(node, this.getContent(expr, vm))
                    })
    
                    return this.getVal(args[1], vm);
                })
            }

        } else {
            val = this.getVal(expr, vm);
        }
        this.update.updateText(node, val);
    },
    html(node, expr, vm) {
        new Watcher(vm, expr, (val) => {
            this.update.updateHtml(node, val)
        })
        const val = this.getVal(expr, vm);
        this.update.updateHtml(node, val)
    },
    model(node, expr, vm) {
        new Watcher(vm, expr, (val) => {
            this.update.updateModel(node, val)
        })
        const val = this.getVal(expr, vm);
        this.update.updateModel(node, val)
    },
    // for(node, expr, vm) {
    //     let strArr = expr.split(" ");
    //     let frag = document.createDocumentFragment();
    // },
    bind() {

    },
    compileNode(node) {
        if (~expr.indexOf("{{")) {
            val = expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
                new Watcher(vm, args[1], () => {
                    this.update.updateText(node, this.getContent(expr, vm))
                })

                return this.getVal(args[1], vm);
            })
        } else {
            val = this.getVal(expr, vm);
        }
        this.update.updateText(node, val);
    },
    update: {
        updateText(node, val) {
            node.textContent = val;
        },
        updateHtml(node, val) {
            node.innerHTML = val;
        },
        updateModel(node, val) {
            node.value = val
        },
    }
}

class Compile {
    constructor(el, vm) {
        this.el = this.isNode(el) ? el : document.querySelector(el);
        this.vm = vm;
        const fragment = this.nodeFragment(this.el); //碎片化文档取出来 在进行操作，减少回流重绘
        //指令解析
        this.compile(fragment)
        this.el.appendChild(fragment)
    }

    compile(fragment, data) {
        
        let childNodes = fragment.childNodes;
        [...childNodes].forEach((child) => {
            if (child.childNodes && child.childNodes.length) {
                if (child.hasAttribute("v-for")) {
                    this.compileCycle(child)
                } else {
                    this.compile(child);
                }
            } else {
                if (this.isNode(child)) {
                    //指令解析 编译元素指令
                    this.compileElement(child, data)
                } else {
                    //文本节点
                    if(data !== undefined){
                        // console.log(child)
                        this.compileText(child, data)
                    }else{
                        this.compileText(child,data)
                    }
                }
            }
        })
    }

    compileCycle(child) {
        let frag = document.createDocumentFragment();
        let firstChild;
        while (firstChild = child.firstChild) {
            frag.appendChild(firstChild);
        }
        let data = 3;
        for(let i=0; i<data; i++){
            let newFrag = frag.cloneNode(true);
            let node = [...newFrag.childNodes][1]
            this.compile(node,i);
            child.appendChild(node)
        }
        child.removeAttribute("v-for");

    }

    compileElement(child) {
        let attributes = child.attributes;
        [...attributes].forEach(attr => {
            const { name, value } = attr;
            if (this.isDirective(name)) {
                const [, directive] = name.split("-"); //text html on:click;
                const [directiveName, eventName] = directive.split(":");

                //数据驱动试图
                compileUtil[directiveName](child, value, this.vm, eventName);

                //删除指令
                child.removeAttribute(name)

            }
        });
    }

    compileText(node,data) {
        if(data!==undefined){
            // console.log(node)
            // console.log(data)
        }
        const content = node.textContent;
        if (/\{\{(.+?)\}\}/.test(content)) {
            compileUtil['text'](node, content, this.vm,data)
        }
    }

    isDirective(name) {
        return name.startsWith("v-");
    }



    nodeFragment(el) {
        let frag = document.createDocumentFragment();
        let firstChild;
        while (firstChild = el.firstChild) {
            frag.appendChild(firstChild);
        }
        return frag;
    }

    isNode(node) {
        return node.nodeType === 1
    }

}



class MVue {
    constructor(options) {
        this.$el = options.el;
        this.$data = options.data;
        this.$options = options;
        if (this.$el) {

            //实现一个observe  
            new Observe(this.$data)  //数据劫持

            new Compile(this.$el, this.$options);
            //数据观察者指令解析器  指令编译->添加watcher 
            //watcher 作用：观察每个数据的变化，并更新试图
        }
    }

}