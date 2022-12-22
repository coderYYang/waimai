<!--
 * @Author: yy 691335336@qq.com
 * @Date: 2022-12-16 17:13:50
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2022-12-22 11:03:02
 * @FilePath: /waimai/src/views/store/components/FoodListItem.vue
 * @Description: FoldListItem
-->
<template>
	<div class="item">
		<div class="right">
			<img :src="subItem.pic" />
			<div class="text">
				<div class="title">{{ subItem.title }}</div>
				<div class="price">¥{{ subItem.price }}</div>
				<div class="operate">
					<van-stepper v-if="subItem.num && subItem.num > 0" v-model="subItem.num" />
					<!-- <van-icon @click="handleChangeNum(subItem)" name="add-o" /> -->
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { Children } from '@/utils/type/index'

defineProps<{
	subItem: Children
}>()

// const handleChangeNum = (subItem: Children) => {
// 	if (subItem.num && subItem.num <= 0) {
// 		subItem.num = 0
// 	}
// 	if (subItem.num) {
// 		ref(subItem.num++)
// 	}
// 	console.log('subItem', subItem)
// }
</script>

<style lang="less" scoped>
.item {
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;

	.right {
		display: flex;
		align-items: center;
		flex: 1;
		img {
			margin-left: 10px;
			width: 60px;
			height: 60px;
			margin-right: 10px;
			border-radius: 10px;
		}
		.text {
			display: flex;
			flex-flow: column;
			justify-content: space-between;
			height: 100%;
			position: relative;
			flex: 1;
			.title {
				font-size: 16px;
				// text-overflow: ellipsis;
				// overflow: hidden;
				// white-space: nowrap;
			}
			.price {
				font-size: 16px;
				font-weight: 600;
			}
			.operate {
				display: flex;
				justify-content: space-between;
				.van-icon {
					color: red;
					font-size: 20px;
					position: absolute;
					right: 4px;
					bottom: 4px;
				}
			}
		}
	}
}
</style>
