// 所有请求发起都调用这个文件中的函数
// 定义所有请求地址
var url = {
	usr_register: '/usr/reg',
	usr_login: '/usr/gin',
	publish_contactlist: '/wpc/list',
	code_register: '/code/reg'
}
// 注册获取验证码
function code_register (params) {
	return getApp().httpsRequest(url.code_register, params)
}
// 注册请求
function user_register (params) {
	return getApp().httpsRequest(url.usr_register, params)
}
// 登录请求
function user_login(params) {
	return getApp().httpsRequest(url.usr_login, params)
}
// 常用联系人列表
function publish_contactlist (params) {
	return getApp().httpsRequest(url.publish_contactlist, params)
}
// 暴露方法
module.exports = {
	code_register: code_register,
	user_register: user_register,
	user_login: user_login,
	publish_contactlist: publish_contactlist
}