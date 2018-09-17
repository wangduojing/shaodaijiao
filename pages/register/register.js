// pages/login/login.js
var request = require('../../utils/request') // 请求js文件
var validate = require('../../utils/validate') // 验证js文件
Page({

    /**
     * 页面的初始数据
     */
    data: {
		showMessage: false,
		messageContent: '',
		phone:'',
		code:'',
		password:'',
		staticImg: true,
		waittime:'获取验证码',
		currentTime : 60,
		disabled: false
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
			phone: e.detail.value = ""
		})
		
    },
	clearPwd:function(e){
		this.setData({
			password: e.detail.value = ""
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
		// 获取验证码按钮不可点击,倒计时结束后才可再次点击
		var flag = validate.check_phone(this.data.phone);
		if(!flag){
			this.showMessage('请输入正确手机号码')
			return;
		}
		var that = this
		var timevalue = "秒重新发送"
		var currentTime = that.data.currentTime
		that.setData({
			waittime: currentTime + timevalue,
			disabled: true//点击后 按钮灰置不可再点击
		})
		var interval = setInterval(function(){
			that.setData({
				waittime: (currentTime - 1) +"秒重新发送"
			})
			currentTime--
		
		if (currentTime <= 0){
			clearInterval(interval)
			that.setData({
				waittime: "重新获取验证码",
				disabled: false
			})
		}
		},1000)
		// 发送验证码请求
		request.code_register("{'phone': " + this.data.phone + "}").then(resData => {
			this.showMessage(resData.data.message)
		});
	},
	/** 
	*	验证文本框
	*/
	check_submitInfo: function (e) {
		// 提交信息验证
		var phone = e.detail.value.phone
		var code = e.detail.value.code
		var password = e.detail.value.password
		var flag1 = validate.check_phone(phone);
		var flag2 = validate.check_code(code);
		var flag3 = validate.check_password(password);
		if(!flag1){
			this.showMessage('请输入正确手机号码')
			return
		}
		if(!flag2){
			this.showMessage('请输入正确验证码')
			return
		}
		if (!flag3) {
			this.showMessage('密码不符合规范')
			return
		}
		// 发起请求
		var requestParams = "{'phone':"+phone+",'code':'"+code+"','password':'"+password+"'}"
		request.user_register(requestParams).then(resData => {
			console.log(resData);
			if(resData.data.stateCode != 200){
				this.showMessage(resData.data.message)
				return
			}
			// 缓存登录信息
			getApp().cacheHeader(JSON.stringify(resData.data.resHeadDto));
			// 跳转注册成功页面
			wx.navigateTo({
				url: '../register/success/registersuccess',
			})
		})
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
	// 获取input框输入值
	input_phone: function (e) {
		this.setData({
			phone: e.detail.value
		})
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