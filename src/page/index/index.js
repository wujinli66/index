'use strict'
require('./index.css');
require('@/common/nav-simple/index.js');
require('@/common/nav/index.js');
require('@/common/header/index.js');
require('@/common/nav-side/index.js');

var _mm = require('util/mm.js');

var navSide = require('@/common/nav-side/index.js');
//测试个人中心页
navSide.init({
	name:'user-center'
})

//==========================
// _mm.request({
// 	url:'/product/list.do?keyword=1',
// 	success:function(res){
// 		console.log("这是网络接口:",res);
// 	},
// 	error:function(errMsg){
// 		console.log(errMsg);
// 	}
// });
//===============================
 // console.log(_mm.getUrlParam('page'));
//===============================
// //提供模板
// var html ='<div>{{ data }}</div>';
// //提供数据
// var data ={
// 	data:123
// }
// console.log(_mm.renderHtml(html,data)) ;
//============================