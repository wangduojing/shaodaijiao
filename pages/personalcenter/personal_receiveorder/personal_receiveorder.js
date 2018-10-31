// pages/personalcenter/person_receiveorder/person_receiveorder.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		active1: true,
		active2: true,
		active3: true,
		active4: true,
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	},
	/**
	 * 最上面的titletype来回切换
	 */
	all: function(){
		this.setData({
			active1: true,
			active2: true,
			active3: true,
			active4: true
		})	
	},
	doing: function(){
		this.setData({
			active1: false,
			active2: false,
			active3: true,
			active4: true
		})	
	},
	already: function(){
		this.setData({
			active1: false,
			active2: true,
			active3: false,
			active4: true
		})	
	},
	failure: function(){
		this.setData({
			active1: false,
			active2: true,
			active3: true,
			active4: false
		})	
	},
	/**
	 * 订单详情跳转
	 */
	personal_orderinfor : function(){
		wx.redirectTo({
			url: 'personal_orderinfor',
		})
	}
})