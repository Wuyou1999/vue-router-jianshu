<template>
	<div>
		<!-- 顶部导航栏 -->
		<div class="header">
			<div class="nav">
				<div class="header-left">
					<div class="header-logo">
						<router-link to="/">
							<img src="../assets/logo.png" class="logo" />
						</router-link>
					</div>

					<div class="header-character" id="mouse-hover">
						<router-link to="/find">发现</router-link>
					</div>
					<div class="header-character" id="mouse-hover">
						<router-link to="/attention">关注</router-link>
					</div>
					<div class="header-character" id="mouse-hover">
						<router-link to="/message">消息</router-link>
					</div>
					<div class="input-div">
						<input type="text" placeholder="搜索" class="input-box" />
					</div>
				</div>

				<div class="header-right">
					<div class="text-set"><a>Aa</a></div>
					<div class="center">
						<div class="center-logo">
							<router-link to="/center"><img src="../assets/avatar.png" /></router-link>
						</div>



						<div class="header-character-hover" id="mouse-hover">
							<router-link to="/ucenter">我的主页</router-link>
						</div>
						<div class="header-character-hover" id="mouse-hover">
							<router-link to="/sign">退出</router-link>
						</div>
					</div>
					<div class="writing">
						<button class="writingbut">写文章</button>
					</div>
				</div>
			</div>
		</div>
		<hr>
		<div class="content">
			<router-view />
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Index',
		data() {
			return {};
		}
	};
</script>

<style>
	a {
		color: darkslategrey;
		font-size: 12pt;
		text-decoration: none;
	}

	.header {
		width: 100%;
		height: 65px;
		background-color: #fff;
		display: flex;
		align-items: center;
		/* margin-top: -8px; */
		/* border: 1px solid black; */
	}

	.nav {
		width: 85%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0 auto;
		/* border: 1px solid red; */
	}

	.header-left {
		width: 70%;
		height: 100%;
		display: flex;
		/* border: 2px solid blue; */
	}

	.header-logo {
		height: 100%;
		width: 25%;
		/* border: 1px solid #42B983; */
	}

	.logo {
		margin-left: 30%;
	}

	.header-character {
		height: 100%;
		width: 60px;
		display: flex;
		justify-content: center;
		align-items: center;
		/* border: 1px solid black; */
	}

	.header-character a {
		color: darkslategrey;
		font-size: 12pt;
		text-decoration: none;
	}

	#mouse-hover:hover {
		/* 鼠标悬浮，div背景变化 */
		background: #f5f5f5;
	}

	.input-div {
		height: 100%;
		width: 30%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 20px;
		/* border: 2px solid #AAAAAA; */
	}

	.input-box {
		height: 40%;
		width: 80%;
		border-radius: 20px;
		background: #f5f5f5;
		border: none;
		outline: none;
		/* 点击边框去掉蓝色边框 */
		padding-left: 15px;
	}

	.input-div {
		color: darkslategrey;
		/*  */
		font-size: 10pt;
		text-decoration: none;
	}

	.header-right {
		height: 100%;
		width: 20%;
		display: flex;
		align-items: center;
		/* border: 1px solid yellow; */
	}

	.text-set a {
		color: #aaaaa;

	}

	.center {
		/* margin-top: 170px; */
		margin-top: 30px;
		margin-left: 5px;
		/* border: 1px solid #42B983; */
		margin-left: 20px;
	}

	.center-logo {
		height: 60px;
		/* margin-top: 25px; */
		margin-top: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		/* border: 1px solid aqua; */
	}

	.center-logo img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}

	.writing {
		height: 40px;
		width: 80px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 20px;
		background: #ec6149;
		border-radius: 20px;
		outline: none;
	}

	.writingbut {
		height: 40px;
		width: 80px;
		background-color: rgb(234, 111, 90);
		border-radius: 20px;
		border: rgb(234, 111, 90) 2px solid;
		color: white;
	}

	.writingbut:hover {
		background-color: rgb(236, 97, 73);
	}

	.header-character-hover {
		/* display: flex;
	justify-content: center; */
		visibility: hidden;
	}

	.center:hover>.header-character-hover {
		visibility: visible;
	}

	.header-character-hover a {
		color: darkslategrey;
		font-size: 12pt;
		text-decoration: none;
	}

	.header-logo img {
		width: 60%;
		height: 100%;
	}

	.content {
		width: 80%;
		margin: 0 auto;
		margin-top: 40px;
		height: 600px;
		/* border: 2px solid #0000FF; */
	}
</style>
