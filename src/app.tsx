import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import { LoginPage } from './pages/login/index';
import { DashboardPage } from './pages/dashboard/index';
import { ReportPage } from './pages/report';

export function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Navigate to="/login" />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/dashboard" element={<DashboardPage />} />
				<Route path="/report" element={<ReportPage />} />
				<Route path="/settings" element={<DashboardPage />} />
			</Routes>
		</Router>
	);
}
