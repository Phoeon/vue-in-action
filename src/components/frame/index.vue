<template>
	<div id="frame" class="frame">
		<slot name="frame-header">
			<FrameHeader></FrameHeader>
		</slot>
		<slot name="frame-body">
			<FrameBody></FrameBody>
		</slot>
		<slot name="frame-footer">
			<footer class="frame-footer"></footer>
		</slot>
	</div>
</template>
<script>
import FrameHeader from './frame-header/index';
import FrameBody from './frame-body/index';
export default { 
	name : "frame",
	components : {FrameHeader,FrameBody}
}
</script>
<style name="scoped">
	.frame{
		position:relative;
		height:100%;
	}
</style>