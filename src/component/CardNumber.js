import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import validator from '../lib/validator';

function CardNumberInput() {
	const [cardNumber, setCardNumber] = useState({
		value: '',
		error: false,
		message: '',
		transformedValue: '',
	});

	const onChange = value => {
		let regExp = /^[\d\s]{0,19}$/;
		if (regExp.test(value)) {
			if (
				value.length === 4 ||
				value.length === 9 ||
				value.length === 14
			) {
				return setCardNumber(prev => {
					return { ...prev, value: value.concat(' ') };
				});
			}
			return setCardNumber(prev => {
				return { ...prev, value };
			});
		}
	};

	const validate = () => {
		if (!validator.isCreditCard(cardNumber.value)) {
			setCardNumber(prevState => {
				return {
					...prevState,
					message: 'Invalid Card Number*',
					error: true,
				};
			});
		} else {
			setCardNumber(prevState => {
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
			label="card-number"
			validator={validate}
			onChange={onChange}
			value={cardNumber.value}
			message={cardNumber.message}
			error={cardNumber.error}
			other={{ type: 'text', placeholder: 'xxxx xxxx xxxx xxxx' }}
		/>
	);
}

CardNumberInput.propTypes = {};

export default CardNumberInput;
