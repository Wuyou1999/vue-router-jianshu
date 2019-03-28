<template>
	<div class="container">
		<div class="left">
			<div class="item" v-for="(article, index) in articles" :key="index">
				<div class="user-title">
					{{article.user}}<br />
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

	</div>
</template>

<script>
	export default {
		name: 'Shuquan',
		data() {
			return {
				articles: [{
						"user": "忆曦雪 喜欢了这篇文章·1小时前",
						"title": "堪称神器的3款在线工具，你一定用得上！",
						"url": "https://www.jianshu.com/p/e83e7999346b",
						"image": "https://upload-images.jianshu.io/upload_images/11438996-56b25f32c9307b4b?imageMogr2/auto-orient/strip%7CimageView2/2/w/640/format/webp",
						"content": "浅行于红尘烟雨中，只因一个不经意的眼神，便刻骨铭心，一段美丽的相遇。 漫步于人海茫茫中，只因一抹清如水的微笑，便倾世倾心，一段浪漫的邂逅。"
					},
					{
						"user": "王德旺 喜欢了这篇文章·1小时前",
						"title": "经典面试题：从 URL 输入到页面展现到底发生什么？",
						"url": "https://www.jianshu.com/p/45ba3e0d0c7e",
						"image": "https://upload-images.jianshu.io/upload_images/3973862-d90954249a6f6ccd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp",
						"content": "浅行于红尘烟雨中，只因一个不经意的眼神，便刻骨铭心，一段美丽的相遇。 漫步于人海茫茫中，只因一抹清如水的微笑，便倾世倾心，一段浪漫的邂逅。"
					},
					{
						"user": "李锦泉 喜欢了这篇文章·1小时前",
						"title": "如何免翻墙使用谷歌搜索和Chrome应用商店",
						"url": "https://www.jianshu.com/p/484f8e6c88f6",
						"image": "https://upload-images.jianshu.io/upload_images/858154-015a4b083685a3d1.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/800/format/webp",
						"content": "浅行于红尘烟雨中，只因一个不经意的眼神，便刻骨铭心，一段美丽的相遇。 漫步于人海茫茫中，只因一抹清如水的微笑，便倾世倾心，一段浪漫的邂逅。"
					},
					{
						"user": "吴佑 喜欢了这篇文章·1小时前",
						"title": "四款前所未有好用的黑科技APP，绝对的良心实用，赶紧告诉家人",
						"url": "https://www.jianshu.com/p/2aec84d269fe",
						"image": "https://upload-images.jianshu.io/upload_images/16042993-168b2cb17fd7ec0c?imageMogr2/auto-orient/strip%7CimageView2/2/w/640/format/webp",
						"content": "浅行于红尘烟雨中，只因一个不经意的眼神，便刻骨铭心，一段美丽的相遇。 漫步于人海茫茫中，只因一抹清如水的微笑，便倾世倾心，一段浪漫的邂逅。"
					},
					{
						"user": "忆曦雪 喜欢了这篇文章·1小时前",
						"title": "坚持学英语的方法有哪些",
						"url": "https://www.jianshu.com/p/0a6a61b0933c",
						"image": "https://upload-images.jianshu.io/upload_images/3525704-c7293758fc59e56b.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/960/format/webp",
						"content": "浅行于红尘烟雨中，只因一个不经意的眼神，便刻骨铭心，一段美丽的相遇。 漫步于人海茫茫中，只因一抹清如水的微笑，便倾世倾心，一段浪漫的邂逅。"
					}
				]
			};
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
		display: flex;
		flex-direction: column;
		background-color: #fff;
		margin-top: 20px;
	}

	.item {
		display: flex;
		height: 100px;
		margin-bottom: 20px;
		width: 620px;
	}

	/* .item-title {
		

	} */
	.user-title {
		flex: 1 1 70%;
		color: darkgrey;
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
		font-weight: bold;
		text-decoration: none;
	}
	
	a:hover {
		text-decoration: underline;
	}
	
</style>
