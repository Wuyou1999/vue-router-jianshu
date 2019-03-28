<template>
	<div class="container">
		<div class="left">
			<router-link to=""><img src="../assets/index1.jpg" class="index1" /></router-link>

			<div class="item" v-for="(article, index) in articles" :key="index">
				<div class="title-content">
					<a :href="article.url" class="item-title">
						{{article.title}}
					</a><br />
					<div calss="content">
						{{article.content}}
					</div>
				</div>

				<div class="item-thumbnail">
					<img :src="article.image">
				</div>

			</div>
		</div>
		<div class="right">
			<router-link to=""><img src="../assets/btn1.png" class="btn" /></router-link>
			<router-link to=""><img src="../assets/btn2.png" class="btn" /></router-link>
			<router-link to=""><img src="../assets/btn3.png" class="btn" /></router-link>
			<router-link to=""><img src="../assets/btn4.png" class="btn" /></router-link>
			<router-link to=""><img src="../assets/btn5.png" class="btn" /></router-link>
			<router-link to=""><img src="../assets/btn6.png" class="btn" /></router-link>

			<router-link to=""><img src="../assets/dljianshu.png" class="btn2" /></router-link>
			<router-link to=""><img src="../assets/guanggao.jpg" class="guanggao" /></router-link>

			<img src="../assets/command.jpg" class="command" />
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Find',
		data() {
			return {
				articles: [{
						"title": "堪称神器的3款在线工具，你一定用得上！",
						"url": "https://www.jianshu.com/p/e83e7999346b",
						"image": "https://upload-images.jianshu.io/upload_images/11438996-56b25f32c9307b4b?imageMogr2/auto-orient/strip%7CimageView2/2/w/640/format/webp",
						"content": "浅行于红尘烟雨中，只因一个不经意的眼神，便刻骨铭心，一段美丽的相遇。 漫步于人海茫茫中，只因一抹清如水的微笑，便倾世倾心，一段浪漫的邂逅。"
					},
					{
						"title": "经典面试题：从 URL 输入到页面展现到底发生什么？",
						"url": "https://www.jianshu.com/p/45ba3e0d0c7e",
						"image": "https://upload-images.jianshu.io/upload_images/3973862-d90954249a6f6ccd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp",
						"content": "浅行于红尘烟雨中，只因一个不经意的眼神，便刻骨铭心，一段美丽的相遇。 漫步于人海茫茫中，只因一抹清如水的微笑，便倾世倾心，一段浪漫的邂逅。"
					},
					{
						"title": "如何免翻墙使用谷歌搜索和Chrome应用商店",
						"url": "https://www.jianshu.com/p/484f8e6c88f6",
						"image": "https://upload-images.jianshu.io/upload_images/858154-015a4b083685a3d1.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/800/format/webp",
						"content": "浅行于红尘烟雨中，只因一个不经意的眼神，便刻骨铭心，一段美丽的相遇。 漫步于人海茫茫中，只因一抹清如水的微笑，便倾世倾心，一段浪漫的邂逅。"
					},
					{
						"title": "四款前所未有好用的黑科技APP，绝对的良心实用，赶紧告诉家人",
						"url": "https://www.jianshu.com/p/2aec84d269fe",
						"image": "https://upload-images.jianshu.io/upload_images/16042993-168b2cb17fd7ec0c?imageMogr2/auto-orient/strip%7CimageView2/2/w/640/format/webp",
						"content": "浅行于红尘烟雨中，只因一个不经意的眼神，便刻骨铭心，一段美丽的相遇。 漫步于人海茫茫中，只因一抹清如水的微笑，便倾世倾心，一段浪漫的邂逅。"
					},
					{
						"title": "坚持学英语的方法有哪些",
						"url": "https://www.jianshu.com/p/0a6a61b0933c",
						"image": "https://upload-images.jianshu.io/upload_images/3525704-c7293758fc59e56b.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/960/format/webp",
						"content": "浅行于红尘烟雨中，只因一个不经意的眼神，便刻骨铭心，一段美丽的相遇。 漫步于人海茫茫中，只因一抹清如水的微笑，便倾世倾心，一段浪漫的邂逅。"
					},
					{
						"title": "花开终有时，花落亦无声。【原创】",
						"url": "https://www.jianshu.com/p/6a8b3c535bf0",
						"image": "https://upload-images.jianshu.io/upload_images/15679109-35b05a785586f9e7.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
						"content": "浅行于红尘烟雨中，只因一个不经意的眼神，便刻骨铭心，一段美丽的相遇。 漫步于人海茫茫中，只因一抹清如水的微笑，便倾世倾心，一段浪漫的邂逅。"
					},
					{
						"title": "2019年的第一部十佳，豆瓣8.9分给低了",
						"url": "https://www.jianshu.com/p/0a6a61b0933c",
						"image": "https://upload-images.jianshu.io/upload_images/717788-e0da3b2bc96522bb?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
						"content": "浅行于红尘烟雨中，只因一个不经意的眼神，便刻骨铭心，一段美丽的相遇。 漫步于人海茫茫中，只因一抹清如水的微笑，便倾世倾心，一段浪漫的邂逅。"
					}
				]
			};
		},
		methods: {

		}
	};
</script>

<style scoped>
	.container {
		display: flex;
		width: 95%;
		margin: 0 auto;

	}

	.left {
		flex: 1 1 60%;
		display: flex;
		flex-direction: column;
		background-color: #fff;
		margin-top: 20px;
	}

	.index1 {
		margin-bottom: 20px;
		border-radius: 8px;
	}

	.item {
		display: flex;
		height: 100px;
		margin-bottom: 10px;
		width: 620px;
	}

	.item-title {
		font-weight: bold;
	}

	.title-content {
		flex: 1 1 70%;
		color: rgb(150, 150, 152);
		font-size: 15px;
	}

	.item-thumbnail {
		flex: 1 1 30%
	}

	.item-thumbnail img {
		width: 100%;
		height: 100%;
	}

	a {
		color: black;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	.btn {
		padding-top: 15px;
		width: 315px;
		height: 73px;

	}

	.btn2 {
		width: 340px;
		height: 90px;
	}

	.right {
		flex: 1 1 40%;
		text-align: left;
		background-color: #fff;
		margin-left: 20px;
		margin-bottom: 8px;
	}

	.guanggao {
		padding-left: 10px;
		width: 305px;

	}

	.command {
		padding-left: 10px;
	}
</style>
