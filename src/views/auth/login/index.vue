<template>
	<section>
		<form action="" v-if="isLogin">
			<input type="text" v-model="userinfo.account" :placeholder="loginForm.account">
			<br>
			<input type="text" v-model="userinfo.password" :placeholder="loginForm.password">
			<br>
			<button @click="login">LOGIN</button> 
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
					path : "/dashboard"
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
section{
	form{
		.w(500px);
		.h(300px);
		.db;
		.mg(30px auto);

		input,button,.fn-btn{
			.w(100%);
			.db;
			.lh(3em);
			.ti(2em);
			.bd(1px solid #ccc);
			.brs(3px);
			outline:none;
			&:focus{
				.bd(1px solid #4390ee)
			}
		}
		button,.fn-btn{
			.bgc(#f3f3f3);
			.mb(1em);
			.fc(#666);
			.ta(center);
		}
	}
	.tip{
		.fc(red);
	}
}
</style>
