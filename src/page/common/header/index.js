'use strict'
require('./index.css');

var _mm = require('util/mm.js');

//通用页面头部
var header = {
	init:function(){
		this.onLoad();
		this.bindEvent();
	},
	//绑定事件的方法
	bindEvent:function(){
		var _this=this;	
		$('.search-btn').click(function(){
			_this.searchSubmit();
		})
		$('.search-input').keyup(function(e){
			if (e.keyCode ===13) {
				_this.searchSubmit();
			}
		})
	},
	//加载方法
	onLoad:function(){
		//关键字回填
		var keyword = _mm.getUrlParam('keyword');
		//如果keyword存在，则回填至输入框
		if (keyword) {
			//在输入框中显示当前搜索的词汇keyword
			$('.search-input').val(keyword);
		}
	},
	//实现搜索提交的方法
	searchSubmit:function(){
		//对关键字去空白字符处理
		var keyword = $trim($('#search-btn').val());
		//如果提交的搜索的时候有keyword，跳转到list页
		if (keyword) {
			window.location.href = './list.html?keyword='+keyword;
		}else{
			_mm.goHome();
		}
	}
}
header.init();
