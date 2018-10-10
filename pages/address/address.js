// pages/address/address.js
// 引入SDK核心类
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk;

Page({

    /**
     * 页面的初始数据
     */
    data: {
        address: [{
                addressMain: "嘉华大厦",
                addressInformation: "海淀区上地三街11110号"
            }
        ],
		// addressMain: "",
		addressMain: "嘉华大厦",
		addressInformation: "海淀区上地三街11110号",
		searchValue:''

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
	nearby_search: function () {
		var _this = this;
		// 调用接口
		qqmapsdk.search({
			keyword: '荣京',  //搜索关键词
			location: '39.980014,116.313972',  //设置周边搜索中心点
			success: function (res) { //搜索成功后的回调
				
				
				var mks = []
				for (var i = 0; i < res.data.length; i++) {
					mks.push({ // 获取返回结果，放到mks数组中
						title: res.data[i].title,
						id: res.data[i].id,
						latitude: res.data[i].location.lat,
						longitude: res.data[i].location.lng,
						// addressTitle: res.data[i].title,   // 搜索地址标题
						// addressInformation: res.data[i].address, // 搜索地址详情
						// iconPath: "/resources/my_marker.png", // 图标路径
						// width: 20,
						// height: 20
					})
					
				}
				_this.setData({ //设置markers属性，将搜索结果显示在地图中
					markers: mks,

				})
				console.log(addressMain)
			},
			fail: function (res) {
				console.log(res);
			},
			complete: function (res) {
				console.log(res);
			}
		});
	}
})