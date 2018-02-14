import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import lavandarias from '@/components/lavandarias'
import maquinas from '@/components/maquinas'
import liquidos from '@/components/liquidos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/lavandarias',
      name: 'Lavandarias',
      component: lavandarias
    },
    {
      path: '/maquinas',
      name: 'Maquinas',
      component: maquinas
    },
    {
      path: '/liquidos',
      name: 'Liquidos',
      component: liquidos
    }
  ],
  mode: 'history'
})
