import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import validator from '../lib/validator';
import { isEmpty } from 'lodash';

function DateInput(props) {
	const { submitStatus } = props;
	const [date, setDate] = useState({
		value: '',
		error: false,
		message: '',
	});

	useEffect(
		() => {
			if (isEmpty(date.value)) {
				submitStatus(true);
			} else if (!isEmpty(date.value) && date.error) {
				submitStatus(true);
			} else if (!isEmpty(date.value) && !date.error) {
				submitStatus(false);
			}
		},
		[date.error, date.value]
	);

	const onChange = value => {
		let regex = /^([0][1-9]?|1[0-2]?)?(\/([0-9][0-9]?))?$/;

		if (date.value.length > value.length) {
			return setDate(prev => {
				return { ...prev, value };
			});
		}

		if (value.length === 3 && !value.includes('/')) {
			let output = [value.slice(0, 2), '/', value.slice(2)].join('');
			return setDate(prev => {
				return { ...prev, value: output };
			});
		} else if (regex.test(value)) {
			return setDate(prev => {
				return { ...prev, value };
			});
		}
	};

	const validate = () => {
		if (!validator.isDate(date.value)) {
			setDate(prevState => {
				return {
					...prevState,
					message: 'Should be in MM/YY format*',
					error: true,
				};
			});
		} else {
			setDate(prevState => {
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
			label="date"
			validator={validate}
			onChange={onChange}
			value={date.value}
			message={date.message}
			error={date.error}
			other={{ type: 'text', placeholder: '05/20' }}
		/>
	);
}

DateInput.propTypes = {};

export default DateInput;
