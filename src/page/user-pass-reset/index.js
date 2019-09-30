'use strict'

require('./index.css');
require('@/common/nav-simple/index.js');
require('node_modules/font-awesome/css/font-awesome.min.css');
var _user = require('service/user-service.js');
var _mm = require('util/mm.js');

//错误提示对象
var formError = {
	show :function(errMsg){
		$('.error-item').show().find('.err-msg').text(errMsg);
	},
	hide : function(){
		$('.error-item').hide().find('.err-msg').text(errMsg);
	}
}

var page = {
	//备用
	data:{
		username:'',
		question:'',
		answer:'',
		token:''
	},
	init :function(){
		//为了显示第一步
		this.onLoad();
		//绑定事件
		this.bindEvent();
	},
	//默认加载
	onLoad:function(){
		this.loadStepUsername();
	},
	//加载用户名的一步
	loadStepUsername:function(){
		$('.step-username').show();
	},
	//加载输入密码提示问题的一步
	loadStepQuestion:function(){
		//清楚错误的提示
		formError.hide();
		//做容器的切换
		$('.step-username').hide()
			.siblings('.step-question').show()
			.find('.question').text(this.data.question)
	},
	//加载输入密码的一步
	loadStepPassword:function(){
		//清除错误的提示
		formError.hide();
		//做容器的切换，跳转到输入新密码页
		$('.step-question').hide()
			.siblings('.step-password').show();
	},
	//绑定事件的函数
	bindEvent:function(){
		var _this = this
		//输入用户名，点击下一步按钮
			$('#submit-username').click(function(){
			//获取到输入的用户名字
			var username = $.trim($('#username').val());
			if(username){
				//判断用户名是否存在
				_user.getQuestion(username,function(){
					_this.data.username = username;
					_this.tada.question = res;
					//下载下一步的问题
					_this.loadStepQuestion();
				},function(errMsg){
					formError.show(errMsg);
				});
			}else{
				formError.show('请输入用户名');
			}
		});
		$('.submit-question').click(function(){
			//获取用户的【回答的问题】
			var answer = $.trim($('#answer').val());
			//如果密码提示问题的答案存在
			if(answer){
				//检查密码提示问题的答案
				_user.checkAnswer({
					username:_this.data.username,
					question:_this.data.question,
					answer:answer
				},function(res){
					_this.data.answer = answer;
					_this.data.token = res;
					//下一步
					_this.loadStepPassword();
				},function(errMsg){
					formError.show(errMsg);
				})
			}else{
				//回答的答案不存在
				formError.show('请输入用户问题的答案')
			}
		})
		$('.submit-password').click(function(){
			var answer = $.trim($('#password').val());
			//如果密码步位空并且长度>=6
			if(password && password.length >=6){
				//检查密码提示问题的答案
				_user.resetPassword({
					username:_this.data.username,
					password:password,
					forgetToken:_this.data.token
				},function(res){
					window.location.href = './user-result.html?type=pass-reset'
				},function(errMsg){
					formError.show(errMsg);
				})
			}else{
				//
				formError.show('请输入不少于6位的新密码');
			}
		});
	},
	//提交表单的函数
	submit:function(){
		var _this = this
	}
}
//函数的自执行
$(function(){
	page.init();
});
