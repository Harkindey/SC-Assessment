import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import validator from '../lib/validator';

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

	const validator = () => {
		if (!validator.isEmail(email.value)) {
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
			validator={validator}
			onChange={onChange}
			value={email.value}
			message={email.message}
			error={email.error}
		/>
	);
}

EmailInput.propTypes = {};

export default EmailInput;
