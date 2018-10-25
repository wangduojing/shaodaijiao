// pages/personalcenter/personalinformation/personalinformation.js
var request = require('../../../utils/request') // 请求js文件
Page({

  /**
   * 页面的初始数据
   */
  data: {
	  showsexpick: false,
	  showgender: ["", "男", "女"],
	  sexValue: [],
	  value:"5",
	  personProfile: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  request.personal_infor("{}").then(resData => {
		  console.log(resData.data.resBodyDto);
		console.log(resData)
		if (resData.data.stateCode == 302){
			wx.redirectTo({
				url: '../../login/login',
			})
		}else{
			//就是可以看到信息了
			console.log(resData.data.resBodyDto != null);
			if (resData.data.resBodyDto != null){
				this.setData({
					personProfile: resData.data.resBodyDto
				})
			}
			console.log(resData.data.resBodyDto.rpAgePeriod)
		}

	  })
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
   * 点击选择性别
   */
	sexpick:function(){
		this.setData({
			showsexpick: true,
		})
	},
	/**
	 * pick的确定取消
	 */
	pickerCancel:function(){
		this.setData({
			showsexpick: false,
			// sexValue: this.data.sexgender
		})
	},
	pickerSure:function(e){
		this.setData({
			showsexpick: false,
		})
	},
	sexbindchange:function(e){		
		this.setData({
			sexValue: this.data.sexgender[e.detail.value]
		})
	}

})