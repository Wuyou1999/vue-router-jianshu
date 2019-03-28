<template>
	<div>
		<div class="container">
			<div class="card">
				<!-- <img src="../assets/user-s.png" /> -->
				<input type="text" placeholder="手机号或邮箱" class="input-box" />
				<!-- <img src="../assets/mima.png" /> -->
				<input type="text" placeholder="密码" class="input-box" />
			</div>
			<div class="checkcard">
				<input type="checkbox" class="reme" /><span>记住我</span>
				</div>
			<button class="Sign_in">登录</button>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'SignIn',
		data() {
			return {

			};
		}
	};
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		width: 300px;
		height: 500px;
	}

	.card img {
		width: 30px;
		height: 30px;
	}

	.input-box {
		width: 280px;
		height: 40px;
		background-color: rgb(248, 248, 248);
		border-radius: 5px;
		
	}

	.card {
		display: flex;
		border: none;
		margin-left: 40px;
		margin-top: 80px;
		margin-bottom: 23px;
		align-items: center;
	}

	.reme {
		width: 50px;
		float: left;
	}

	.Sign_in {
		width: 200px;
		height: 40px;
		border-radius: 10px;
		background-color: rgb(49, 148, 208);
		color: #fff;
		outline: none;
		border: 2px solid rgb(49, 148, 208);
		margin-left: 40px;
		margin-top: 40px;
	}

	.Sign_in:hover {
		background-color: rgb(24, 124, 183);
	}

	.checkcard {
		display: flex;
		align-items: center;
	}
</style>
