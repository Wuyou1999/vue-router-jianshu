<template>
	<div>
		<div class="container">
			<div class="left">
				<router-link to="/pinglun"><img src="../assets/pinglun.jpg" class="logo">评论</router-link>
				<router-link to="/jianxin"><img src="../assets/jianxin.jpg" class="logo">简信</router-link>
				<router-link to=""><img src="../assets/tougao.jpg" class="logo">投稿请求</router-link>
				<router-link to=""><img src="../assets/xihuan.jpg" class="logo">喜欢和赞</router-link>
			</div>
			<div class="right">
				<router-view />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Message',
		data() {
			return {

			};
		}
	};
</script>

<style scoped>
	.container {
		display: flex;
		width: 90%;
		margin: 0 auto;

	}

	.left {
		flex: 1 1 30%;
		display: flex;
		flex-direction: column;
		background-color: #fff;
		margin-top: 20px;
	}

	a {
		margin-bottom: 30px;
	}


	.right {
		flex: 1 1 70%;
		text-align: left;
		background-color: #fff;
		margin-left: 150px;
		padding-bottom: 20px;
	}

	a {
		color: black;
		height: 35px;

	}

	a:hover {
		background-color: rgb(240, 240, 240);

	}

	.logo {
		width: 60px;
		height: 50px;
	}
</style>
