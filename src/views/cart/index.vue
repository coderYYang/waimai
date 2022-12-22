<!--
 * @Author: yy 691335336@qq.com
 * @Date: 2022-12-16 10:10:10
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2022-12-20 11:33:20
 * @FilePath: /waimai/src/views/cart/index.vue
 * @Description: 购物车
-->
<template>
	<div class="cart">购物车</div>
	<van-button type="primary" size="mini" class="throttle" @click="handleClick">123</van-button>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
const handleClick = () => {
	console.log('这是防抖按钮')
}
</script>

<style lang="less" scoped></style>
