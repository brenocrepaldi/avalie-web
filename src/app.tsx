import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import { LoginPage } from './pages/login/index';
import { DashboardPage } from './pages/dashboard/index';
import { ReportsPage } from './pages/reports';

export function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Navigate to="/login" />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/dashboard" element={<DashboardPage />} />
				<Route path="/reports" element={<ReportsPage />} />
				<Route path="/settings" element={<DashboardPage />} />
			</Routes>
		</Router>
	);
}
