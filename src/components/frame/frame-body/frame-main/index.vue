<template>
	<div class="frame-main">
		<div class="frame-content">
		<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name : "FrameMain"
	}
</script>

<style lang="less" scoped>
	.frame-main{
		overflow:hidden;
		position:relative;
		height:100%;
		.frame-content{
			position:relative;
			height:100%;
			width:100%;
			overflow:auto;
		}
	}
</style>