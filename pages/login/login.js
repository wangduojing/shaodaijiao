// pages/login/login.js
var validate = require('../../utils/validate') // 验证js文件
var request = require('../../utils/request') // 请求js文件
Page({

    /**
     * 页面的初始数据
     */
    data: {
		active: true,
		showMessage: false,
		messageContent: '',
		tel:'',
		code: '',
		pwd:'',
		staticImg: true,
		waittime:'获取验证码',
		currentTime : 60,
		disabled: false,
		selecttype: true,
		hiddenaccount: false,
		hiddenphone: true
		
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },
	/**
	 * 点击切换登录方式
	 */
	
	hasAccount: function(){	
		hiddenphone: true
		hiddenaccount: true
		this.setData({
			active: true,
			selecttype: true,
			hiddenaccount: false,
			hiddenphone: true
		})	
	},
	noAccount: function () {
		hiddenphone: true
		hiddenaccount: true
		this.setData({
			active: false,
			selecttype: false,
			hiddenaccount: true,
			hiddenphone: false
		})

	},
	
	/** 
	*	点击清除文本框的内容
	*/
	clearAll: function(e) {
		this.setData({
			tel: ''
		})
		
    },
	clearPwd:function(e){
		this.setData({
			pwd: ''
		})
	},
	/** 
	*	点击密码显示隐藏
	*/
	click_secret: function(){
		var flag = this.data.staticImg == true ? false : true
		this.setData({
			staticImg: flag
		})
		
	},
	/**
	 * 获取验证码:存储用户输入的手机号
	 */
	getTel:function(e){
		this.setData({
			tel: e.detail.value,
			disabled: false
		})
	},
	/**
	 * 存储用户输入的密码
	 */
	input_password: function(e) {
		this.setData({
			pwd: e.detail.value,
		})
	},
	/**
	 * 存储短信验证码
	 */
	input_code: function (e) {
		this.setData({
			code: e.detail.value,
		})
	},
	/**
	 * 获取验证码:点击获取
	 */
	getmobilecode: function(e){
		var that = this
		var telRule = /^1[3|4|5|7|8]\d{9}$/
		if(this.data.tel == '') {
			this.showMessage('请先输入手机号')
		} else if (!telRule.test(this.data.tel)){
			this.showMessage('手机号码格式不正确')
		}else {
			var that = this
			var timevalue = "秒重新发送"
			var currentTime = that.data.currentTime
			that.setData({
				disabled: true,//点击后不可再次点击
				waittime: currentTime + timevalue
			})
			var interval = setInterval(function () {
				that.setData({	
					waittime: (currentTime - 1) + "秒重新发送"
				})
				
				currentTime--
				
				if (currentTime <= 0) {
					clearInterval(interval)
					that.setData({
						waittime: "重新获取验证码",
						disabled: false
					})
					
				}
				
			}, 1000)
			
		}	
	},
	
	/** 
	*	验证文本框
	*/
	signPersonInfo: function (e) {
		var phone = this.data.tel
		var flag1 = validate.check_phone(phone)
		if (!flag1) {
			this.showMessage("请输入正确的手机号码")
		}
		if (this.data.disabled){
			// 手机号快捷登录
			var code = this.data.code
			var flag2 = validate.check_code(code)
			if (!flag2) {
				this.showMessage("请输入正确的短信验证码")
			}
			request.quick_login("{'userName': '" + phone + "', 'code': '" + code + "'}").then(resData => {
				if (resData.data.stateCode != 200) {
					this.showMessage(resData.data.message)
					return
				}
				// 缓存登录信息
				getApp().cacheHeader(JSON.stringify(resData.data.resHeadDto));
				// 跳转登录成功页面
				wx.navigateTo({
					url: '../index/index',
				})
			})

		} else {
			// 账号登录
			var password = this.data.pwd
			var flag2 = validate.check_password(password)
			if(!flag2){
				this.showMessage("密码不符合规范")
			}
			request.user_login("{'userName': '" + phone + "', 'userPassword': '" + password + "'}").then(resData => {//有参数和无参数区别 resData是自定义 =>是赋值给下一个方法
				if (resData.data.stateCode != 200) {
					this.showMessage(resData.data.message)
					return
				}
				// 缓存登录信息
				getApp().cacheHeader(JSON.stringify(resData.data.resHeadDto));
				// 跳转登录成功页面
				wx.redirectTo({
					url: '../index/index',
				})
			})
		}
	},
	/** 
	*	验证提示信息
	*/
	showMessage: function (text) {
		var that = this
		that.setData({
			showMessage: true,
			messageContent: text
		})
		setTimeout(function () {
			that.setData({
				showMessage: false,
				messageContent: ''
			})
		}, 3000)
	},
	/** 
	*	找回密码和免费注册跳转
	*/
	forgotpwd: function(){
		wx.navigateTo({
			url: '../argee/argee',
		})
	},
	register: function(){
		wx.navigateTo({
			url: "../register/register",
		})
	}

})