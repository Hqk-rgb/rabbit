<script setup>
</script>

<template>
	<div>
		<el-row class="mb-4">
			<el-button type="primary">Primary</el-button>
			<div class="test">test css</div>
		</el-row>
		<!-- 一级路由出口组件 -->
		<RouterView />
	</div>
</template>

<style scoped lang="scss">
.test {
	color: $priceColor;
}
</style>
