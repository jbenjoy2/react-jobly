import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Navbar from './Navbar';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes />
		</BrowserRouter>
	);
}

export default App;
