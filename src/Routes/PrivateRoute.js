import React from 'react';
import { Redirect, Route } from 'react-router';
import { useAuthState } from '../firebase';

const PrivateRoute = ({ children, props }) => {
	const { isAuthenticated } = useAuthState();

	return <Route {...props} render={(routeProps) => (isAuthenticated ? children : <Redirect to="/login" />)} />;
};

export default PrivateRoute;
