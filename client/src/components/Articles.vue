<template>
	<div class="articlesBlock">
	<section class="Articles" v-for= "article in showArticles" @click="triggerPost(article.id)">
		<router-link :to="{ name: 'post'}">
			<header class="articleHeader">
				<p class="title">{{article.title}}<img src="../svg/right-circle-black.svg"></p>
				<time class="updateTime">{{article.updateTime | date}}</time>
			</header>
			<section>
				<p class="articleBody">{{article.body}}</p>
			</section>
			<footer class="articleFooter">
				<span class="articleTags">标签：<span class="tag" v-for="tag in article.tag" v-if="tag" @click="triggerTag(tag)">{{tag}}</span></span>
				<span>阅读数：<span class="readTime">{{article.readTime}}</span></span>
			</footer>
		</router-link>
	</section>
	</div>
</template>

<script>
	import store from "../store"
	import {mapGetters, mapActions} from "vuex"
	export default {
		computed: mapGetters([
			'showArticles',
		]),
		methods: {			
			triggerTag (tagName) {
				this.$store.dispatch('getTagArticle', tagName)
			},
			triggerPost(selectedId) {
				this.$store.dispatch('getSelectedPost', selectedId)
			},
		},
		created() {
			this.$store.dispatch('getArticles')
		}
	}
</script>

<style>
	.articlesBlock {
		width: 65%;
		display:flex;
		flex-direction: column;
		margin-right:30px;
	}
	.Articles {
		color: black;
		border: 1px solid gray;
		border-radius: 5px;
		margin-bottom: 5px;
		transition: box-shadow .2s ease-in,
		transform .2s ease-in;
	}
.Articles:hover {
	box-shadow: 3px 3px gray;
}
.Aritcles:active {
	transform: translate(3px, 3px);
}
	.articleBody {
		width:90%;
		max-height:80px;
		overflow: hidden;
		text-overflow: ellipsis;
		margin: 10px 5px 5px 10px;
	}
	.title {
	display: inline-block;
	max-width: 300px;
	vertical-align: middle;
	margin: 10px 0 0 10px;
	font-size: 20px;
}
	.Articles:hover img {
		transform: translateX(10px);
		opacity: 1;
	}
	.title img {
		position: relative;
		top: 5px;
		width: 20px;
		height: 20px;
		opacity: 0;
		transition: transform 0.2s ease-in,
					opacity 0.2s ease-in;
	}
.updateTime {
	display: inline-block;
	margin: 10px 10px 0 0;
}
.articleHeader, .articleFooter {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	color: black;
	margin-bottom: 5px;
}
.articleTags {
	display: inline-block;
	margin-left: 10px;
	vertical-align: middle;
}
.readTime {
	display: inline-block;
	margin-right: 10px;
}
.tag {
	border: 1px solid gray;
	border-radius: 15px;
	min-width: 30px;
	padding: 0 5px;
	margin-right: 5px;
	margin-bottom: 5px;
	display: inline-block;
	text-align: center;
	cursor: pointer;
}
.tag:hover {
	background-color: silver;
}
</style>