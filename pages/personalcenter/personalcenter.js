// pages/personalcenter/personalcenter.js
var request = require('../../utils/request') // 请求js文件
Page({

  /**
   * 页面的初始数据
   */
  data: {
	  accepttype:["未认证"],
	  sex: ["♂","♀"]
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
   * 跳转个人资料页面
   */
	personalinformation:function(){
		wx.redirectTo({
			url: 'personalinformation/personalinformation',
		})
	},
	/**
	 * 跳转我接的单
	 */
	receive_order: function () {
		wx.redirectTo({
			url: 'personal_receiveorder/personal_receiveorder',
		})
	},
	/**
	 * 跳转我发的单
	 */
	send_order: function () {
		wx.redirectTo({
			url: 'personal_sendorder/personal_sendorder',
		})
	},
	
	/**
	 * 跳转我的行程
	 */
	my_trip: function () {
		wx.redirectTo({
			url: 'personal_trip/personal_trip',
		})
	}
})