<template>
	<main class="index">
		<div class="content">
			<router-view />
		</div>
		<Footer />
	</main>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import Footer from '@/components/footer/index.vue'
</script>

<style lang="less" scoped>
.index {
	display: flex;
	flex-flow: column;
	height: 100%;
	.content {
		flex: 1;
		overflow-y: auto;
	}
}
</style>
