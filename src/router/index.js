import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	/* mode: "history", */
	routes: [{
			path: '/',
			redirect: 'index',
		},
		{
			//主页
			path: '/index',
			redirect: 'find',
			component: resolve => require(['../components/Index.vue'], resolve),
			meta: {
				title: '主页'
			},
			children: [{
					//我的简书组件
					path: '/jianshu',
					component: resolve => require(['../components/Jianshu.vue'], resolve),
					meta: {
						title: '我的简书'
					}
				},
				{
					
					path: '/find',
					component: resolve => require(['../components/Find.vue'], resolve),
					meta: {
						title: '发现'
					}
				},
				{
					
					path: '/attention',
					redirect: '/shuquan',
					component: resolve => require(['../components/Attention.vue'], resolve),
					meta: {
						title: '关注'
					},
					children: [
						{
							path: '/shuquan',
							
							component: resolve => require(['../components/Shuquan.vue'], resolve),
							meta: {
								title: '简书圈'
							},
						},
						{
							path: '/reading',
							component: resolve => require(['../components/Reading.vue'], resolve),
							meta: {
								title: '阅读'
							},
						}
					]
					
				},
				{
					path: '/message',
					redirect: '/pinglun',
					  component: resolve => require(['../components/Message.vue'], resolve),
					meta: {
						title: '消息'
					},
					children: [
						{
							path: '/pinglun',
							component: resolve => require(['../components/Pinglun.vue'], resolve),
							meta: {
								title: '评论'
							},
						},
						{
							path: '/jianxin',
							component: resolve => require(['../components/Jianxin.vue'], resolve),
							meta: {
								title: '简信'
							},
						}
					]
					
				},
				{
					// 个人中心组件
					path: '/ucenter',
					// redirect: 'user_infomation',
					component: resolve => require(['../components/UCenter.vue'], resolve),
					meta: {
						title: '个人中心'
					}
					
				},
			]
		},
		{
			// 注册登录
			path: '/sign',
			redirect: 'sign_in',
			component: resolve => require(['../components/Sign.vue'], resolve),
			meta: {
				title: '注册登录'
			},
			children: [
				{
					path: '/sign_in',
					component: resolve => require(['../components/SignIn.vue'], resolve),
					meta: {
						title: '登录'
					},
				},
				{
					path: '/sign_up',
					component: resolve => require(['../components/SignUp.vue'], resolve),
					meta: {
						title: '注册'
					},
				}
			]
		}
	]
})
