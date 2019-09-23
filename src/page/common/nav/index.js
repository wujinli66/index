'use strict'

require('./index.css');
var _mm = require('util/mm.js');
var _user = require('service/user-service.js');
var _cart = require('service/cart-service.js');


var nav = {
	//初始化方法
	init: function(){
		this.bindEvent();
		this.loadUserInfo();
		this.loadCartCount();
		return this;
	},
	//绑定事件的方法
	bindEvent:function(){
		//点击登录按钮
		$('.js-login').click(function(){
			console.log("xxx");
			//跳转到登录页面
			_mm.doLogin();
		})
		//点击注册按钮
		$('.js-register').click(function(){
			window.location.href ='./user-register.html'
		})
		//点击退出按钮(需要请求后端)
		$('.js-logout').click(function(){
			_user.logout();
		})
	},
	//加载用户信息方法
	loadUserInfo:function(){
		_user.checkLogin(function(rse){
			$('.user.not-login').hide().siblings('.user.not-login').show().find('.username').text('res.username')
		},function(errMsg){

		});

	},
	//加载购物车数量
	loadCartCount:function(){
		_cart.getCartCount(function(res){
			$('nav .cart-count').text(res || 0);
		},function(errMsg){
			$('nav .cart-count').text(0);

		});
	}
}

module.exports = nav.init();