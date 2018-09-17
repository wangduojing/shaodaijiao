// 验证手机号是否合法
function check_phone (phone) {
	if(phone.length != 11){
		return false;
	}
	if (!(/^1[34578]\d{9}$/.test(phone))){
		return false;
	}
	return true;
}
// 验证短信验证码是否合法
function check_code(code) {
	if (code.length != 4) {
		return false;
	}
	if (!(/^\d{4}$/.test(code))) {
		return false;
	}
	return true;
}
// 验证密码是否合法
function check_password(password) {
	if (password.length < 6 || password.length > 16) {
		return false;
	}
	if (!(/^[0-9a-zA-Z]+$/.test(password))) {
		return false;
	}
	return true;
}


// 暴露方法
module.exports = {
	check_phone: check_phone,
	check_code: check_code,
	check_password: check_password
}