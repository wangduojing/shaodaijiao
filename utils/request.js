// 所有请求发起都调用这个文件中的函数
// 定义所有请求地址
var url = {
	register: '/usr/gis',
	login: '/usr/gin',
	contactlist: '/wpc/list'
}
// 注册请求
function user_register (params) {
	return getApp().httpsRequest(url.register, params);
}
// 登录请求
function user_login(params) {
	return getApp().httpsRequest(url.login, params);
}
// 常用联系人列表
function publish_contactlist (params) {
	return getApp().httpsRequest(url.contactlist, params);
}

// 暴露方法
module.exports = {
	register: user_register,
	login: user_login,
	contactlist: publish_contactlist
}