<!--
 * @Author: yy 691335336@qq.com
 * @Date: 2022-12-16 16:06:15
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2022-12-16 16:09:53
 * @FilePath: /waimai/src/components/header/index.vue
 * @Description: 
-->
<template>
	<header class="header">
		<van-icon name="arrow-left" class="icon" @click="router.back()" />
		{{ title }}
	</header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
defineProps({
	title: String
})
</script>

<style lang="less" scoped>
.header {
	background-color: #fff;
	height: 40px;
	font-size: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 1px solid #d7d7d7;
	.edit {
		font-size: 16px;
		position: absolute;
		right: 15px;
		font-weight: normal;
	}
	.icon {
		position: absolute;
		left: 10px;
	}
}
</style>
