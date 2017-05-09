<template>
   <div class="content-zone">
   		<h2>{{msg}}</h2>
	   <div class="logo-wrap">
	   		
	   </div>
   </div>
</template>
<script>
	export default {
		name : "Test",
		data(){
			return {
				msg : "Hello world !",
				logo : ""
			}
		},
		created(){
			console.log(Math.random());
		},
		updated(){
			console.log(Math.random()+":")
		}
	}
</script>
<style scoped lang="less">
@import '../../less/macro.less';
.hello{
	color:red;
}
</style>