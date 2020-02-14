import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Home from './Pages/Home';

function Dashboard() {
	return <h1> Welcome to Softcom!</h1>;
}

function App() {
	return (
		<div className="App">
			<div className="App__body">
				<Router>
					<Switch>
						<Route path="/dashboard">
							<Dashboard />
						</Route>
						<Route path="/" exact>
							<Home />
						</Route>
					</Switch>
				</Router>
			</div>
		</div>
	);
}

export default App;
