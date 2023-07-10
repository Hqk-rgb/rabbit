<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'

//触发获取导航列表的action
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'
const categoryStore = useCategoryStore()
onMounted(() => categoryStore.getCategoryList())
</script>

<template>
	<div>
		<LayoutFixed />
		<LayoutNav />
		<LayoutHeader />
		<!-- 添加key 破坏复用机制，强制销毁重建 -->
		<!-- <RouterView :key="$route.fullPath" /> -->
		<Router-view />
		<LayoutFooter />
	</div>
</template>


<style lang="scss" scoped>
</style>