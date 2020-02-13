import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
	const { label, validator, onChange, value, message, error } = props;

	function humanize(str) {
		var frags = str.split('-');
		for (let i = 0; i < frags.length; i++) {
			frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
		}
		return frags.join(' ');
	}
	return (
		<div className="form__item">
			<label htmlFor={label} className="form__label">
				{humanize(label)}
			</label>
			<input
				className="form__input"
				id={label}
				name={label}
				type={label}
				onBlur={() => validator()}
				value={value}
				onChange={e => onChange(e.target.value)}
				style={error ? { border: '2px solid red' } : {}}
			/>
			<p className="form__message">{message}</p>
		</div>
	);
}

Input.propTypes = {
	label: PropTypes.string,
	validator: PropTypes.func,
	onChange: PropTypes.func,
	value: PropTypes.string,
	message: PropTypes.string,
	error: PropTypes.bool,
};

export default Input;
