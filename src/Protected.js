import React, { useContext } from 'react';
import UserContext from './Context/UserContext';
import { Route, Redirect } from 'react-router-dom';

const Protected = ({ exact, path, children }) => {
	const { currentUser } = useContext(UserContext);

	if (!currentUser) {
		return <Redirect to="/login" />;
	}

	return (
		<Route exact={exact} path={path}>
			{children}
		</Route>
	);
};

export default Protected;
