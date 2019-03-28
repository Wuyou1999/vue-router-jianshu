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
		name: 'Reading',
		data() {
			return {
				articles: [{
						"user": "忆曦雪 喜欢了这篇文章·1小时前",
						"title": "纪念你到来的第一周！",
						"url": "https://www.jianshu.com/p/6ae65c85dc46",
						"image": "https://upload-images.jianshu.io/upload_images/8380508-8c7f8986c950f273.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
						"content": "浅行于红尘烟雨中，只因一个不经意的眼神，便刻骨铭心，一段美丽的相遇。 漫步于人海茫茫中，只因一抹清如水的微笑，便倾世倾心，一段浪漫的邂逅。"
					},
					{
						"user": "王德旺 喜欢了这篇文章·1小时前",
						"title": "《都挺好》苏家俩媳妇比美",
						"url": "https://www.jianshu.com/p/59958166fff6",
						"image": "https://upload-images.jianshu.io/upload_images/7722639-c402defcc63e31ca.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
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
