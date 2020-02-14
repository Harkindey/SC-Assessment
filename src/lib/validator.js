export default {
	isGreaterThanTwo: str => {
		return str.length >= 2;
	},
	isPassword: password => {
		let regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!_%*?&]{6,}$/;
		return regExp.test(String(password));
	},
	confirmPassword: (password, confirmPassword) => {
		return password === confirmPassword;
	},
	isPin: pin => {
		let regExp = /^\d{4}$/;
		return regExp.test(Number(pin));
	},
	isPhoneNumber: number => {
		let regExp = /^0((8[0|1])|([7|9]0))\d{8}$/;
		return regExp.test(String(number)) && number;
	},
	isOnlyNumber: number => {
		let regExp = /[0-9]/;
		return regExp.test(Number(number)) && number;
	},
	isEmail: email => {
		let expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		return expr.test(String(email).toLowerCase()) && email;
	},
	isFullName: text => {
		let regExp = /^[a-zA-Z]+ [a-zA-Z]+$/;
		return regExp.test(String(text));
	},
	isCreditCard: text => {
		let regExp = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14})$/;
		return regExp.test(String(text));
	},
	isDate: text => {
		let regExp = /^([0][1-9]|1[0-2])\/([2-9][0-9])$/;
		return regExp.test(String(text));
	},
};
