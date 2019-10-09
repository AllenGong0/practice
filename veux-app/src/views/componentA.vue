<template>
<!--  <div>{{count}}{{test}}&#45;&#45;&#45;&#45;{{countAlias}}</div>-->
  <div>{{toDoFilter}}--{{toDoLength}}</div>
<!--  <button onclick="addCounter"></button>-->
</template>

<script>
  import {mapState,mapGetters} from 'vuex'
    export default {
        name: "componentA",
        data (){
            return {
                // toDos:this.$store.getters.toDoFilter,
                // toDoLength:this.$store.getters.toDoLength
            }
        },
        computed:{
            count(){
                return this.$store.state.count
            },
            ...mapGetters(['toDoFilter','toDoLength']),

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
            }
        }
    }
</script>

<style scoped>

</style>
