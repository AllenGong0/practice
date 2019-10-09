import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      count:0,
      toDos:[
        {
          id:0,
          done:false
        },{
          id:1,
          done:true
        },{
          id:2,
          done:false
        },{
          id:3,
          done:true
        },{
          id:4,
          done:false
        },
      ]
  },
  mutations: {
      increment(state){
        state.count++;
      }
  },
  actions: {

  },
  getters:{
    toDoFilter:(state)=>{
      return state.toDos.filter(item=>{
        return item.done===true
      })
    },
    toDoLength:(state,getters)=>{
      return getters.toDoFilter.length
    }
  },
})
