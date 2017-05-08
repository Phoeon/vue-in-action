<template>
<main class="frame-body">
	<slot name="frame-sidebar">
		<FrameSidebar></FrameSidebar>
	</slot>
	<slot name="frame-main">
		<FrameMain></FrameMain>
	</slot>
</main>
</template>

<script>
import FrameSidebar from './frame-sidebar/index';
import FrameMain    from './frame-main/index';
export default {
	name : "FrameBody",
	components : {FrameSidebar,FrameMain}
}
</script>

<style lang="less" scoped>
.frame-body{
	position:absolute;
	width:100%;
	top:2.2em;
	bottom:0;
	overflow:hidden;
}
</style>