<template>
	<div class="container">
		<Banner />
		<div class="main">
			<transition mode="out-in" name='change'>
				<router-view /> 
			</transition>
			<AsideBar />
		</div>
		<transition name="fade">
			<OverLay v-if='this.$store.state.displayOverLay' class='overlay' />
		</transition>
	</div>
</template>

<script>
	import Banner from './Banner.vue'
	import OverLay from './OverLay.vue'
	import AsideBar from './AsideBar.vue'
	import router from '../router'

	export default {
		components: {
			OverLay,Banner,AsideBar,
		}
	}
</script>
<style>
	body {
		background-image: url('../img/Mountain.jpg');
		background-attachment: fixed;
	}
	.container {
		margin: 0 auto;
		width: 100%;
	}
	.main {
		display: flex;
		width: 80%;
		justify-content: flex-end;
		margin: 0 auto;
	}

</style>