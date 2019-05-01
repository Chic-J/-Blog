<template>
	<div class="indexBg">
		<div class="frame">
			<div class="blogName">
				<h1>Chic_Chen的网络日志</h1>
			</div>
			<div class="slogan"><blockquote>宇宙正在倾斜,所以大家渴望相识</blockquote><br/><span>via.<i>谷川俊太郎</i></span></div>
			<div class="entry"><a @click ="changeOverLay"><i>进来吧，陌生人</i><img src="../svg/right-circle.svg"></a></div>
			<div class="copyRight"><p>CopyRight©Chic_chen</p></div>
		</div>
	</div>
</template>
<script>
	export default {
		methods: {
			changeOverLay() {
				this.$store.commit('changeOverLay', false)
			}
		}
	}
</script>
<style >
	.indexBg {
		background-image: url(../img/Mountain.jpg);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		height: 720px;
		width: 100%;
	}
	.frame {
		width: 33%;
		height: 300px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
		transition: background-color 0.2s ease-out, opacity 0.2s ease-out; 
		color: white;
		background-color: dimgray;
		display: flex;
		justify-content: center;
		flex-direction: column;
		border-radius: 30px;
		border: 0.5px solid gray;
		opacity: .6;
	}
	.frame:hover {
		background-color:gray;
		opacity: 0.7;
	}
	.blogName {
		width: 80%;
		border-bottom: 1px solid gainsboro;
		font-size: 30px;
		text-align: center;
		margin: 0 auto;
	}
	.blogName h1 {
		font-size: 30px;
	}

	.slogan {
		font-size: 24px;
		margin: 30px auto;

	}
	.slogan blockquote {
		display: inline;
		font-size: 23px;
	}
	.slogan span {
		font-size: 15px;
		display: inline-block;
		position: absolute;
		right: 45px;
	}
	.entry {
		text-decoration: none;
		border-bottom: 1px solid gainsboro;
		width: 70%;
		margin: 0 auto;
		text-align: center;
		padding-bottom: 10px;
	}
	.entry a {
		text-decoration: none;
		color: white;
		cursor: pointer;
	}
	.entry a:hover img {
		transform: translateX(10px);
		opacity: 1;
	}
	.entry img {
		position: relative;
		top: 5px;
		width: 20px;
		height: 20px;
		opacity: 0;
		transition: transform 0.2s ease-in,
					opacity 0.2s ease-in;
	}
	.copyRight {
		text-align: right;
		font-size: 10px;
		margin-right: 20%;
	}

</style>