// pages/publish/trip/pulish_trip.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
		
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
    onShareAppMessage: function() {

    },
	/**
	 * 点击立即发布按钮
	 */
	publish_cargo:function(){
		var request = require('../../../utils/request')
		request.publish_cargo("{'pcType':'2','pcSenderName':'24'}").then(resData => {
			console.log(resData.data)
			var resCode = resData.data.stateCode
			if (resCode == 200){
				// 发布成功 提示信息并跳转页面
				
			} else if (resCode == 302){
				//未登录状态  跳转登录页面
				wx.redirectTo({
					url: '../../login/login',
				})
			} else{
				//其他:500报错 101参数校验失败等

			}
		});
	}
})