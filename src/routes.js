import Categories from './components/views/Category/Categories.vue'
import Periods from './components/views/Period/Periods.vue'
import Dashboard from './components/views/Dashboard/Dashboard.vue'
import Finances from './components/views/Finance/Finances.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/periods',
    name: 'period',
    component: Periods
  },
  {
    path: '/categories',
    name: 'categories',
    component: Categories
  },
  {
    path: '/finances',
    name: 'finances',
    component: Finances
  }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
