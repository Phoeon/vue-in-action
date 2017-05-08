<template>
	<section>
	<h1>page not found</h1>
	<p>{{seconds}} 秒后，将跳回
	<span v-if="auth">
		<router-link to="dashboard">dashboard</router-link>
	</span>
	<span v-else>
		<router-link to="login">login</router-link>
	</span>
	
	</p>
	</section>
</template>
<script>
	export default {
		name : "NotFound",
		data(){
			return {
				seconds : 5,
				auth : !!sessionStorage.getItem("session_id")
			}
		},
		created(){
			this.prepareJump();
		},
		methods : {
			prepareJump(){
				setTimeout(()=>{this.seconds-=1;this.prepareJump();},1000);
			}
		},
		watch : {
			seconds(cv){
				if(cv===0)this.$router.replace({
					path : this.auth?"dashboard":"login"
				});
			}
		}
	}
</script>
<style scoped lang="less">
@import '../../less/macro.less';
.notfound{
	color:red;
}
</style>