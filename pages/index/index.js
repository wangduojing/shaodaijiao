// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
		marquee:['biangbiang**从北京到天津给王**捎带了文件', '李**从北京到天津给王**捎带了文件']
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
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
	onShareAppMessage: function (res) {
		if (res.from === 'button') {
			// 来自页面内转发按钮
			console.log(res.target)
		}
		return {
			title: '捎带脚,稍快一步',
			path: '/page/user?id=123'
		}
	},
	/**
	 * 我要发货和我要捎货按钮链接
	 */
	cargoButton: function () {
		wx.navigateTo({
			url: "../publish/trip/trip_list",
		})
	},
	carryButton: function () {
		wx.navigateTo({
			url: "../publish/trip/cargo_list",
		})
	},
})