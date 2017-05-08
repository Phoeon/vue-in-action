<template>
	<div class="frame-sidebar">
		<slot name="logo-zone">
			<div class="logo-zone">logo-zone</div>
		</slot>
		<slot name="menu-zone">
			<div class="menu-zone">menu-zone</div>
		</slot>
	</div>
</template>
<script>
	export default {
		name : "FrameSidebar"
	}
</script>
<style scoped>
	.frame-sidebar{
		background-color:#243748;
		width:200px;
		position:relative;
		float:left;
		left:0;
		height:100%;
	}
</style>