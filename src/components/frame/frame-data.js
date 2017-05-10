
export const topNavs = [{
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
				}];


export const menuData = {
	activeLevel1Menu:"客户管理",
	activeLevel2Menu:"",
	"saasLeftMenu":[{"id":"2","name":"推广直通车","operation":"dashboard/adshop","description":"新氧直通车入口","menu_display":"1","auth_level":"1","parent_id":"0","icon":"rocket","sort_num":"360","assign":"1","child":[]},{"id":"11","name":"权限管理","operation":"","description":"权限管理","menu_display":"1","auth_level":"4","parent_id":"0","icon":"toggle-on","sort_num":"350","assign":"1","child":[{"id":"91","name":"人员管理","operation":"saas/AuthUserList","description":"人员管理","menu_display":"1","auth_level":"4","parent_id":"11","icon":"","sort_num":"50","assign":"1","child":[]},{"id":"96","name":"角色管理","operation":"saas/RoleList","description":"角色管理","menu_display":"1","auth_level":"4","parent_id":"11","icon":"","sort_num":"40","assign":"1","child":[]}]},{"id":"13","name":"预约管理 ","operation":null,"description":"预约管理 ","menu_display":"1","auth_level":"2","parent_id":"0","icon":"calendar-check-o","sort_num":"340","assign":"1","child":[{"id":"116","name":"新增预约","operation":"saas/Reservation","description":"新增预约页面渲染","menu_display":"1","auth_level":"2","parent_id":"13","icon":"","sort_num":"182","assign":"1","child":[]},{"id":"115","name":"预约列表","operation":"saas/ReservationList","description":"预约列表","menu_display":"1","auth_level":"2","parent_id":"13","icon":"","sort_num":"180","assign":"1","child":[]},{"id":"187","name":"预约促成","operation":"saas/ReservationFacilitate","description":"预约促成","menu_display":"1","auth_level":"2","parent_id":"13","icon":"","sort_num":"0","assign":"1","child":[]}]},{"id":"1","name":"运营仪表盘","operation":"dashboard/dashboard","description":"医院运营情况概览","menu_display":"1","auth_level":"1","parent_id":"0","icon":"home","sort_num":"330","assign":"1","child":[]},{"id":"3","name":"交易管理","operation":null,"description":"交易管理一级菜单","menu_display":"1","auth_level":"1","parent_id":"0","icon":"cart-plus","sort_num":"320","assign":"1","child":[{"id":"21","name":"预约码验证","operation":"dashboard/seesouponnew","description":"预约码验证","menu_display":"1","auth_level":"1","parent_id":"3","icon":"","sort_num":"60","assign":"1","child":[]},{"id":"19","name":"项目订单管理","operation":"dashboard/orderlistnew","description":"项目订单管理","menu_display":"1","auth_level":"1","parent_id":"3","icon":"","sort_num":"50","assign":"1","child":[]},{"id":"20","name":"美淘订单管理","operation":"dashboard/orderlistmeitao","description":"美淘订单管理","menu_display":"1","auth_level":"1","parent_id":"3","icon":"","sort_num":"40","assign":"1","child":[]},{"id":"173","name":"补单管理","operation":"dashboard/orderextend","description":"医院补单操作","menu_display":"1","auth_level":"1","parent_id":"3","icon":"","sort_num":"30","assign":"1","child":[{"id":"320","name":"通过id获取补单详情","operation":"dashboard/getorderextenditem","description":"通过id获取补单详情","menu_display":"1","auth_level":"1","parent_id":"173","icon":null,"sort_num":"10","assign":"1","child":[]}]},{"id":"22","name":"POS机订单","operation":"dashboard/posordernew","description":"POS机订单","menu_display":"1","auth_level":"1","parent_id":"3","icon":"","sort_num":"20","assign":"1","child":[]},{"id":"346","name":"美分宝分期订单","operation":"dashboard/mfborder","description":"美分宝分期订单","menu_display":"1","auth_level":"5","parent_id":"3","icon":null,"sort_num":"10","assign":"1","child":[]}]},{"id":"7","name":"私信管理","operation":null,"description":"私信管理","menu_display":"1","auth_level":"1","parent_id":"0","icon":"envelope","sort_num":"310","assign":"1","child":[{"id":"29","name":"用户私信","operation":"dashboard/message","description":"用户私信","menu_display":"1","auth_level":"1","parent_id":"7","icon":"","sort_num":"164","assign":"1","child":[]},{"id":"30","name":"自动回复","operation":"dashboard/PrivateMessageIndex","description":"自动回复","menu_display":"1","auth_level":"1","parent_id":"7","icon":"","sort_num":"162","assign":"1","child":[]},{"id":"31","name":"账号绑定","operation":"dashboard/HospitalBindIndex","description":"账号绑定","menu_display":"1","auth_level":"1","parent_id":"7","icon":"","sort_num":"160","assign":"1","child":[]}]},{"id":"5","name":"商品管理","operation":null,"description":"项目商品管理","menu_display":"1","auth_level":"1","parent_id":"0","icon":"shopping-bag","sort_num":"300","assign":"1","child":[{"id":"24","name":"发布商品","operation":"dashboard/addnewproduct","description":"发布项目或商品","menu_display":"1","auth_level":"1","parent_id":"5","icon":"","sort_num":"156","assign":"1","child":[]},{"id":"25","name":"待审商品","operation":"dashboard/notauditnew","description":"待审项目或商品","menu_display":"1","auth_level":"1","parent_id":"5","icon":"","sort_num":"154","assign":"1","child":[]},{"id":"26","name":"商品上下架","operation":"dashboard/productlistnew","description":"项目商品上下架管理","menu_display":"1","auth_level":"1","parent_id":"5","icon":"","sort_num":"152","assign":"1","child":[]}]},{"id":"4","name":"营销管理","operation":null,"description":"营销管理一级菜单","menu_display":"1","auth_level":"1","parent_id":"0","icon":"bank","sort_num":"290","assign":"1","child":[{"id":"23","name":"红包管理","operation":"dashboard/hospitalcut","description":"红包管理","menu_display":"1","auth_level":"1","parent_id":"4","icon":"","sort_num":"30","assign":"1","child":[]},{"id":"325","name":"专场提报","operation":"dashboard/boc_index ","description":"专场提报","menu_display":"1","auth_level":"1","parent_id":"4","icon":null,"sort_num":"20","assign":"1","child":[]}]},{"id":"6","name":"案例管理","operation":null,"description":"用户管理","menu_display":"1","auth_level":"1","parent_id":"0","icon":"folder-open","sort_num":"280","assign":"1","child":[{"id":"27","name":"日历管理","operation":"dashboard/grouplist","description":"日历列表","menu_display":"1","auth_level":"1","parent_id":"6","icon":"","sort_num":"40","assign":"1","child":[]},{"id":"28","name":"日记管理","operation":"dashboard/HospitalDiary","description":"日记列表","menu_display":"1","auth_level":"1","parent_id":"6","icon":"","sort_num":"30","assign":"1","child":[]},{"id":"324","name":"内容申述","operation":"dashboard/appeal","description":"内容申述","menu_display":"1","auth_level":"1","parent_id":"6","icon":null,"sort_num":"20","assign":"1","child":[{"id":"342","name":"申述引导","operation":"dashboard/AppealBoot","description":"申述引导","menu_display":"1","auth_level":"1","parent_id":"324","icon":null,"sort_num":"10","assign":"1","child":[]}]}]},{"id":"9","name":"医生管理","operation":null,"description":"医生管理","menu_display":"1","auth_level":"1","parent_id":"0","icon":"medkit","sort_num":"270","assign":"1","child":[{"id":"34","name":"医生置顶","operation":"dashboard/mydoctor","description":"医生置顶","menu_display":"1","auth_level":"1","parent_id":"9","icon":"","sort_num":"138","assign":"1","child":[]}]},{"id":"8","name":"资金管理","operation":null,"description":"资金管理","menu_display":"1","auth_level":"1","parent_id":"0","icon":"database","sort_num":"260","assign":"1","child":[{"id":"32","name":"销售统计","operation":"dashboard/frontmoneynew","description":"销售状况","menu_display":"1","auth_level":"1","parent_id":"8","icon":"","sort_num":"134","assign":"1","child":[]},{"id":"33","name":"结款对账","operation":"dashboard/monthknot","description":"结款对账单","menu_display":"1","auth_level":"1","parent_id":"8","icon":"","sort_num":"132","assign":"1","child":[]}]},{"id":"125","name":"排期统计","operation":"","description":"排期管理","menu_display":"1","auth_level":"6","parent_id":"0","icon":"calendar","sort_num":"250","assign":"1","child":[{"id":"128","name":"房间排期","operation":"saas/RoomSchedule","description":"房间排期","menu_display":"1","auth_level":"6","parent_id":"125","icon":null,"sort_num":"30","assign":"1","child":[]},{"id":"126","name":"人力排期","operation":"saas/PersonSchedule","description":"人力排期","menu_display":"1","auth_level":"6","parent_id":"125","icon":null,"sort_num":"20","assign":"1","child":[]},{"id":"127","name":"设备排期","operation":"saas/DeviceSchedule","description":"设备排期","menu_display":"1","auth_level":"6","parent_id":"125","icon":null,"sort_num":"10","assign":"1","child":[]}]},{"id":"135","name":"资源管理","operation":"","description":"资源管理","menu_display":"1","auth_level":"6","parent_id":"0","icon":"tasks","sort_num":"220","assign":"1","child":[{"id":"160","name":"房间资源","operation":"Saas/RoomResourceManager","description":"房间资源管理","menu_display":"1","auth_level":"6","parent_id":"135","icon":null,"sort_num":"50","assign":"1","child":[]},{"id":"138","name":"床位资源","operation":"saas/BedManager","description":"床位管理","menu_display":"1","auth_level":"6","parent_id":"135","icon":null,"sort_num":"40","assign":"1","child":[]},{"id":"142","name":"人力资源","operation":"saas/PersonSubbranchManager","description":"分店人力","menu_display":"1","auth_level":"6","parent_id":"135","icon":null,"sort_num":"30","assign":"1","child":[]},{"id":"159","name":"设备资源","operation":"saas/ResourceManager","description":"设备资源管理","menu_display":"1","auth_level":"6","parent_id":"135","icon":null,"sort_num":"20","assign":"1","child":[]},{"id":"143","name":"项目上下架 ","operation":"saas/ItemManager","description":"项目上下架","menu_display":"1","auth_level":"6","parent_id":"135","icon":null,"sort_num":"10","assign":"1","child":[]}]},{"id":"196","name":"客户管理","operation":"","description":"客户管理","menu_display":"1","auth_level":"2","parent_id":"0","icon":"user","sort_num":"200","assign":"1","current_menu":1,"child":[{"id":"197","name":"今日事项","operation":"saas/todaywait","description":"今日事项","menu_display":"1","auth_level":"2","parent_id":"196","icon":"","sort_num":"60","assign":"1","child":[]},{"id":"199","name":"客户列表","operation":"saas/customer","description":"客户列表","menu_display":"1","auth_level":"2","parent_id":"196","icon":"","sort_num":"50","assign":"1","child":[]},{"id":"198","name":"客户组管理","operation":"saas/customergroup","description":"客户组管理","menu_display":"1","auth_level":"5","parent_id":"196","icon":"","sort_num":"40","assign":"1","current_menu":1,"child":[]},{"id":"312","name":"术后关怀模板","operation":"saas/CareTemplateList","description":"术后关怀模板","menu_display":"1","auth_level":"5","parent_id":"196","icon":null,"sort_num":"30","assign":"1","child":[{"id":"313","name":"操作术后模板","operation":"saas/AddCareTemplate","description":"编辑添加启用停用删除","menu_display":"1","auth_level":"5","parent_id":"312","icon":null,"sort_num":"20","assign":"1","child":[]},{"id":"314","name":"关闭模板 验证页","operation":"saas/CloseMessage","description":"关闭","menu_display":"1","auth_level":"5","parent_id":"312","icon":null,"sort_num":"10","assign":"1","child":[]}]},{"id":"200","name":"跟进计划","operation":"saas/plan","description":"跟进计划","menu_display":"1","auth_level":"2","parent_id":"196","icon":"","sort_num":"20","assign":"1","child":[]},{"id":"338","name":"近期跟进","operation":"saas/RecentFollow","description":"近期跟进","menu_display":"1","auth_level":"7","parent_id":"196","icon":null,"sort_num":"10","assign":"1","child":[]}]},{"id":"10","name":"基本信息管理","operation":null,"description":"基本信息管理","menu_display":"1","auth_level":"1","parent_id":"0","icon":"sticky-note","sort_num":"190","assign":"1","child":[{"id":"35","name":"平台公告","operation":"dashboard/noticelist","description":"平台公告","menu_display":"1","auth_level":"1","parent_id":"10","icon":"","sort_num":"80","assign":"1","child":[]},{"id":"36","name":"注册信息","operation":"dashboard/hospitalinfor","description":"注册信息","menu_display":"1","auth_level":"1","parent_id":"10","icon":"","sort_num":"70","assign":"1","child":[]},{"id":"37","name":"银行账户","operation":"dashboard/bankinfor","description":"银行账户","menu_display":"1","auth_level":"1","parent_id":"10","icon":"","sort_num":"60","assign":"1","child":[]},{"id":"38","name":"合同管理","operation":"dashboard/contract","description":"合同管理","menu_display":"1","auth_level":"1","parent_id":"10","icon":"","sort_num":"50","assign":"1","child":[]},{"id":"315","name":"客户来源设置","operation":"saas/customeroriginate","description":"客户来源","menu_display":"1","auth_level":"5","parent_id":"10","icon":null,"sort_num":"40","assign":"1","child":[]},{"id":"336","name":"本院公告","operation":"saas/HospitalNotice","description":"本院公告","menu_display":"1","auth_level":"5","parent_id":"10","icon":null,"sort_num":"10","assign":"1","child":[]}]},{"id":"189","name":"评价管理","operation":"","description":"评价管理","menu_display":"1","auth_level":"1","parent_id":"0","icon":"thumbs-up","sort_num":"170","assign":"1","child":[{"id":"190","name":"用户评价","operation":"dashboard/usercomment","description":"用户评价","menu_display":"1","auth_level":"1","parent_id":"189","icon":null,"sort_num":"10","assign":"1","child":[]}]},{"id":"12","name":"报表中心","operation":null,"description":"报表中心","menu_display":"1","auth_level":"2","parent_id":"0","icon":"area-chart","sort_num":"150","assign":"1","child":[{"id":"193","name":"财务报表","operation":"saas/financeindex","description":"云诊所财务报表导入","menu_display":"1","auth_level":"6","parent_id":"12","icon":null,"sort_num":"30","assign":"1","child":[{"id":"244","name":"财务报表模板","operation":"saas/GetFinanceTemplate","description":"获取财务报表模板","menu_display":"1","auth_level":"6","parent_id":"193","icon":null,"sort_num":"60","assign":"1","child":[]},{"id":"243","name":"更新日报表备注","operation":"saas/UpdateRemarks","description":"更新日报表备注","menu_display":"1","auth_level":"6","parent_id":"193","icon":null,"sort_num":"50","assign":"1","child":[]},{"id":"242","name":"取消流水表导入","operation":"saas/CancelImport","description":"取消流水表导入","menu_display":"1","auth_level":"6","parent_id":"193","icon":null,"sort_num":"40","assign":"1","child":[]},{"id":"222","name":"重新导入","operation":"saas/ReImportFinanceTemplate","description":"重新导入","menu_display":"1","auth_level":"6","parent_id":"193","icon":null,"sort_num":"30","assign":"1","child":[]},{"id":"221","name":"下载表格","operation":"saas/ExportSummary","description":"下载表格","menu_display":"1","auth_level":"6","parent_id":"193","icon":null,"sort_num":"20","assign":"1","child":[]},{"id":"220","name":"导入日流水表","operation":"saas/importfinancetemplate","description":"导入日流水表","menu_display":"1","auth_level":"6","parent_id":"193","icon":null,"sort_num":"10","assign":"1","child":[]}]},{"id":"144","name":"医院预约报表","operation":"saas/ReportForms","description":"预约报表","menu_display":"1","auth_level":"5","parent_id":"12","icon":"","sort_num":"10","assign":"1","child":[]}]},{"id":"321","name":"发票申请","operation":"","description":"发票申请","menu_display":"1","auth_level":"5","parent_id":"0","icon":"ticket","sort_num":"10","assign":"1","child":[{"id":"322","name":"佣金发票","operation":"saas/invoice","description":"佣金发票","menu_display":"1","auth_level":"5","parent_id":"321","icon":"","sort_num":"0","assign":"0","child":[]},{"id":"323","name":"直通车发票","operation":"saas/AdShopinvoice","description":"直通车发票","menu_display":"1","auth_level":"5","parent_id":"321","icon":"","sort_num":"0","assign":"0","child":[]}]}],"saasInstitutionInfo":{"name":"新氧云诊所北京丽扬店","icon":"http://img2.soyoung.com/doctor/20170426/1/20170426101958238.png"},"saasNodeName":"客户组管理","saasFirstMenu":{"dashboard":"dashboard/dashboard","message":1}};