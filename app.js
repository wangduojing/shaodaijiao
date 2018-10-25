//app.js star
var request = require('/utils/request.js');
App({
    onLaunch: function() {
        // 展示本地存储能力
        // var logs = wx.getStorageSync('logs') || []
        // logs.unshift(Date.now())
        // wx.setStorageSync('logs', logs)
		if (this.getHeader() == null || this.getHeader() == ''){
			this.cacheHeader("{'channelName': '小程序','deviceId': '', 'accessToken': '', 'clientType': '3', 'appEdition': '111', 'channelId': '', 'account': ''}");
		}
        // 登录
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            }
        })
        // 获取用户信息
        wx.getSetting({
            success: res => {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                        success: res => {
                            // 可以将 res 发送给后台解码出 unionId
                            this.globalData.userInfo = res.userInfo

                            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                            // 所以此处加入 callback 以防止这种情况
                            if (this.userInfoReadyCallback) {
                                this.userInfoReadyCallback(res)
                            }
                        }
                    })
                }
            }
        })
    },
	globalData: {
		requestUrl: 'https://mb.dlada56.com',
		headerKey: 'wechat_sdj_header',
		headerDto: '',
		userInfo: ''
	},
	// 缓存登录信息
	cacheHeader: function (headerDto) {
		wx.setStorageSync(this.globalData.headerKey, headerDto)
	},
	// 获取缓存的登录信息
	getHeader: function () {
		return wx.getStorageSync(this.globalData.headerKey);
	},
	// 发起请求封装
	httpsRequest: function (url, params, functinName) {
		var returnData = null;
		var header = this.getHeader();
		url = this.globalData.requestUrl + url;//上面链接拼接后台给的请求地址url
		return new Promise(function (resolve, reject){//什么函数
			wx.request({//请求格式
				url: url,
				data: { 'json': "{'reqHeader':" + header + ",'reqBodyDto':" + params + "}" },
				method: 'POST',
				responseType: 'text',
				dataType: 'json',
				header: { "Content-Type": "application/x-www-form-urlencoded" },
				success: function (res) {
					resolve(res)
				},
				fail: function (res) {

				},
				complete: function () {
					returnData = "这里还不知道怎么处理";
				}
			})
		})
	}
})