 import Vue from 'vue'
 import Vuex from 'vuex'
 import QQMapWX from '../static/qqmap-wx-jssdk.min.js'//引入地图API文件
 Vue.use(Vuex)
 import {getInTheaters} from '../apis/index.js'
 // getInTheaters().then((res)=>{
//	console.log(res);
  //})
 export default new Vuex.Store({
	 //全局属性变量
	 state:{
		city:'' 

	 },
	 //全局同步方法 调用方法 this.$store.commit(xxx"") 
	 mutations:{
		
	 },
	 //vuex属性计算,在视图里面当变量使用
	 getters:{
	 	
	 },
	 //异步方法 调用方法 this.$store.dispatch("xxx")
	actions:{
		getCity(context){
			 //console.log(uni);
			 uni.showLoading({
				 title:'加载中...'
			 });
			 //检测是否授权
			 uni.authorize({
				scope:"scope.userLocation" ,//获取用户位置想信息
				success(){
				    let	qqmapsdk = new QQMapWX({//引入地图api
					            key: 'GKEBZ-2ZSC4-RCEUQ-DKXXO-PDTFE-M5FZ6'
					        });
					uni.getLocation({
						type:'gcj02',
						success:function(res){
							console.log("jingdu"+res.longitude);
							console.log("weidu"+res.latitude);
							qqmapsdk.reverseGeocoder({
								location:{
									longitude:res.longitude,
									latitude:res.latitude
								},
								success(res){
									console.log(res);
									context.state.city=res.result.address_component.city;
									getInTheaters(
										{
											start:'0',
											count:'8',
											city:context.state.city
										}
									).then((res)=>{
										let [error,data]=res;
										console.log(res);
										context.state.newPlayMovie=data.data.subjects;
										uni.hideLoading();
									});
								}
							})
						}
					})
				},
				fail(){
					console.log("fail");
				}
			 })
		 }
	 }
 })