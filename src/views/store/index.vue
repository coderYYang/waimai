<!--
 * @Author: yy 691335336@qq.com
 * @Date: 2022-12-16 16:01:42
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2022-12-21 23:22:01
 * @FilePath: /waimai/src/views/store/index.vue
 * @Description: 商店
-->
<template>
	<div class="store">
		<Header title="蜜雪冰城" />
		<div class="content">
			<div class="img"></div>
			<div class="food-sort">
				<div class="name">
					{{ title }}
					<img :src="img" alt="" class="store-img" />
				</div>
				<van-tabs color="#ffc400">
					<van-tab :title="item.name" v-for="(item, index) in storeData" :key="index">
						<FoodList :index="index" :foodData="item.data" />
					</van-tab>
				</van-tabs>
			</div>
		</div>
		<van-action-bar>
			<van-action-bar-icon
				v-for="(item, index) in actionBar"
				:key="index"
				:icon="item.icon"
				:text="item.text"
				@click="handleClick(item)"
			/>
			<van-action-bar-button type="danger" text="立即购买" @click="handleClickButton" />
		</van-action-bar>
	</div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { StoreData, ActionBar } from '@/utils/type'
import Header from '@/components/header/index.vue'
import FoodList from './components/FoodList.vue'

const title = ref<string>('蜜雪冰城')
const img = ref<string>('https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440')
const storeData: Array<StoreData> = reactive([
	{
		name: '点菜',
		data: {
			content: '点菜',
			items: [
				{
					text: '热销套餐',
					children: [
						{
							pic: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.cfcy168.com%2FUploadFiles%2F2020%2F2%2F15904074889874037.jpg&refer=http%3A%2F%2Fwww.cfcy168.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645421933&t=66b58fbba9dce6f6b397e38820de24dc',
							title: '隆江猪脚饭',
							num: 0,
							price: 25.0,
							id: 0,
							add: true
						},
						{
							pic: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.cfcy168.com%2FUploadFiles%2F2020%2F2%2F15904074889874037.jpg&refer=http%3A%2F%2Fwww.cfcy168.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645421933&t=66b58fbba9dce6f6b397e38820de24dc',
							title: '隆江猪脚饭',
							num: 0,
							price: 25.0,
							id: 1,
							add: true
						}
					]
				},
				{
					text: '超级折扣',
					children: [
						{
							pic: 'https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440',
							title: '无骨酸菜鱼+肥牛双拼',
							num: 0,
							price: 25.0,
							id: 5,
							add: true
						},
						{
							pic: 'https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440',
							title: '香辣水煮鱼+肥牛双拼',
							num: 0,
							price: 25.0,
							id: 6,
							add: true
						}
					]
				}
			]
		}
	},
	{
		name: '评价',
		data: {
			content: '评价'
		}
	},
	{
		name: '商家',
		data: {
			content: '商家'
		}
	}
])

// 底部操作栏
const actionBar: Array<ActionBar> = reactive([
	{ icon: 'chat-o', text: '客服' },
	{ icon: 'shop-o', text: '店铺' }
])

const handleClick = (item: ActionBar) => {
	console.log('handleClickIcon', item)
}

const handleClickButton = () => {}
</script>

<style lang="less" scoped>
.store {
	height: 100%;
	display: flex;
	flex-flow: column;
	.content {
		flex: 1;
		overflow-y: auto;
		.img {
			// background-image: linear-gradient(#ffc400, #fff);
			background: url('../../assets/images/mxbc.png') no-repeat center/cover;
			width: 100%;
			height: 150px;
		}
		.food-sort {
			height: 500px;
			background-color: #fff;
			margin-top: -30px;
			border-radius: 20px 20px 0 0;

			.sort {
				margin-top: 10px;
			}
			.name {
				display: flex;
				padding: 20px;
				justify-content: space-between;
				.store-img {
					width: 80px;
					height: 80px;
					border-radius: 10px;
					margin-top: -30px;
				}
			}
		}
	}
}
</style>
