import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import validator from '../lib/validator';
import { isEmpty } from 'lodash';
import Input from './Input';

function FullNameInput(props) {
	const { submitStatus } = props;
	const [fullName, setFullName] = useState({
		value: '',
		error: false,
		message: '',
	});

	useEffect(
		() => {
			if (isEmpty(fullName.value)) {
				submitStatus(true);
			} else if (!isEmpty(fullName.value) && fullName.error) {
				submitStatus(true);
			} else if (!isEmpty(fullName.value) && !fullName.error) {
				submitStatus(false);
			}
		},
		[fullName.error, fullName.value]
	);

	const onChange = value => {
		setFullName(prev => {
			return { ...prev, value };
		});
	};

	const validate = () => {
		if (
			(!validator.isFullName(fullName.value) && fullName.value) ||
			!validator.isGreaterThanTwo(fullName.value)
		) {
			setFullName(prevState => {
				return {
					...prevState,
					message:
						'Fullname must contain more than 2 characters with both FirstName and LastName*',
					error: true,
				};
			});
		} else {
			setFullName(prevState => {
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
			label="full-name"
			validator={validate}
			onChange={onChange}
			value={fullName.value}
			message={fullName.message}
			error={fullName.error}
			other={{ type: 'text', placeholder: 'John Doe' }}
		/>
	);
}

FullNameInput.propTypes = {};

export default FullNameInput;
