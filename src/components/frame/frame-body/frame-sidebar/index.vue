<template>
	<div class="frame-sidebar">
		<slot name="logo-zone">
			<div class="logo-zone">
				<img class="logo-icon" 
				src="../../../../assets/logo.png" :alt="saasInstitutionInfo.name">
				<p class="logo-name">{{saasInstitutionInfo.name}}</p>
			</div>
		</slot>
		<slot name="menu-zone">
			<menu class="menu-zone">
				<ul class="menu-list">

					<li class="menu-item" v-for="item in saasLeftMenu">
						<router-link
						v-if="item.child.length==0"
						:class='{"menu-a":true,active:activeLevel1Menu==item.name}'
						:to="{path:'/'+item.operation}">
							<i :class='["fa","fa-"+item.icon]'></i>
							<span>{{item.name}}</span>
						</router-link>
						<a 
						v-else
						:class='{"menu-a":true,active:activeLevel1Menu==item.name}'
						@click="toggle(item.name)">
							<i :class='["fa","fa-"+item.icon]'></i>
							<span>{{item.name}}</span>
							<em class="arrow"></em>
						</a>
						<transition name="toggle-slide" mode="in-out">
						<ul class="menu-list second-list"
							v-if="item.child.length>0"
							v-show="activeLevel1Menu==item.name">
							<li class="menu-item second-item" v-for="child in item.child" :key="child.name">
								<router-link
								:to="{path:'/'+child.operation}"
								:class='{active:child.current_menu==1,"menu-a":true}'
								>
									<span>{{child.name}}</span>
								</router-link>
							</li>
						</ul>
						</transition>
					</li>
				</ul>
			</menu>
		</slot>
	</div>
</template>
<script>
	import LeftData from './left-data.js';
	window.LeftData = LeftData;
	LeftData.activeLevel1Menu = "客户管理";
	LeftData.activeLevel2Menu = "";
	export default {
		name : "FrameSidebar",
		data(){
			return LeftData;
		},
		methods : {
			toggle(name){
				var pn = this.activeLevel1Menu;
				this.activeLevel1Menu = pn==name?"":name;
			}
		},
		watch : {
			activeLevel1Menu(a,b){
				console.log(a,b)
			}
		}
	}
</script>
<style scoped lang="less">
	@import '../../../../less/macro.less';
	
	.frame-sidebar{
		.bgc(#243748);
		.w(166px);
		.pr;
		.fl;
		.l(0);
		.h(100%);

		.logo-zone{
			.pr;
			.oh;

			.logo-icon{
				.mg(12px auto);
				.mb(0);
				.db;
				.w(50px);
				.h(50px);
				.brs(50%);
			}
			.logo-name{
				.lh(30px);
				.ta(center);
				.fc(#fff);
				.mb(12px);
			}
		}
		.menu-zone{
			.pa;
			.l(0);
			.w(100%);
 			.b(0);
 			.t(104px);
			.of(auto);
			.menu-list{
				.menu-item{
					.toggle-slide-enter-active,
					.toggle-slide-leave-active{
						.ts(all 0.5s ease-in-out);
					}
					.toggle-slide-enter,
					.toggle-slide-leave-active{
						.tf(translate3d(0,-100%,0));
						.opa(0);
					}
					.lh(42px);
					.pr;
					.menu-a{
						.db;
						.fc(#A7B1C2);
						.bgc(#2F4050);
						.pl(16px);
						.td(none);
						.pr;
						.zi(1);
						.fs(0);
						.ts(all @tsDur ease-in-out);
						cursor:pointer;
						&:hover,
						&.active{
							.fc(#fff);

							em{
							    border-top-color: #fff;
							    border-right-color: #fff;
							}
						}
						&.active{
							em{
								.tf(rotate(135deg));
							}
						}
						.fa{
							.fs(16px);
							.w(16px);
							.mr(10px);
							.vt(middle);
						}
						span{
							.fs(14px);
							.vt(middle);
						}
						em{
						    .pa;
						    .w(4px);
						    .bd(2px solid transparent);
						    .h(4px);
						    .t(0);
						    .b(0);
						    .r(17px);
						    .mg(auto);
						    .tf(rotate(45deg));
						    border-top-color: #A2ACBD;
						    border-right-color: #A2ACBD;
						    .ts(transform @tsDur ease-in-out);
						}
					}
					&.second-item{
						.bgc(#2A3846);
						.menu-a{
							.pl(42px);
							.bgc(transparent);
							&.active{
								&:before{
									content:"";
									.pa;
									.t(0);
									.l(0);
									.w(5px);
									.h(100%);
									.bgc(#19AA8D);
								}
							}
						}

					}
				}
			}
		}
	}
</style>