import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import { LoginPage } from './pages/login/index';
import { DashboardPage } from './pages/dashboard/index';
import { ReportPage } from './pages/report';
import { ProfilePage } from './pages/profile';
import { TeachersPage } from './pages/teachers';
import { AddTeacherPage } from './pages/teachers/teachers-components/add-teacher-page';

export function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Navigate to="/login" />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/dashboard" element={<DashboardPage />} />
				<Route path="/report" element={<ReportPage />} />
				<Route path="/teachers" element={<TeachersPage />} />
				<Route path="/teachers/add-teacher" element={<AddTeacherPage />} />
				<Route path="/profile" element={<ProfilePage />} />
			</Routes>
		</Router>
	);
}
