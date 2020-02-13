import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import validator from '../lib/validator';

function PasswordInput() {
	const [password, setPassword] = useState({
		value: '',
		error: false,
		message: '',
	});

	const [confirmPassword, setConfirmPassword] = useState({
		value: '',
		error: false,
		message: '',
	});
	const onChange = type => value => {
		if (type === 'password')
			return setPassword(prev => {
				return { ...prev, value };
			});
		if (type === 'confirmPassword')
			return setConfirmPassword(prev => {
				return { ...prev, value };
			});
	};

	const validate = type => () => {
		if (type === 'password') {
			if (!validator.isPassword(password.value)) {
				setPassword(prevState => {
					return {
						...prevState,
						message:
							'Password must contain at least 1 uppercase character,1 number, 1 special character and not shorter than 6 characters*',
						error: true,
					};
				});
			} else {
				setPassword(prevState => {
					return {
						...prevState,
						message: '',
						error: false,
					};
				});
			}
		}

		if (type === 'confirmPassword') {
			if (
				!validator.confirmPassword(
					password.value,
					confirmPassword.value
				)
			) {
				setConfirmPassword(prevState => {
					return {
						...prevState,
						message: 'Password is not the same*',
						error: true,
					};
				});
			} else {
				setConfirmPassword(prevState => {
					return {
						...prevState,
						message: '',
						error: false,
					};
				});
			}
		}
	};
	return (
		<>
			<Input
				label="password"
				type={'password'}
				validator={validate('password')}
				onChange={onChange('password')}
				value={password.value}
				message={password.message}
				error={password.error}
			/>
			<Input
				label="confirm-password"
				type="password"
				validator={validate('confirmPassword')}
				onChange={onChange('confirmPassword')}
				value={confirmPassword.value}
				message={confirmPassword.message}
				error={confirmPassword.error}
			/>
		</>
	);
}

PasswordInput.propTypes = {};

export default PasswordInput;
