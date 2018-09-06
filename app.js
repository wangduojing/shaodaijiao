//app.js star
App({
    onLaunch: function() {
        // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

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
		headerDto: null,
		userInfo: null
	},
	// 缓存登录信息
	cacheHeader: function (headerDto) {
		wx.setStorageSync(headerKey, headerDto)
	},
	// 获取缓存的登录信息
	getHeader: function () {
		return wx.getStorageSync(headerKey);
	},
	// 发起请求封装
	httpsRequest: function (url, params) {
		var returnData = null;
		wx.request({
			url: this.globalData.requestUrl + url,
			data: { 'json': "{'reqHeader':{" + this.globalData.headerDto + "},'reqBodyDto':{" + params + "}}" },
			method: 'POST',
			responseType: 'text',
			dataType: 'json',
			async: false,
			header: { "Content-Type": "application/x-www-form-urlencoded" },
			success: function (res) {
				console.log("返回的数据" + res.data);
				returnData = res.data;
			},
			fail: function (res) {
				returnData = res.data;
			},
			complete: function () {
				returnData = "这里还不知道怎么处理";
			}
		})
		return returnData;
	}
})