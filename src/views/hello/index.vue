<template>
   <div class="content-zone">
   		<h2>{{msg}}</h2>
	   <div class="logo-wrap">
	   		
	   </div>
   </div>
</template>
<script>
	export default {
		name : "Hello",
		data(){
			return {
				msg : "Hello world !",
				logo : ""
			}
		}
	}
</script>
<style scoped lang="less">
@import '../../less/macro.less';
.hello{
	color:red;
}
</style>