import Vue from 'vue'
import Vuex from 'vuex'
import { SOME_MUTATIONS } from "./mutation-types";

Vue.use(Vuex)

const moduleA = {
  namespaced:true, //添加namespace使其成为带有命名空间模块
  state:{
    moduleType:'A'
  },
  mutations:{
    getMutationA(state){
      console.log("---------")
      console.log(state.moduleType)
    }
  },
  getters:{
    getMutationA(state,getters,rootState){
          console.log(state)
          console.log(getters)
          console.log(rootState)
            return 5;
      }
  },
  actions:{
    getMutationA({state,commit,rootState}) {
      commit('getMutationA') //moduleA/getMutationA
      // commit('getMutationA',null,{root:true})  //getMutationA

      //分发action和提交mutation相同
        console.log(state)
        console.log(rootState)
        console.log(commit)
    },
    someAction:{
      root:true,//注册全局action
      handler(namespacedContext, payload){
        //to do
        console.log(namespacedContext)
        console.log(payload)
      }
    }
  }
}

export default new Vuex.Store({

  modules:{
    moduleA:moduleA,
    account:{
      namespaced:true,
      state:{
        stateA:0,
        stateB:2
      },
      mutations:{
        accountMutation(state){
            console.log(state)
        }
      },
      getters:{

      },
      actions:{

      }
    }
  },
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
    /**
     * mutation必须是同步的
     * */
      increment(state,payload){
        state.count += payload.add;
      },
      [SOME_MUTATIONS](state){
        setTimeout(()=>{

        },2000)
        console.log(state.count)
      }
  },
  actions: {
    /**
     * action 函数接受一个与store实例具有相同方法和属性的context对象，
     * action 通常是异步的
     * **/
    increment(context){
    },
    // increment({commit,getters},obj){
    //   console.log(getters);
    //   console.log(obj);
    //   commit('increment',obj)
    // },
    actionB({commit}){
      commit('SOME_MUTATION')
    },
    // async actionA({commit}){
    //   await commit({type})
    // }
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
