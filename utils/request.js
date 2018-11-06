// 所有请求发起都调用这个文件中的函数
// 定义所有请求地址
var url = {
	usr_register: '/usr/reg', // 注册
	usr_login: '/usr/gin', // 登录
	publish_contactlist: '/pub/list', // 常用联系人列表
	code_register: '/code/reg', // 注册获取短信验证码
	code_forget_password: '/code/mpl',//忘记密码获取短信验证码
	quick_login: '/usr/sin', // 快捷登录
	forget_password: '/usr/fpd',// 忘记密码
	publish_cargo: '/pub/pci',// 发布货源
	cargo_list: '/pub/carry',// 我要捎货
	personal_infor:'/role/qpp'//查询个人资料
	// /role/mpp //修改个人资料
	// /role/arp //添加个人资料
	// /role/qtp //查询他人资料


}

// 注册获取验证码
function code_register (params) {
	return getApp().httpsRequestSync(url.code_register, params)//返回的值是'使用全局getApp() 函数可以用来获取到小程序.app.js里的请求方法httpsRequest()',两个参数对应httpsRequest(a,b,c)前两个参数
}
// 注册请求
function user_register (params) {
	return getApp().httpsRequestSync(url.usr_register, params)
}
// 登录请求
function user_login(params) {
	return getApp().httpsRequestSync(url.usr_login, params)
}
// 快捷登录
function quick_login(params) {
	return getApp().httpsRequestSync(url.quick_login, params)
}
// 常用联系人列表
function publish_contactlist (params, success) {
	return getApp().httpsRequest(url.publish_contactlist, params, success)
}
//忘记密码:获取验证码
function code_forget_password(params) {
	return getApp().httpsRequestSync(url.code_forget_password, params)
}
//忘记密码:提交
function forget_password(params) {
	return getApp().httpsRequestSync(url.forget_password, params)
}

// 发布订单:提交
function publish_cargo(params){
	return getApp().httpsRequestSync(url.publish_cargo, params)
}

// 我要捎货
function cargo_list(params) {
	return getApp().httpsRequestSync(url.cargo_list, params)
}

//个人资料
function personal_infor(params){
	return getApp().httpsRequestSync(url.personal_infor, params)
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
	publish_cargo: publish_cargo,
	cargo_list: cargo_list,
	personal_infor: personal_infor
}