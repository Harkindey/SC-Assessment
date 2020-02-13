import React, { useState } from 'react';
import './App.scss';
import EmailInput from './component/EmailInput';

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
						<EmailInput />
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
		</div>
	);
}

export default App;
