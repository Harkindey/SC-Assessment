import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import validator from '../lib/validator';
import { isEmpty } from 'lodash';

function PhoneNumberInput(props) {
	const { submitStatus } = props;
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

	useEffect(
		() => {
			if (isEmpty(phone.value)) {
				submitStatus(true);
			} else if (!isEmpty(phone.value) && phone.error) {
				submitStatus(true);
			} else if (!isEmpty(phone.value) && !phone.error) {
				submitStatus(false);
			}
		},
		[phone.error, phone.value]
	);

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
			validator={validate}
			onChange={onChange}
			value={phone.value}
			message={phone.message}
			error={phone.error}
			other={{
				type: 'text',
				placeholder: '070..., 080..., 090..., 081...',
			}}
		/>
	);
}

PhoneNumberInput.propTypes = {};

export default PhoneNumberInput;
