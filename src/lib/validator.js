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
};
