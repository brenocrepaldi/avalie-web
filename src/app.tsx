import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/login/index';
import { DashboardPage } from './pages/dashboard/index';

export function App() {
	return (
		<Router>
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/dashboard" element={<DashboardPage />} />
			</Routes>
		</Router>
	);
}
