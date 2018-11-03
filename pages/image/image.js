// pages/image/image.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
		image: ''
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
	 * 点击图片上传
	 */
	upload_image: function() {
		let _this = this;
		wx.showActionSheet({
			itemList: ['从相册中选择', '拍照'],
			itemColor: "#f7982a",
			success: function (res) {
				if (!res.cancel) {
					if (res.tapIndex == 0) {
						_this.chooseWxImage('album')
					} else if (res.tapIndex == 1) {
						_this.chooseWxImage('camera')
					}
				}
			}
		})
	},
	chooseWxImage: function (type) {
		let _this = this;
		wx.chooseImage({
			sizeType: ['original', 'compressed'],
			sourceType: [type],
			success: function (res) {
				wx.uploadFile({
					url: 'https://mb.dlada56.com/common/upImage',
					filePath: res.tempFilePaths[0],
					name: 'file',
					success(resData){
						// 注意在将json字符串转为json对象时，json字符串必须为双引号
						console.log("文件上传后地址:" + JSON.parse(resData.data).resBodyDto.path);
						// 上传成功后显示图片
						_this.setData({
							image: res.tempFilePaths[0]
						})
					}
				})
			}
		})
	}
})