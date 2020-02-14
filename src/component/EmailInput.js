import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import validator from '../lib/validator';
import { isEmpty } from 'lodash';

function EmailInput(props) {
	const { submitStatus } = props;
	const [email, setEmail] = useState({
		value: '',
		error: false,
		message: '',
	});

	useEffect(
		() => {
			if (isEmpty(email.value)) {
				submitStatus(true);
			} else if (!isEmpty(email.value) && email.error) {
				submitStatus(true);
			} else if (!isEmpty(email.value) && !email.error) {
				submitStatus(false);
			}
		},
		[email.error, email.value]
	);

	const onChange = value => {
		setEmail(prev => {
			return { ...prev, value };
		});
	};

	const validate = () => {
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
			validator={validate}
			onChange={onChange}
			value={email.value}
			message={email.message}
			error={email.error}
			other={{ type: 'email', placeholder: 'abc@abc.com' }}
		/>
	);
}

EmailInput.propTypes = {};

export default EmailInput;
