// pages/publish/cargo/fastpublish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
	  items: [
		  {value: '飞机' },
		  {value: '高铁', checked: 'true' },
		  {value: '客车' },
		  {value: '私家车' },
		  {value: '电动车' },
		  {value: '自行车' },
		  {value: '人' },
	  ]
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
   * 配送工具radio
   */
	radioChange: function (e) {
		console.log('radio发生change事件，携带value值为：', e.detail.value)
	}
})