<template>
	<div>
		<div class="container">
			<div class="left">
				<router-link to="/shuquan">简友圈</router-link>
				<router-link to="/reading">读书</router-link>
				<router-link to="">程序员</router-link>
				<router-link to="">IT互联网</router-link>
			</div>
			<div class="right">
				<router-view />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Attention',
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
		flex: 1 1 10%;
		display: flex;
		flex-direction: column;
		background-color: #fff;
		margin-top: 20px;
	}

	a {
		margin-bottom: 30px;
	}


	.right {
		flex: 1 1 90%;
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

	
</style>

