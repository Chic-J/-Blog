<template>
	<div class="middle_right">
		<form class="searchBlock">
			<fieldset>
				<legend>搜索标题</legend>
				<input type="text" name="search" class="searchTag">
				<input type="submit" class="search_submit" value="search">
		</fieldset>
		</form>
	</div>
</template>
<style>
	.searchBlock {
		width: 273px;
		margin: 0 auto;
	}
	.searchBlock fieldset {
		border: 1px solid grey;
		border-radius: 10px;
		margin: 0 auto;
	}
	.searchBlock input {
		margin-left: 10px;
		border: 0.5px solid gray;
		transition: box-shadow 0.3s ease-in;
	}
	.search_submit {
		background-color: white;
		border-radius: 3px;
		border: 0.5px solid gray;
		transition: box-shadow 0.3s ease-in;
	}
	.search_submit:hover, 	.searchBlock input:hover {
		box-shadow: 1px 1px 3px #888888;
	}
</style>