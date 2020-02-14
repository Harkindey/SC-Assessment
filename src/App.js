import React, { useState, useEffect } from 'react';
import './App.scss';
import EmailInput from './component/EmailInput';
import FullNameInput from './component/FullNameInput';
import PasswordInput from './component/PasswordInput';
import PhoneNumberInput from './component/PhoneNumberInput';
import PinInput from './component/PinInput';
import CardNumberInput from './component/CardNumber';
import DateInput from './component/DateInput';

function App() {
	const [submit, setSubmit] = useState(true);

	const [formError, setFormError] = useState({
		fullname: true,
		email: true,
		phoneNumber: true,
		password: true,
		cardNumber: true,
		date: true,
		pin: true,
	});

	const checkSubmitStatus = key => value => {
		return setFormError(prev => {
			return { ...prev, [key]: value };
		});
	};

	console.log(formError);

	useEffect(
		() => {
			const check = () => {
				let valid = true;
				const fields = Object.keys(formError);
				console.log(fields);
				fields.map(field => {
					if (formError[field]) {
						valid = false;
					}
					return null;
				});
				if (valid) {
					setSubmit(false);
				} else {
					setSubmit(true);
				}
			};
			check();
		},
		[formError]
	);

	return (
		<div className="App">
			<div className="App__body">
				<div className="form">
					<div>
						<h1>Form Validation</h1>
					</div>
					<div className="form__body">
						<FullNameInput
							submitStatus={checkSubmitStatus('fullname')}
						/>
						<EmailInput submitStatus={checkSubmitStatus('email')} />
						<PhoneNumberInput
							submitStatus={checkSubmitStatus('phoneNumber')}
						/>
						<PasswordInput
							submitStatus={checkSubmitStatus('password')}
						/>
						<CardNumberInput
							submitStatus={checkSubmitStatus('cardNumber')}
						/>
						<DateInput submitStatus={checkSubmitStatus('date')} />
						<PinInput submitStatus={checkSubmitStatus('pin')} />
					</div>
					<div className="form__action">
						<button
							className="form__button"
							type="submit"
							disabled={submit}
						>
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
