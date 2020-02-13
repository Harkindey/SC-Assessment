import React, { useState } from 'react';
import './App.scss';
import EmailInput from './component/EmailInput';
import FullNameInput from './component/FullNameInput';
import PasswordInput from './component/PasswordInput';
import PhoneNumberInput from './component/PhoneNumberInput';

function App() {
	const [formValid, setFormValid] = useState(true);

	return (
		<div className="App">
			<div className="App__body">
				<div className="form">
					<div>
						<h1>Form Validation</h1>
					</div>
					<div className="form__body">
						<FullNameInput />
						<EmailInput />
						<PhoneNumberInput />
						<PasswordInput />
					</div>
					<div className="form__action">
						<button
							className="form__button"
							type="submit"
							disabled={formValid}
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
