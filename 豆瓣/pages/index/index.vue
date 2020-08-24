<template>
	<view>
	 `haho hhhhhhhhh
	 hhhhhhhhhhhhhhhhhh
	 hhhhhhh`
	</view>
</template>

<script>
	import {comingSoon,newMovies} from '../../apis/index.js'
	export default {
		data() {
			return {
				title: 'Hello',
				comingSoon:{},
				newMovies:{},
				MoviesList:[]
			}
		},
		onReady(){
			//this.$store.dispatch("getCity");
			  this.pageInit();//初始化接口请求数据
		},
		onLoad() {
		 
		},
		computed:{
			newPlayMovie(){
				console.log(this.$store.state.newPlayMovie);
				return this.$store.state.newPlayMovie;
			}
		},
		
		methods: {
			//处理一个页面请求多个接口的情况
          pageInit(){
			  uni.showLoading({
			  	 title:'加载中...'
			  });
			  Promise.all([
				  this._comingSoon(),
				  this._newMovies()
			  ]).then((res)=>{
				  uni.hideLoading();
				  console.log(res)
				  let rel=[];
				  res.map((item)=>{
					  rel.push(item[1].data)
				  })
				  console.log(rel);
			  })
		  },
		  //调用接口要与普通函数有区别
		  _comingSoon(){
			  return comingSoon({
				  city:this.$store.state.city,
				  start:'0',
				  count:'8'
			  })
		  },
		  _newMovies(){
			  return newMovies({
				  city:this.$store.state.city,
				  start:'0',
				  count:'8'
			  })
		  }
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
