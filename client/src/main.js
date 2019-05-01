import Vue from 'vue'
import store from './store'
import OverLay from './components/OverLay.vue'
import Index from './components/Index.vue'
import router from './router'
import VueStore from './plugins/store.js'
import VueFetch, {$fetch} from './plugins/fetch.js'
import 'babel-polyfill'
import * as filters from './filters.js'
import './global-components.js'

for (const key in filters) { 
  Vue.filter(key, filters[key]) 
}

//Vue.use(VueStore, store)
Vue.use(VueFetch, {
	baseUrl : 'http://localhost:3000',
})


function main () {
	new Vue({
		el: '#app',
		...Index,
		router,
		store,
	})
}

main()