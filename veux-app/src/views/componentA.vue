/* eslint-disable */
<template>
<!--  <div>{{count}}{{test}}&#45;&#45;&#45;&#45;{{countAlias}}</div>-->
  <div>{{toDoFilter}}--{{toDoLength}}--{{count}}--{{getMutationsA}}
    <button @click="add({add:2})">增加</button>
  </div>
<!--  <button onclick="addCounter"></button>-->
</template>

<script>
  // import {createNamespacedHelpers} from 'vuex'
  // const {mapState}  = createNamespacedHelpers('moduleA')
  /**
   * 创建基于某个命名空间的辅助函数，该函数返回一个对象，
   * 对象里有新的绑定在给定命名空间值上的组件绑定辅助函数
   **/

  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
        mounted(){
            // this.$store.dispatch('getMutationA')
            this.$store.dispatch('moduleA/getMutationA')


            this.$store.dispatch('someAction')
            // this.$store.commit({
            //     type:'increment',
            //     add:5
            // });
            // this.$store.commit({
            //     type:'SOME_MUTATIONS'
            // })
            // console.log(this.$store.state.count)
            // this.$store.dispatch('increment',{add:5})
            this.$store.dispatch({
                type:'increment',
                add:10
            })
        },
        name: "componentA",
        data (){
            return {
                // toDos:this.$store.getters.toDoFilter,
                // toDoLength:this.$store.getters.toDoLength
            }
        },
        computed:{
            // count(){
            //     console.log(this)
            //     return this.$store.state.count
            // },
            ...mapGetters(['toDoFilter','toDoLength']),
            ...mapGetters({
               getMutationsA:'moduleA/getMutationA'
            }),
            ...mapState({
                count:'count'
                // newProps:state=>state.newProps
                //mapState将store里的state映射出来，
                //mapGetters将getters里的方法映射出来
            })

        },

        // computed:mapState({
        //     count :state => state.count,
        //     countAlias:'count',
        //     test: function () {
        //         return 'qwe'
        //     }
        // }),
        methods:{
            addCounter(){
                // this.dispatch('')
            },
            // increment(){
            //     this.$store.commit({
            //         type:'increment',
            //         add:2
            //     })
            // }
            // ...mapMutations(['increment'])
            ...mapMutations({
                add:"increment"
            }),
            ...mapMutations('moduleA',{
                //mutations
            }),
            //将模块空间名称字符串作为第一个参数传递给（mapAction,mapMutations,mapState,mapGetters）
            //这样所有绑定都会自动将该模块作为上下文。
            ...mapMutations('moduleA',[])

        }
    }
</script>

<style scoped>

</style>
