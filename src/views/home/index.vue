<!--
 * @Author: yy 691335336@qq.com
 * @Date: 2022-12-16 10:10:12
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2022-12-22 10:15:00
 * @FilePath: /waimai/src/views/home/index.vue
 * @Description: 首页
-->
<template>
	<div class="home pages">
		<header class="header">
			<div class="text">外卖</div>
			<div class="location">
				<van-icon name="location-o" />
				<span>九江市</span>
				<van-icon name="arrow" />
			</div>
		</header>
		<main class="main">
			<div class="main-bg">
				<div class="search">
					<input type="text" />
					<div class="search-text">搜索</div>
				</div>
				<div class="sort">
					<div class="big-sort">
						<div class="big-sort-item" v-for="(item, index) in bigSort" :key="index">
							<svg class="icon" aria-hidden="true">
								<use :xlink:href="`#${item.icon}`"></use>
							</svg>
							{{ item.name }}
						</div>
					</div>
					<div class="small-sort">
						<div class="small-sort-item" v-for="(item, index) in smallSort" :key="index">
							<svg class="icon" aria-hidden="true">
								<use :xlink:href="`#${item.icon}`"></use>
							</svg>
							{{ item.name }}
						</div>
					</div>
				</div>
			</div>
			<van-tabs v-model:active="active" color="#ffc400">
				<van-tab :title="item.tab" v-for="(item, index) in cententNavList" :key="index">
					<NavList :navList="item.data" />
				</van-tab>
			</van-tabs>
		</main>
	</div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import NavList from './components/NavList.vue'
import type { CententNavList } from '@/utils/type'

let active = ref<number>(0)

const bigSort = [
	{
		name: '美食',
		icon: 'icon-meishi'
	},
	{
		name: '甜点饮品',
		icon: 'icon-tiandian'
	},
	{
		name: '超市便利',
		icon: 'icon-chaoshigouwu'
	},
	{
		name: '生鲜果蔬',
		icon: 'icon-shengxian-ganju'
	},
	{
		name: '买药',
		icon: 'icon-zhichiyiyuanyaodian'
	}
]
const smallSort = [
	{
		name: '午餐',
		icon: 'icon-wucan'
	},
	{
		name: '买酒',
		icon: 'icon-jiu'
	},
	{
		name: '新鲜水果',
		icon: 'icon-xinxianguoshu_xinxianshuiguopingguo'
	},
	{
		name: '汉堡披萨',
		icon: 'icon-hanbaopisa'
	},
	{
		name: '休闲饮品',
		icon: 'icon-xiuxianyinpin'
	},
	{
		name: '夜宵',
		icon: 'icon-yexiao'
	},
	{
		name: '吐司',
		icon: 'icon-tusi'
	},
	{
		name: '跑腿',
		icon: 'icon-paotuiAPP'
	},
	{
		name: '美人佳丽',
		icon: 'icon-kouhong'
	},
	{
		name: '全部分类',
		icon: 'icon-fenlei'
	}
]
const cententNavList: Array<CententNavList> = reactive([
	{
		tab: '天天神券',
		data: [
			{
				pic: 'http://p0.meituan.net/scpdeal/9543e34f59c343282a8f83926f72f585173498.jpg',
				title: '蜜雪冰城',
				sales: '2888',
				price: '20',
				label: ['门店上新', '很好喝']
			},
			{
				pic: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.cfcy168.com%2FUploadFiles%2F2020%2F2%2F15904074889874037.jpg&refer=http%3A%2F%2Fwww.cfcy168.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645421933&t=66b58fbba9dce6f6b397e38820de24dc',
				title: '隆江猪脚饭',
				sales: '2888',
				price: '20',
				label: ['门店上新', '很下饭']
			},
			{
				pic: 'https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440',
				title: '酸菜鱼',
				sales: '2888',
				price: '20',
				label: ['门店上新', '很下饭']
			},
			{
				pic: 'https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440',
				title: '酸菜鱼',
				sales: '2888',
				price: '20',
				label: ['门店上新', '很下饭']
			}
		]
	},
	{
		tab: '减配送费',
		data: [
			{
				pic: 'https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440',
				title: '酸菜鱼',
				sales: '2888',
				price: '20',
				label: ['门店上新', '很下饭']
			}
		]
	},
	{
		tab: '点评高分',
		data: [
			{
				pic: 'https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440',
				title: '酸菜鱼',
				sales: '2888',
				price: '20',
				label: ['门店上新', '很下饭']
			},
			{
				pic: 'https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440',
				title: '酸菜鱼',
				sales: '2888',
				price: '20',
				label: ['门店上新', '很下饭']
			}
		]
	},
	{
		tab: '会员满减',
		data: [
			{
				pic: 'https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440',
				title: '酸菜鱼',
				sales: '2888',
				price: '20',
				label: ['门店上新', '很下饭']
			},
			{
				pic: 'https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440',
				title: '酸菜鱼',
				sales: '2888',
				price: '20',
				label: ['门店上新', '很下饭']
			}
		]
	}
])
</script>

<style lang="less" scoped>
.header {
	background-image: linear-gradient(#ffc400, #fff);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 20px 40px;
	.text {
		font-size: 20px;
		font-weight: 600;
	}
	.location {
		font-size: 14px;
		span {
			margin: 0 5px;
		}
	}
}

.main {
	margin-top: -30px;
	font-size: 12px;

	.main-bg {
		background-image: linear-gradient(#fff, #f5f5f5);
		padding: 10px 20px 0;
		border-radius: 30px 30px 0 0;
		.search {
			position: relative;
			display: flex;
			align-items: center;
			input {
				width: 100%;
				height: 30px;
				border: 1px solid #ffc400;
				border-radius: 20px;
				padding-left: 10px;
				box-sizing: border-box;
				font-size: 14px;
			}
			.search-text {
				position: absolute;
				top: 0;
				right: -6px;
				background-color: #ffc400;
				border-radius: 16px;
				width: 50px;
				height: 30px;
				line-height: 30px;
				font-size: 14px;
				text-align: center;
			}
		}
		.sort {
			padding: 20px 0;
			.big-sort {
				display: flex;
				&-item {
					flex: 1;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-flow: column;
					.icon {
						width: 50px;
						height: 50px;
						margin-bottom: 5px;
					}
				}
			}
			.small-sort {
				display: flex;
				flex-wrap: wrap;
				margin-top: 20px;
				&-item {
					display: flex;
					justify-content: center;
					align-items: center;
					flex-flow: column;
					width: 20%;
					.icon {
						width: 30px;
						height: 30px;
						margin: 10px;
					}
				}
			}
		}
	}

	.van-tabs {
		padding: 0 20px 10px;
	}
}

/deep/ .van-tabs__wrap {
	border-radius: 10px;
}
</style>
