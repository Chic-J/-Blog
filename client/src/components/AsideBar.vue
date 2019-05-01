<template>
	<aside v-if="asideShow">
		<About />
		<Search />
		<Tags />
	</aside>
</template>
<script>
	import About from './About.vue'
	import Search from './Search.vue'
	import Tags from './Tags.vue'
	import {mapGetters} from 'vuex'
 	export default {
 		components: {
 			About, Search, Tags
 		},
 		computed: mapGetters(['asideShow',]),
	}
</script>