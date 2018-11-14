import Vue from 'vue'
import Layout from './components/_layout/_layout.vue'
import VueRouter from 'vue-router'
// router setup
import routes from './routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faTachometerAlt, faHandHoldingUsd, faListAlt, faCalendarAlt, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee, faTachometerAlt, faHandHoldingUsd, faListAlt, faCalendarAlt, faEdit, faTrash)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

Vue.use(VueRouter)

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active'
})
new Vue({
  render: h => h(Layout),
  router,
}).$mount('#app')
