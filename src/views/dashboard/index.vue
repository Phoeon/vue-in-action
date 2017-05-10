<template>
	<div class="content-zone">
	<h2>
		{{msg}}
	</h2>
	
	<table v-if="data.notice.notice_result.length" class="table-group">
		<thead> 
			<tr>
				<th>
					<input type="checkbox">
				</th>
				<th v-for="v,k in data.notice.notice_result[0]">
				{{k}}		
				</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="td in data.notice.notice_result">
				<td>
					<input  type="checkbox">
				</td>
				<td v-for="(v,k) in data.notice.notice_result[0]">
				{{td[k]}}		
				</td>
			</tr>
		</tbody>
	</table>
	</div>
</template>
<script>
var axios = require("axios");

export default {
	name : "Dashboard",
	data(){
		return {
				msg : "加载中。。。",
				data:{
					notice:{
						notice_result:[]
					}
				}
			};
	},
	created(){

		axios.get("/dashboard/dashboard?json=1")
		.then((res)=>{
			this.msg="数据来自 API: dashboard／dashboard , 如下：";
			this.data=res.data;
		});
	}
}
</script>
<style scoped lang="less">
@import '../../less/macro.less';
.content-zone{
	.pd(2em);
}
h2{
	.fs(2em);
	.bgc(#fefefe);
	.fc(#666);
	.lh(3em);
}
table{
	.bd(1px solid #ccc);
	table-layout: fixed;
	border-collapse: collapse;

	th,td{
		    .pd(10px);
		    .bd(1px dotted #666);
		    .ta(center);
	}
	th{
		.bgc(#fcfcfc);
		.bd(1px solid #ccc);
	}
}
</style>