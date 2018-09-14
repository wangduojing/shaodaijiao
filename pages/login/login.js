// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
		showMessage: false,
		messageContent: '',
		tel:'',
		pwd:'',
		staticImg: true,
		waittime:'获取验证码',
		currentTime : 60,
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
	*	点击清除文本框的内容
	*/
	clearAll: function(e) {
		this.setData({
			tel: e.detail.value = ""
		})
		
    },
	clearPwd:function(e){
		this.setData({
			pwd: e.detail.value = ""
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
	 * 获取验证码
	 */
	getmobilecode: function(e){
		var that = this
		var timevalue = "秒重新发送"
		var currentTime = that.data.currentTime
		that.setData({
			waittime: currentTime + timevalue
		})
		var interval = setInterval(function(){
			that.setData({
				waittime: (currentTime - 1) +"秒重新发送"
			})
			currentTime--
		
		if (currentTime <= 0){
			clearInterval(interval)
			that.setData({
				waittime: "重新获取验证码"
			})
		}
		},1000)
	},
	/** 
	*	验证文本框
	*/
	signPersonInfo: function (e) {
		var data = e.detail.value
		var telRule = /^1[3|4|5|7|8]\d{9}$/
		if (data.tel == '') {
			this.showMessage('请输入手机号码')
		} else if (!telRule.test(data.tel)) {
			this.showMessage('手机号码格式不正确')
		} else if (data.name == '') {
			this.showMessage('请输入验证码')
		} else if (data.name == '什么什么') {
			this.showMessage('验证码不正确')
		} else if (data.pwd == '') {
			this.showMessage('请输入密码')
		} else {
			this.showMessage('注册成功')
			console.log(data)//打印数据
			wx.navigateTo({
				url: '../logs/logs',
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
	*	协议跳转
	*/
	deal: function(){
		wx.navigateTo({
			url: '../argee/argee',
		})
	}

})