const baseUrl="https://douban-api.uieee.com";

export const getInTheaters=params=>(//箭头函数默认会返回对象,跟普通函数区别
  // new Promise((resolve,reject)=>{//request方法不加success默认返回一个promise对象
	  uni.request({
	  	url:`${baseUrl}/v2/movie/in_theaters`,
		data:params,
		header:{
			'content-type':'json'
		},
		//success:(res)=>{
		//	resolve(res);
		//}
	//  });
   })
)

export const comingSoon=params=>(
  //即将上映的电影
  uni.request({
  	  	url:`${baseUrl}/v2/movie/coming_soon`,
  		data:params,
  		header:{
  			'content-type':'json'
  		},
  		//success:(res)=>{
  		//	resolve(res);
  		//}
  	//  });
  })
)
//当一个页面需要调多个接口时,就需要使用promise.all去全部调用返回promise对象
export const newMovies=params=>(
  //豆瓣电影新片榜
  uni.request({
  	  	url:`${baseUrl}/v2/movie/new_movies`,
  		data:params,
  		header:{
  			'content-type':'json'
  		},
  		//success:(res)=>{
  		//	resolve(res);
  		//}
  	//  });
  })
)

//跳转详情页
export const details=id=>(
  //电影详情
  uni.request({
  	  	url:`${baseUrl}/v2/movie/subjext/${id}`,
  		data:params,
  		header:{
  			'content-type':'json'
  		},
  		//success:(res)=>{
  		//	resolve(res);
  		//}
  	//  });
  })
)