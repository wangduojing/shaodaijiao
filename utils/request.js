// 所有请求发起都调用这个文件中的函数
// 定义所有请求地址
var url = {
	usr_register: '/usr/reg', // 注册
	usr_login: '/usr/gin', // 登录
	publish_contactlist: '/wpc/list', // 常用联系人列表
	code_register: '/code/reg', // 注册获取短信验证码
	code_forget_password: '/code/mpl',//忘记密码获取短信验证码
	quick_login: '/usr/sin', // 快捷登录
	forget_password: '/usr/fpd',// 忘记密码
	publish_cargo: '/pub/pci'// 发布货源

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
// 快捷登录
function quick_login(params) {
	return getApp().httpsRequest(url.quick_login, params)
}
// 常用联系人列表
function publish_contactlist (params) {
	return getApp().httpsRequest(url.publish_contactlist, params)
}
//忘记密码:获取验证码
function code_forget_password(params) {
	return getApp().httpsRequest(url.code_forget_password, params)
}
//忘记密码:提交
function forget_password(params) {
	return getApp().httpsRequest(url.forget_password, params)
}

// 发布订单:提交
function publish_cargo(params){
	return getApp().httpsRequest(url.publish_cargo, params)
}


// 缓存储存
var storageKeys = {
	key_publish_sender_address: 'key_publish_sender_address'//缓存发件人地址
}

// 暴露方法
module.exports = {
	code_register: code_register,
	user_register: user_register,
	user_login: user_login,
	quick_login: quick_login,
	publish_contactlist: publish_contactlist,
	code_forget_password: code_forget_password,
	forget_password: forget_password,
	publish_cargo: publish_cargo
}