import Categories from './components/views/Category/Categories.vue'
import Periods from './components/views/Period/Periods.vue'

const routes = [
  {
    path: '/',
    name: 'category',
    component: Categories
  },
  {
    path: '/periods',
    name: 'period',
    component: Periods
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
