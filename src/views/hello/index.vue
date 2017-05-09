<template>
   <div class="content-zone">
   		<h2>{{msg}}</h2>
   </div>
</template>
<script>
	export default {
		name : "Hello",
		data(){
			return {
				msg : "",
				logo : ""
			}
		},
		created(){
			console.log(Math.random());
			this.msg = "本地调试，请先去配置config/index.js ,  set variable accessToken  at line 6 "
		}
	}
</script>
<style scoped lang="less">
@import '../../less/macro.less';
.content-zone{
	.pd(0 2em);
	h2{
		.fs(2em);
		.fc(#fff);
		.bgc(#4390ee);
		.mt(3em);
		.lh(2em);
	}
}
</style>