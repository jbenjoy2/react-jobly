import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home';
import Companies from './Companies';
import Company from './Company';
import Jobs from './Jobs';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';
const companiesList = [
	{
		name   : 'Apple',
		handle : 'apple',
		id     : 1
	},
	{
		name   : 'Microsoft',
		handle : 'microsoft',
		id     : 2
	}
];
const jobsList = [
	{
		title : 'senior dev',
		id    : 1
	},
	{
		title : 'junior dev',
		id    : 2
	}
];

const sampleUser = {
	email     : 'test@sampleUser.com',
	firstName : 'Sample',
	lastName  : 'User',
	userName  : 'SampleUser101'
};

function Routes() {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/companies">
				<Companies companiesList={companiesList} />
			</Route>
			<Route exact path="/companies/:handle">
				<Company companies={companiesList} />
			</Route>
			<Route exact path="/jobs">
				<Jobs jobsList={jobsList} />
			</Route>
			<Route exact path="/login">
				<Login />
			</Route>
			<Route exact path="/signup">
				<Signup />
			</Route>
			<Route exact path="/profile">
				<Profile user={sampleUser} />
			</Route>
			<Redirect to="/" />
		</Switch>
	);
}

export default Routes;
