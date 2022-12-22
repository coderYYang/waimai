<!--
 * @Author: yy 691335336@qq.com
 * @Date: 2022-12-16 14:10:11
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2022-12-16 17:03:22
 * @FilePath: /waimai/src/views/home/components/NavListItem.vue
 * @Description: 
-->
<template>
	<div class="item" @click="goPages">
		<img :src="itemContent.pic" :alt="itemContent.title" />
		<div class="right">
			<div class="title">{{ itemContent.title }}</div>
			<div class="sales">{{ itemContent.sales }}</div>
			<div class="price">{{ itemContent.price }}</div>
			<div class="label">
				<div v-for="(item, index) in itemContent.label" :key="index">{{ item }}</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Children } from '@/utils/type/index'
const router = useRouter()
defineProps<{
	itemContent: Children
}>()

const goPages = () => router.push('/store')
</script>

<style lang="less" scoped>
.item {
	background-color: #fff;
	border-radius: 10px;
	display: flex;
	padding: 10px;
	&:not(:first-child) {
		margin-top: 10px;
	}
	img {
		width: 120px;
		height: 120px;
		border-radius: 10px;
		margin-right: 20px;
	}
	.right {
		display: flex;
		flex-flow: column;
		justify-content: space-between;
		.title {
			font-size: 18px;
		}
		.label {
			display: flex;
			div {
				background-color: #ffc400;
				padding: 2px 5px;
				border-radius: 5px;
				&:not(:first-child) {
					margin-left: 5px;
				}
			}
		}
	}
}
</style>
