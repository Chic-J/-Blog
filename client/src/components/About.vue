<template>
	<div class="aboutBlock">
		<section class="imformation">
			<img class="headerImg" src="../img/header.jpg">
			<p>CHIC_CHEN</p>
			<div class="homeBlock"><img class="home" src="../svg/home.svg"><span>海南&nbsp;&nbsp;澄迈</span></div>
		</section>
		<section class="words">
			<p>一个无趣得很的人</p>
		</section>
		<section class="contact">
			<a href=""><img src="../svg/github.svg"></a>
			<a href=""><img src="../svg/email.svg"></a>
			<a href=""><img src="../svg/wechat.svg"></a>
		</section>
	</div>
</template>

<style name='scoped'>
	.aboutBlock {
		border: 1px solid grey;
		border-radius: 10px;
		width: 273px;
		margin: 0 auto;
	}
	.imformation {
		overflow: hidden;
	}
	.headerImg {
		float: left;
		margin-left: 30px;
		margin-right: 20px;
		width:80px;
		height: 80px;
	}
	.imformation p {
		font-size: 20px;
		margin: 0 auto;
		margin-top: 10px;
	}
	.homeBlock {
		height : 30px;
	}
	.homeBlock span {
		display: inline-block;
		vertical-align: middle;
	}
	.home {
		width: 25px;
		height: 25px;
		vertical-align: middle;
	}
	.words {
		margin-left: 30px;
	}
	.contact {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	.contact img {
		width: 25px;
		height: 25px;
		opacity: .7;
		transition: opacity .2s ease-in;
	}	
	.contact img:hover {
		opacity: 1;
	}
</style>