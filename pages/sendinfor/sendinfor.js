var area = require('../../data/area')
var p = 0, c = 0, d = 0
Page({
	data: {
		provinceName: [],
		provinceCode: [],
		provinceSelIndex: '',
		cityName: [],
		cityCode: [],
		citySelIndex: '',
		districtName: [],
		districtCode: [],
		districtSelIndex: '',
		showMessage: false,
		messageContent: '',
		showDistpicker: false,

		showView: true,
		contactList: []
	},
	onLoad: function (options) {
		// 初始化数据
		showView: (options.showView == 'true' ? true : false)
		this.setAreaData()
	},
	showHide: function () {//是常用信息后面按钮显示隐藏
		var that = this;
		that.setData({
			showView: (!that.data.showView)
		})
	},
	radioChange: function (e) {//常用信息
		console.log('radio发生change事件，携带value值为：', e.detail.value)
	},
	setAreaData: function (p, c, d) {
		var p = p || 0 // provinceSelIndex
		var c = c || 0 // citySelIndex
		var d = d || 0 // districtSelIndex
		// 设置省的数据
		var province = area['100000']
		var provinceName = [];
		var provinceCode = [];
		for (var item in province) {
			provinceName.push(province[item])
			provinceCode.push(item)
		}
		this.setData({
			provinceName: provinceName,
			provinceCode: provinceCode
		})
		// 设置市的数据
		var city = area[provinceCode[p]]
		var cityName = [];
		var cityCode = [];
		for (var item in city) {
			cityName.push(city[item])
			cityCode.push(item)
		}
		this.setData({
			cityName: cityName,
			cityCode: cityCode
		})
		// 设置区的数据
		var district = area[cityCode[c]]
		var districtName = [];
		var districtCode = [];
		for (var item in district) {
			districtName.push(district[item])
			districtCode.push(item)
		}
		this.setData({
			districtName: districtName,
			districtCode: districtCode
		})
	},
	changeArea: function (e) {
		p = e.detail.value[0]
		c = e.detail.value[1]
		d = e.detail.value[2]
		this.setAreaData(p, c, d)
	},
	showDistpicker: function () {
		this.setData({
			showDistpicker: true
		})
	},
	distpickerCancel: function () {
		this.setData({
			showDistpicker: false
		})
	},
	distpickerSure: function () {
		this.setData({
			provinceSelIndex: p,
			citySelIndex: c,
			districtSelIndex: d
		})
		this.distpickerCancel()
	},
	savePersonInfo: function (e) {
		var data = e.detail.value
		var telRule = /^1[3|4|5|7|8]\d{9}$/
		if (data.name == '') {
			this.showMessage('请输入姓名')
		} else if (data.tel == '') {
			this.showMessage('请输入手机号码')
		} else if (!telRule.test(data.tel)) {
			this.showMessage('手机号码格式不正确')
		} else if (data.province == '') {
			this.showMessage('请选择所在地区')
		} else if (data.city == '') {
			this.showMessage('请选择所在地区')
		} else if (data.district == '') {
			this.showMessage('请选择所在地区')
		} else if (data.address == '') {
			this.showMessage('请输入详细地址')
		} else {
			this.showMessage(' 下单成功')
			console.log(data)//打印所有数据
			wx.navigateTo({//成功跳往另一个页面
				url: '../logs/logs',
			})
		}
	},
	showMessage: function (text) {
		var that = this
		that.setData({
			showMessage: true,
			messageContent: text
		})
		setTimeout(function () {
			that.setData({
				showMessage: false,
				messageContent: ''
			})
		}, 3000)
	},
	getContact: function () {
		wx.addPhoneContact({//获取通讯录
			success: function (e) {
				console.log("ss")
			}

		})
	},
	onReady: function () {
		var request = require('../../utils/request')
		// request.contactlist("{'name':'张三','age':'24'}").then(resData => {
		// 	this.setData({
		// 		contactList: resData.data.resBodyDto.rearchContactsList//把数据赋值给contactList
		// 	})
		// });
	}
})