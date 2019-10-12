// import Vue from './vue.js'


//register 全局 component
Vue.component('Counter', {
    props: ['title', 'arr'],
    inject:['consoleMsg'],
    // props:{
    //     title:'title',
    //     arr:'arr'
    // },
    data() {
        return {
            compCount: 'this is component'
        }
    },
    mounted() {
        console.log('this is Counter component')
        console.log(this);
        this.consoleMsg('counter');
    },
    template: `<div>{{compCount}}
        <div>{{title}}</div>
        <div>{{arr}}</div>
        <button @click="$emit('consoleMsg','qwe')">输出</button></div>`
})


//注册局部组件
let ComponentA = {
    props: ['textA'],
    template: `<div>这是组件A
    <slot name="header">这是header的备用内容</slot>
    <slot name="footer">这是footer备用内容，当插槽内无内容时，显示此内容</slot>
    <slot> default slot</slot>
       </div>`,
    mounted() {
        console.log(this.$parent.fullName = '这是fullName')
        console.log(this.$parent.fullName)
        console.log(this.$root) //访问根节点，访问父节点
    }
}

let vm = new Vue({
    el: '#root',
    data() {
        return {
            message: "this is vue",
            value: '',
            vHtml: `<div>this is v-html</div>`,
            attribute: 'id',//动态属性
            name1: 'name1',
            name2: 'name2',
            isActive: true,
            classObj: {
                isActive: true,
                isShow: true,
                showExplorer: false
            },
            currentComponent:'Counter',
            arr: ['qwe', 'asd', 'sw', 'aaa', 'eew']
        }
    },

    template: `<div >{{message}}
        <input type="text" v-model="value">
        <div v-html="vHtml"></div>
        <div :[attribute] = 'attribute'>this is id</div>
        <div>{{fullName}}</div>
        <button @click="changeMsg">更改</button>{{value}}
        <div>
<!--            <div :class="{active:isActive}">active类</div>-->
            <div :class="classObj">active类----对象语法</div>
            <div :class="[{active:isActive},'text-active']">active类----数组语法</div>
        </div>
<!--        <div v-for="(item,index) in arr" :key="index">{{item}}</div>-->
        
        <Counter title="这是个组件" @consoleMsg="consoleMsg" :arr="arr"/>
        <ComponentA :textA="value">
        <template v-slot:header>
        <div>this is header slot</div>
        </template>
    <template #footer>
    <div>this is slot about componentA{{name2}}  插槽缩写</div>
        <h2>父级模板中的内容是在父级作用域中编译的，子级模板中的内容是在子级模板中编译的</h2>
</template>
    qwe
        
</ComponentA>
      动态组件
      <keep-alive>
      被keep-alive包裹的组件会缓存下来，当下次切换回该组件的时候，组件状态保持不变
    <component :is="currentComponent"></component> 
    </keep-alive>
        </div>`,
    methods: {
        changeMsg() {
            this.message = '这是VUE';
            // this.fullName.set('qwe');
            this.fullName = 'qwe'
            console.log(this.fullName)
        },
        consoleMsg(str) {
            console.log(str)
            console.log(`this is father's methods`)
        }
    },
    computed: {
        fullName: {
            //计算属性默认只有get 必要时也可添加set
            get: function () {
                console.log('this is getter');
                return this.name1 + this.name2
            },
            set: function (str) {
                this.name1 = str
                console.log('this is setter')
            }
        },

        //计算属性也可以当作类
        classObject() {
            return {}
        }
    },

    //当数据开销比较大或者执行异步操作时用watch
    watch: {
        question() {
            return 5;
        }
    },
    components: {
        'ComponentA': ComponentA
    },
    provide:function () {
        //通过provide将父组件的方法注入到所有子组件中，子组件通过inject接收
        return {
          consoleMsg:this.consoleMsg
        }
    }
});



