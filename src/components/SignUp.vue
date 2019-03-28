<template>
	<div>
		<div>
			<div class="container">
				<!-- <img src="../assets/user-s.png" /> -->
				<div class="card">
					<input type="text" placeholder="你的昵称" class="input-box" />
					<!-- <img src="../assets/mima.png" /> -->
					<input type="text" placeholder="手机号" class="input-box" />
					<!-- <input type="checkbox" class="reme">记住我</input> -->
					<input type="text" placeholder="设置密码" class="input-box" />

				</div>
				<button class="Sign_up">注册</button>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		name: 'SignUp',
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

	.input-box {
		width: 280px;
		height: 40px;
		background-color: rgb(248, 248, 248);
		border-radius: 5px;
		background-color: rgb(248, 248, 248);
		
	}

	.card {
		border: none;
		margin-left: 40px;
		margin-top: 80px;
		margin-bottom: 20px;
		align-items: center;
	}

	.Sign_up {
		width: 200px;
		height: 40px;
		border-radius: 10px;
		background-color: rgb(66, 192, 46);
		color: #fff;
		outline: none;
		border: 2px solid rgb(66, 192, 46);
		margin-left: 40px;
	}

	.Sign_up:hover {
		background-color: rgb(61, 185, 34);
	}
</style>
