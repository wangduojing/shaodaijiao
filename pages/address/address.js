// pages/address/address.js
// 引入SDK核心类
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk;

Page({

    /**
     * 页面的初始数据
     */
    data: {
        address: [],
		searchValue:'',
		istext: false,
		searchKey: ''

    },

    /**
     * 生命周期函数--监听页面加载
     */
	onLoad: function () {
		// 实例化API核心类
		qqmapsdk = new QQMapWX({
			key: 'D6CBZ-D7PHQ-G7L54-GZJKF-B3PDK-MZBR4'
		});
	},
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
		var _this = this;
		// 调用接口
		qqmapsdk.search({
			keyword: "荣京",  //搜索关键词
			location: '39.980014,116.313972',  //设置周边搜索中心点
			success: function (res) { //搜索成功后的回调				
				console.log(res);
				_this.setData({
					address: res.data
				})
			},
			fail: function (res) {
				console.log(res);
			},
			complete: function (res) {
				//console.log(res);
			}
		});
    },

    /**
     * 生命周期函数--监听页面显示
     */
	onShow: function () {
		// 调用接口
		qqmapsdk.search({
			keyword: function(){
				keyword:searchValue	
			},
			success: function (res) {
				console.log(res);
			},
			fail: function (res) {
				console.log(res);
			},
			complete: function (res) {
				console.log(res);
			}
		});


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
	 * 搜索栏后面的取消图标按钮
	 */
    clearValue:function(){
		this.setData({
			searchValue : ''
		})
		
	},
	clickSearchView: function () {
		this.setData({
			istext: true,
		});
	},

	bindKeyInput: function (e) {
		console.log(e);
		this.setData({
			searchKey: e.detail.value
		})
	},

	clickSearch: function (e) {
		var that = this;
		var keywords = that.data.searchKey;
		if (keywords == "") {
			wx.showModal({
				title: '请输入搜索内容',
				confirmColor: '#e75858',
				showCancel: false,
			})
			return;
		}
		qqmapsdk.getSuggestion({
			keyword: keywords,
			success: function (res) {
				console.log('sucess', res);
			},
			fail: function (res) {
				console.log('fail', res);
			},
			complete: function (res) {
				console.log('complete', res);
				that.setData({
					address: res.data
				});
				if (that.data.address == []) {
					wx.showModal({
						title: '没有找到您想要的结果',
						confirmColor: "#E75858",
						showCancel: false,
					})
				}

			}
		})
	},

	didSelectCell: function (e) {
		// var pages = getCurrentPages();
		// var prevPage = pages[pages.length - 3];
		// console.log('didselectCell', e);
		// var index = e.currentTarget.dataset.index;
		// console.log('didselectCelldata', this.data.address[index]);
		// var locationData = this.data.address[index];
		// var latitude = locationData.location.lat//locationStr.split(',')[0]
		// var longitude = locationData.location.lng;//locationStr.split(',')[1]
		// prevPage.setData({
		// 	sendAddress: locationData.province + ',' + locationData.city + ',' + (locationData.district == undefined ? '' : locationData.district),
		// 	detailAddress: locationData.title == undefined ? '' : locationData.title,
		// 	address: locationData.province + '/' + locationData.city + (locationData.district == undefined ? '' : ('/' + locationData.district)),
		// 	location: longitude + ',' + latitude
		// })
		// var locationDic = { 'latitude': latitude, 'longitude': longitude };
		// wx.setStorage({
		// 	key: 'map_Location',
		// 	data: locationDic,
		// })
		// wx.navigateBack({
		// 	delta: 2
		// })


		console.log("ss");

	}
})