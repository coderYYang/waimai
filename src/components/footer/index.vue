<!--
 * @Author: yy 691335336@qq.com
 * @Date: 2022-12-16 10:22:41
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2022-12-19 18:59:56
 * @FilePath: /waimai/src/components/footer/index.vue
 * @Description: 底部导航栏
-->
<template>
	<footer class="footer">
		<router-link :to="item.path" v-for="(item, index) in router.options.routes[0].children" :key="index" custom>
			<template v-slot="{ navigate }">
				<div @click="goPages(navigate, index)" class="item" :class="{ active: currenIndex === index }">
					<van-icon :name="item.meta?.icon" />
					{{ item.meta?.title }}
				</div>
			</template>
		</router-link>
	</footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

let currenIndex = ref<number>(0)

const goPages = (navigate: any, index: number) => {
	currenIndex.value !== index && (currenIndex.value = index)
	navigate()
}
</script>

<style lang="less" scoped>
.footer {
	display: flex;
	background-color: #fff;
	border-top: 0.5px solid #eee;
	.item {
		flex: 1;
		display: flex;
		flex-flow: column;
		align-items: center;
		font-size: 12px;
		.van-icon {
			font-size: 30px;
		}
	}
	.active {
		color: #ffc400;
	}
}
</style>
