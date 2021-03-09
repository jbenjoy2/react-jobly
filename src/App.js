import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Navbar from './Navbar';
import JoblyApi from './api';
import UserContext from './Context/UserContext';
import useLocalStorage from './hooks/useLocalStorageState';
import jwt from 'jsonwebtoken';

function App() {
	const [ hasUserInfo, setHasUserInfo ] = useState(false);
	const [ currentUser, setCurrentUser ] = useState(null);
	const [ token, setToken ] = useLocalStorage('jobly-token');

	// load info from api
	useEffect(
		() => {
			async function getUser() {
				if (token) {
					try {
						let { username } = jwt.decode(token);
						JoblyApi.token = token;
						let currentUser = await JoblyApi.getCurrentUser(username);
						setCurrentUser(currentUser);
					} catch (error) {
						console.error('App error: problem loading', error);
						setCurrentUser(null);
					}
				}
				setHasUserInfo(true);
			}
			setHasUserInfo(false);
			getUser();
		},
		[ token ]
	);

	const signUp = async (signupData) => {
		try {
			let token = await JoblyApi.signup(signupData);
			setToken(token);
			return { success: true };
		} catch (errors) {
			console.error('signup failure!', errors);
			return { success: false, errors };
		}
	};
	const login = async (loginData) => {
		try {
			let token = await JoblyApi.login(loginData);
			setToken(token);
			return { success: true };
		} catch (errors) {
			console.error('login failure!', errors);
			return { success: false, errors };
		}
	};

	const logout = () => {
		setCurrentUser(null);
		setToken(null);
	};

	if (!hasUserInfo) return <h1>Loading. . .</h1>;

	return (
		<BrowserRouter>
			<UserContext.Provider value={{ currentUser, setCurrentUser }}>
				<div className="App">
					<Navbar logout={logout} />
					<Routes login={login} signUp={signUp} />
				</div>
			</UserContext.Provider>
		</BrowserRouter>
	);
}

export default App;
