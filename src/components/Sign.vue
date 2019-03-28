<template>
	<div class="all">
		<div class="header">
			<router-link to="/"><img src="../assets/logo_1.png" class="logo" /></router-link>
		</div>
		<div class="container"></div>
		<div class="sign-box">
			<div class="sign-box-s">
				<router-link to="/sign_in" >登录</router-link>
				<span class="dian">&nbsp;&nbsp;·&nbsp;&nbsp;</span>
				<router-link to="/sign_up" >注册</router-link>
			</div>
			<router-view />
		</div>

	</div>
</template>

<script>
	export default {
		name: 'SignIn',
		data() {
			return {};
		}
	};
</script>

<style scoped>
	.all {
		background-color: rgb(241, 241, 241);
	}

	.header {
		padding-top: 40px;
		padding-left: 10px;
		width: 100px;
		height: 85px;
		background-color: rgb(241, 241, 241);
	}

	.logo {
		width: 110px;
		height: 45px;
		margin-left: 100px;
	}

	.container {
		width: 90%;
		height: 800px;
		background-size: 100%;
	}

	.sign-box {
		position: absolute;
		bottom: 150px;
		right: 490px;
		width: 400px;
		height: 400px;
		background-color: #fff;
		/* margin: 0 auto; */
		/* background-color: #fff; */
	}

	a {
		font-size: 16pt;
		color: #aaa;


	}

	a:hover {
		color: rgb(234, 111, 90);
		
	}

	.sign-box-s {
		width: 30%;
		margin: 0 auto;
		padding-top: 50px;
	}
</style>
