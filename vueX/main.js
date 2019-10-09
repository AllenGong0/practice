Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        count:0
    },
    mutations:{
        increment(state) {
            state.count++;
        }
    },
});

new Vue({
    el: '#root',
    data() {
        return {
            message: "msg",
        }
    },
    template: `<div><Counter></Counter></div>`,
    methods: {
    },
    components:{
        Counter:{
            template: `<div>{{count}}</div>`,
            computed:{
                count(){
                    return store.state.count
                }
            }
        }
    }
});

store.commit('increment');
console.log(store.state.count)
