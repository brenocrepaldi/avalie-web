import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
	children: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
	const isAuthenticated = !!localStorage.getItem('accessToken');

	return isAuthenticated ? children : <Navigate to="/login" />;
};
