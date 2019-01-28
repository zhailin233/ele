import Vue from 'vue'
import Router from 'vue-router'
import vueResource from 'vue-resource'
import goods from '@/components/goods/goods'
import seller from '@/components/seller/seller'
import ratings from '@/components/ratings/ratings'

Vue.use(Router)
Vue.use(vueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Goods',
      component: goods
    },
    {
      path: '/seller',
      name: 'Seller',
      component: seller
    },
    {
      path: '/ratings',
      name: 'Ratings',
      component: ratings
    }
  ]
})
