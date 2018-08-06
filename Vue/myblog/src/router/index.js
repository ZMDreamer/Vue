import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import list from '@/components/list'
import detail from '@/components/detail'
Vue.use(Router)
export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {path:'*',redirect:'/'},
    {
      path: '/list',
      name: 'list',
      component: list,
      children: [{
        path: 'detail',
        name: 'detail',
        component: detail,
      },
    ]
    }
  ]
})
