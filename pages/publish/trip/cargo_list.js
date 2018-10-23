// pages/publish/trip/cargo_list.js
Page({

    /**
     * 页面的初始数据
     */
	data: {
		cargoList: [],
		publishType: ['', '普通捎', '急捎'],
		publishTypeClass: ['', 'item_body_one_left_p', 'item_body_one_left_j'],
		publishFileType: ['其他', '文件/证件', '手机数码', '服装配饰', '生鲜果蔬', '食品饮料', '海鲜水产', '鲜花礼品', '蛋糕', '大件物品']
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
			this.setData({
				cargoList: resData.data.resBodyDto.carryCargoList //把数据赋值给contactList
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

	},

    /**
     * 跳转发布页
     */
	to_publish: function () {
		wx.navigateTo({
			url: 'pulish_trip',
		})
	},

	/**
	 * 点击抢单或我要接单
	 */
	click_order: function (e) {
		var itemCargo = e.currentTarget.dataset.item;
		var serviceType = itemCargo.pcType;
		var cargoId = itemCargo.pcId;
		if (serviceType == 1) {
			// 普通捎

		} else {
			// 急捎

		}
	}
})