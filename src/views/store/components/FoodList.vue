<!--
 * @Author: yy 691335336@qq.com
 * @Date: 2022-12-16 16:22:16
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2022-12-16 20:56:34
 * @FilePath: /waimai/src/views/store/components/FoodList.vue
 * @Description: FoodList.vue
-->
<template>
	<div class="food-list" v-if="index === 0">
		<van-tree-select v-model:main-active-index="activeIndex" height="88vw" :items="items" @click-nav="clickNav">
			<template #content>
				<div class="item-bg" v-for="(item, i) in subItem" :key="i">
					<FoodListItem :subItem="item" />
				</div>
			</template>
		</van-tree-select>
	</div>
	<div v-else>{{ foodData.content }}</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import FoodListItem from './FoodListItem.vue'
import type { Data, Item } from '@/utils/type/index'

const props = defineProps<{
	index: Number
	foodData: Data
}>()

const activeIndex = ref<number>(0)
const items: any = ref([])
let subItem: any = ref([])
const initData = () => {
	items.value = []
	props.foodData?.items?.forEach((item: Item, index) => {
		items.value.push({ text: item.text })
		activeIndex.value === index && (subItem.value = item.children)
	})
}

const clickNav = (i: number) => {
	activeIndex.value = i
	initData()
}

onMounted(() => {
	initData()
})
</script>

<style lang="less" scoped>
.food-list {
	margin-top: 20px;
	.item-bg {
		padding: 10px;
	}
}
/deep/ .van-tree-select__item--active {
	color: #ffc400;
}
/deep/ .van-sidebar-item--select::before {
	background-color: #ffc400;
}
</style>
