import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import father from './views/father.vue';
import vueDemo1 from './components/router1.vue'
import vueDemo2 from './components/router2.vue'

Vue.use(Router)


const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/About.vue'),
      // redirect: '/about/father',
      children:[
        {
          path:'',
          // name:'father',
          components:{
              // default : father,
              default: ()=>import('./views/father.vue') ,
              a: ()=>import('./components/router1.vue'),
              b: ()=>import('./components/router2.vue'),
            }
        },
        {
          path:'son/:id',
          name:'son',
          component: () => import('./views/son.vue'),
          props: true
        }
      ]
    },
    {
      path:'*',
      name:'notfound',
      component: () => import('./views/NotFound.vue')
    }

  ]
})
router.beforeEach((to,from,next)=>{
  console.log(to);
  console.log(from);
  console.log(next)
  next()
})
export default router;
