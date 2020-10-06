import Vue from 'vue';
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js' 
import Dev from '@/serve-dev.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faHome, faTint, faUsers, 
         faPhone, faChild, faProjectDiagram, faThLarge, faTasks, faTable } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { router } from './_demo/router'

library.add(faUserSecret)
library.add(faHome)
library.add(faTint)
library.add(faUsers)
library.add(faPhone)
library.add(faChild)
library.add(faProjectDiagram)
library.add(faTasks)
library.add(faThLarge)
library.add(faTable)


Vue.config.productionTip = false;

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(Chartkick.use(Chart))

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: (h) => h(Dev),
  router
}).$mount('#app');
