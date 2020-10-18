import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import ChocoView from '../views/ChocoView'
import FilledView from '../views/FilledView'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/edit',
      name: 'ChocoView',
      component: ChocoView
    },
    {
      path: '/filled',
      name: 'FilledView',
      component: FilledView
    }
  ],
  mode: 'history'
})
