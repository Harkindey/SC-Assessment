import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

function EmailInput() {
	const [email, setEmail] = useState({
		value: '',
		error: false,
		message: '',
	});
	console.log(email);
	const onChange = value => {
		setEmail(prev => {
			return { ...prev, value };
		});
	};

	const validateEmail = () => {
		var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		if (!expr.test(email.value)) {
			setEmail(prevState => {
				return {
					...prevState,
					message: 'Invalid email address*',
					error: true,
				};
			});
		} else {
			setEmail(prevState => {
				return {
					...prevState,
					message: '',
					error: false,
				};
			});
		}
	};
	return (
		<Input
			label="email"
			validator={validateEmail}
			onChange={onChange}
			value={email.value}
			message={email.message}
			error={email.error}
		/>
	);
}

EmailInput.propTypes = {};

export default EmailInput;
