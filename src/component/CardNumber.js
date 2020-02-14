import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import Input from './Input';
import validator from '../lib/validator';

function CardNumberInput(props) {
	const { submitStatus } = props;
	const [cardNumber, setCardNumber] = useState({
		value: '',
		error: false,
		message: '',
	});

	useEffect(
		() => {
			if (isEmpty(cardNumber.value)) {
				submitStatus(true);
			} else if (!isEmpty(cardNumber.value) && cardNumber.error) {
				submitStatus(true);
			} else if (!isEmpty(cardNumber.value) && !cardNumber.error) {
				submitStatus(false);
			}
		},
		[cardNumber.error, cardNumber.value]
	);

	const onChange = value => {
		let regExp = /^[\d\s]{0,19}$/;
		if (cardNumber.value.length > value.length) {
			return setCardNumber(prev => {
				return { ...prev, value };
			});
		}
		if (regExp.test(value)) {
			if (value.length === 5) {
				let output = [value.slice(0, 4), ' ', value.slice(4)].join('');
				return setCardNumber(prev => {
					return { ...prev, value: output };
				});
			}
			if (value.length === 10) {
				let output = [value.slice(0, 9), ' ', value.slice(9)].join('');
				return setCardNumber(prev => {
					return { ...prev, value: output };
				});
			}

			if (value.length === 15) {
				let output = [value.slice(0, 14), ' ', value.slice(14)].join(
					''
				);
				return setCardNumber(prev => {
					return { ...prev, value: output };
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
