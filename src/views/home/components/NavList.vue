<!--
 * @Author: yy 691335336@qq.com
 * @Date: 2022-12-16 14:02:43
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2022-12-22 10:18:30
 * @FilePath: /waimai/src/views/home/components/NavList.vue
 * @Description: NavList.vue
-->
<template>
	<NavListItem v-for="(item, index) in navList" :key="index" :itemContent="item" />
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import NavListItem from './NavListItem.vue'
import type { Children } from '@/utils/type'
defineProps<{
	navList: Children[]
}>()

// console.log('123', props)
</script>

<style scoped></style>
