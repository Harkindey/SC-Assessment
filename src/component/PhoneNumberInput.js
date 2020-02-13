import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import validator from '../lib/validator';

function PhoneNumberInput() {
	const [phone, setPhone] = useState({
		value: '',
		error: false,
		message: '',
	});
	const onChange = value => {
		setPhone(prev => {
			return { ...prev, value };
		});
	};

	const validate = () => {
		if (!validator.isPhoneNumber(phone.value)) {
			setPhone(prevState => {
				return {
					...prevState,
					message:
						'Phone number should starts with 070..., 080..., 090..., 081 and contain 11 characters*',
					error: true,
				};
			});
		} else {
			setPhone(prevState => {
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
			label="phone-number"
			type="text"
			validator={validate}
			onChange={onChange}
			value={phone.value}
			message={phone.message}
			error={phone.error}
		/>
	);
}

PhoneNumberInput.propTypes = {};

export default PhoneNumberInput;
