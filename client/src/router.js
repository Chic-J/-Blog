import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './components/Index.vue'
import Tags from './components/Tags.vue'
import Login from './components/Login.vue'
import About from './components/About.vue'
import Articles from './components/Articles.vue'
import Edit from './components/Edit.vue'
import Post from './components/Post.vue'
import store from './store'

Vue.use(VueRouter)

const routes = [
	{path: '/', name: 'home', component: Articles},
	{path: '/login', name: 'login', component: Login},
	{path: '/tags', name: 'tags', component: Tags},
	{path: '/about', name: 'about', component: About},
	{path: '/edit', name: 'edit', component: Edit},
	{path: '/post', name: 'post', component: Post},
]

const router = new VueRouter({
	routes,
	mode:'history',

})
router.beforeEach((to, from, next) => {
	if(to.name == 'edit') {
		setTimeout(function(){store.commit('changeAsideShow', false)}, 500)
		next()
		return
	} else {
		store.commit('changeAsideShow', true)
		next()
		return
	}
})

export default router