<template>
  <div class="post-container">
     <!-- view pane -->
      <article class="Post-view">
        <header v-html="Post.title"></header>
        <span v-if="Post.tag && Post.author" >
        	<span class="Post-view-author">
        		作者: <span>{{Post.author}}</span>
        	</span>
        	标签：<span class="Post-view-tag tags" v-for="Tag in Post.tag">{{Tag}}</span>
        </span>
        <pre v-html="markdown(Post.body)"></pre>
      </article>
  </div>
</template>
<script>
	import store from '../store'
	import {mapGetters, mapActions} from 'vuex'
	export default {
		computed: {
			...mapGetters(["Post"]),
		}
	}
</script>

<style>
.post-container {
	margin: 0 auto;
    width: 100%;
	border: 1px solid gray;
	border-radius: 5px;
    padding: 10px 10px;
}
.Post-view header {
  margin: 0 auto;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
}
.Post-view-tag, .Post-view-author span {
  border: 1px solid gray;
  border-radius: 15px;
  min-width: 30px;
  padding: 0 10px;
  margin-right: 5px;
  margin-bottom: 5px;
  display: inline-block;
  text-align: center;
  cursor: pointer;
}
.Post-view-tag:hover, .Post-view-author span:hover {
  background-color: silver;
}
.Post-view > span {
  display: block;
  text-align: center;
}
.Post-view-author {
  border: none;
}
.Post-view pre {
  white-space: pre-wrap;
  font-size: 15px;
  line-height: 25px;
}
</style>