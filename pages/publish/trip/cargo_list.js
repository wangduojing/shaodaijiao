// pages/publish/trip/cargo_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
	  cargoList: []
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
	  var request = require('../../../utils/request')
	  request.cargo_list("{'pageSize': 10, 'currentPage': 1}").then(resData => {
		  console.log(resData);
		  this.setData({
			  cargoList: resData.data.resBodyDto.carryCargoList//把数据赋值给contactList
		  })
	  });
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

  }
})