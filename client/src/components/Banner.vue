<template>
	<header class="bannerHeader">
		<h1 class="Blog-title">Chic_Chen的网络日志</h1>
		<div>
			<NavMenu />
		</div>
	</header>
</template>


<script>
	import NavMenu from './NavMenu.vue'
	export default {
		components: {
			NavMenu,
		}
	}	
</script>
<style>
.Blog-title {
	color: gray;
	margin-left: 30px;
}
.bannerHeader {
		background-image: url('../img/Mountain.jpg');
		height: 200px;
		width:80%;
		margin: 0 auto;
		margin-bottom: 10px;
		border: 1px solid gray;
		border-radius: 10px;
		display: flex;
    	flex-direction: column;
    	justify-content: space-around;
}
.bannerWord {
	font-size: 50px;
	margin:0 auto;
	text-align: center;
	width: 100%;
	height: 80%;
	line-height: 200px;
}

</style>