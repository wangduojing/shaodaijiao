// pages/personalcenter/personal_receiveorder/personal_orderinfor_map.js
// 引入SDK核心类
var QQMapWX = require('../../../utils/qqmap-wx-jssdk.js');
var qqmapsdk;
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		progersstime: true,
		goodsinfor: true,
		startAddress:'丰台区草桥地铁站',
		endAddress:'北京市大兴区中电金扬科技园',
		distanceLength:'',
		gpsaddress: '',
		startlng: '',
		startlat: '',
		endlng: '',
		endlat: '',
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		progersstime: (options.progersstime == 'true' ? true : false)
		goodsinfor: (options.progersstime == 'true' ? true : false)

	
		// 实例化API核心类
		qqmapsdk = new QQMapWX({
			key: 'D6CBZ-D7PHQ-G7L54-GZJKF-B3PDK-MZBR4' // 必填
		});
		

		//发件人和收件人的位置,获取经纬度
		var _this = this;
		qqmapsdk.search({
			keyword: function () {
				keyword: '丰台区草桥地铁站'
			},
			success: function (res) {
				_this.setData({
					startlat: res.data[0].location.lat,
					startlng: res.data[0].location.lng
				})
				
				console.log(res.data[0].location);

				// 调用接口
				qqmapsdk.calculateDistance({
					to: [{
						latitude: 49.984572,
						longitude: 116.306339
					}, {
						latitude: 39.984572,
						longitude: 116.306339
					}],
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
			fail: function (res) {
				console.log(res);
			},
			complete: function (res) {
				// console.log(res);
			}
		});


	

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
	 * 订单进度折叠
	 */
	lookprogersstime: function () {
		this.setData({
			progersstime: (!this.data.progersstime)
		})
	},
	/**
	 * 物品信息折叠
	 */
	lookgoodsinfor: function () {
		this.setData({
			goodsinfor: (!this.data.goodsinfor)
		})
	},
	/**
	 * 地图
	 */
	driving: function () {
		var _this = this;
		//网络请求设置
		var opt = {
			//WebService请求地址，from为起点坐标，to为终点坐标，开发key为必填
			url: 'https://apis.map.qq.com/ws/direction/v1/driving/?from=39.989221,116.306076&to=39.828050,116.436195&key=D6CBZ-D7PHQ-G7L54-GZJKF-B3PDK-MZBR4',
			method: 'GET',
			dataType: 'json',
			//请求成功回调
			success: function (res) {
				var ret = res.data
				if (ret.status != 0) return; //服务异常处理
				var coors = ret.result.routes[0].polyline, pl = [];
				//坐标解压（返回的点串坐标，通过前向差分进行压缩）
				var kr = 1000000;
				for (var i = 2; i < coors.length; i++) {
					coors[i] = Number(coors[i - 2]) + Number(coors[i]) / kr;
				}
				//将解压后的坐标放入点串数组pl中
				for (var i = 0; i < coors.length; i += 2) {
					pl.push({ startlatitude: coors[i], longitude: coors[i + 1] })
				}
				//设置polyline属性，将路线显示出来
				_this.setData({
					polyline: [{
						points: pl,
						color: '#FF0000DD',
						width: 4
					}]
				})
			}
		};
		wx.request(opt);
	}
})
