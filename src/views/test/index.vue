<template>
   <div class="content-zone">
   		<h2>
   		<span v-if="lines">数据来自{{msg}}，如下：</span>
   		<span v-else>LOADING DATA ...</span>
   		</h2>
   		<pre>{{lines}}</pre>
   </div>
</template>
<script>
	import axios from "axios";

	export default {
		name : "Test",
		data(){
			return {
				msg : "",
				lines:""
			}
		},
		created(){
			this.lines="";
			axios.get(this.$route.meta.path+"?json=1")
			.then((res)=>{
				this.lines=res
			}).catch(()=>this.$router.replace({path:"/notfound"}));
		},
		updated(){
		},
		beforeRouteEnter(to,from,next){
			next();
		},
		beforeRouteLeave(to,from,next){
			console.log(to.meta.path)
			this.msg=to.meta.path;
			this.lines="";
			axios.get(to.meta.path+"?json=1")
			.then((res)=>{
				this.lines=res
			}).catch(()=>this.$router.replace({path:"/notfound"}));
			next()
		}
	}
</script>
<style scoped lang="less">
@import '../../less/macro.less';
.content-zone{ 
	h2{
		.pd(0);
		.mg(0);
		.h(3em);
		.lh(3em);
		.ta(center);
		.bgc(#333);
		.fc(#fff);
		.fs(2em);
		.bb(3px solid #ccc);
		box-sizing: border-box;
	}

	pre{
		.pa;
    	.lh(1.5em);
    	.bgc(#333);
    	.fc(#fff);
    	.pl(2em);
    	.pt(2em);
    	.t(6em);
    	.b(0);
    	.r(0);
    	.l(0);
    	.of(auto);
	}
}
</style>