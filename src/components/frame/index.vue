<template>
	<div id="frame" class="frame">
		<slot name="frame-header">
			<FrameHeader :topNavs="topNavs"></FrameHeader>
		</slot>
		<slot name="frame-body">
			<FrameBody :menuData="menuData"></FrameBody>
		</slot>
		<slot name="frame-footer">
			<footer class="frame-footer"></footer>
		</slot>
	</div>
</template>
<script>
import FrameHeader from './frame-header/index';
import FrameBody from './frame-body/index';
// import axios from 'axios';
import {topNavs,menuData} from './frame-data';

export default { 
	name : "frame",
	components : {FrameHeader,FrameBody},
	data(){
		return {topNavs,menuData};
	},
	created(){
		// axios.get('./frame.json')
	}
}
</script>
<style name="scoped" lang="less">
	@import '../../less/macro.less';
	.frame{
		position:relative;
		height:100%;
	}
</style> 