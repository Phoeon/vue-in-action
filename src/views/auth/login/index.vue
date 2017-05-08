<template>
	<section>
		<form action="" v-if="isLogin">
			<input type="text" v-model="userinfo.account" :placeholder="loginForm.account">
			<br>
			<input type="text" v-model="userinfo.password" :placeholder="loginForm.password">
			<button @click="login">LOGIN</button> <a @click.prevent="isLogin=false">REGISTER</a>
		</form>
		<form action="" v-if="!isLogin">
			<input type="text" v-model="userinfo.account" :placeholder="loginForm.account">
			<br>
			<input type="text" v-model="userinfo.password" :placeholder="loginForm.password">
			<button @click="register">REGISTER</button><a @click.prevent="isLogin=true">LOGIN</a>
		</form>
	</section>
</template>
<script>
export default {
	name : "Login",
	data(){
		return {
			userinfo : {
				account : "",
				password : ""
			},
			loginForm : {
				account : "account",
				password : "password"
			},
			isLogin : true
		}
	},
	methods : {
		login(){
			//需要引入验证组件
			let {userinfo} = this;
			if(userinfo.account=="fuyue"&&userinfo.password=="123456"){
				sessionStorage.setItem("session_id",true);
				this.$router.replace({
					path : "dashboard"
				})
			}
		},
		register(){
			sessionStorage.setItem("session_id",true);
		}
	}
}	
</script>
<style scoped lang="less">
@import '../../../less/macro.less';
.login{
	color:red;
}
</style>
