<template>
	<div class="tagBlock">
		<fieldset class="tagFieldset">
			<legend>标签</legend>
			<span v-for="tag in Tags" @click="trigerTag(tag)" class="tag" v-if= "tag">{{tag}}</span>
		</fieldset>
	</div>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex'
	export default {
		computed: mapGetters(['Tags']),
		methods: {
			trigerTag (tagName) {
				this.$store.dispatch('getTagArticles', tagName)
			},
		},
	}
</script>

<style>
	.tagBlock {
		width: 300px;
		margin: 0 auto;
	}
	.tagBlock fieldset {
		border: 1px solid grey;
		border-radius: 10px;
		width: 250px;
		margin: 0 auto;
	}
</style>