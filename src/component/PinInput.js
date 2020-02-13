import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import validator from '../lib/validator';

function PinInput() {
	const [pin, setPin] = useState({
		value: '',
		error: false,
		message: '',
	});
	const onChange = value => {
		let regex = /^\d{0,4}$/;
		if (regex.test(value)) {
			setPin(prev => {
				return { ...prev, value };
			});
		}
	};

	const validate = () => {
		if (!validator.isPin(pin.value)) {
			setPin(prevState => {
				return {
					...prevState,
					message: 'Pin should have 4 numbers *',
					error: true,
				};
			});
		} else {
			setPin(prevState => {
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
			label="pin"
			validator={validate}
			onChange={onChange}
			value={pin.value}
			message={pin.message}
			error={pin.error}
			other={{ type: 'password' }}
		/>
	);
}

PinInput.propTypes = {};

export default PinInput;
