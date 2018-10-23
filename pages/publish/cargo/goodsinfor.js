// pages/publish/cargo/goodsinfor.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        goods_type: [
            "文件/证件", "手机数码", "服装配饰", "生鲜水果", "食品饮料", "海鲜水产", "鲜花礼品", "蛋糕", "大件物品", "其他"
        ],
        price: [
            "50元以下", "50~100元", "100~300元", "300~500元", "500~1000元", "1000元以上"
        ],
		active: true,
		rangeinput: true,
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
	 * 物品体积固定范围
	 */
    fixed: function() {	
		active: true	
		this.setData({
			active : false,
			rangeinput: true
		})
    },
	range: function(){
		this.setData({
			active: false,
			rangeinput: false
		})
	}
})