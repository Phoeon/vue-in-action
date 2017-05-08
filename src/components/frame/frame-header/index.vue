<template>
	<header class="frame-header">
		<div class="logo-left">Soyoung . Com</div>
		<div class="setting-right">中国队，加油</div>
		<ul class="nav-list">
			<li v-for="nav in topNavs" class="nav-item">
				<a :href="nav.text">{{nav.text}}</a>
			</li>
		</ul>
	</header>
</template>
<script>
	export default {
		name : "FrameTop",
		data(){
			return {
				topNavs : [
				{
					link:"/",
					text:"首页"
				},
				{
					link:"/",
					text:"日记"
				},
				{
					link:"/",
					text:"圈子"
				},
				{
					link:"/",
					text:"安心购"
				},
				{
					link:"/",
					text:"项目"
				},
				{
					link:"/",
					text:"云诊所"
				},
				{
					link:"/",
					text:"App"
				}
			]
			}
		}
	}
</script>
<style lang="less" scoped>
	.frame-header{
		position:relative;
		z-index:1;
		background-color:#000;
		color:#fff;
		overflow:hidden;
		line-height:2.2em;

		.logo-left{
			float:left;
			width:200px;
		}
		.setting-right{
			float:right;
			width:200px;
		}
		.nav-list{
			overflow-x:hidden;
			white-space:nowrap;
			margin-right:200px;
			text-align:left;
			.nav-item{
				display:inline-block;
				width:10%;
				min-width:100px;
				text-align:center;
				a{
					color:#fff;
					text-decoration:none;
				}
				&:hover{
					background-color:rgba(255,255,255,0.2)
				}
			}
		}
	}
</style>