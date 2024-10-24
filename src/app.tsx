import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import { PrivateRoute } from './routes/private-route';
import { LoginPage } from './pages/login/index';
import { DashboardPage } from './pages/dashboard/index';
import { ReportPage } from './pages/report';
import { TeachersPage } from './pages/teachers';
import { AddTeacherPage } from './pages/teachers/teachers-components/add-teacher-page';
import { ProfilePage } from './pages/profile';

export function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Navigate to="/login" />} />
				<Route path="/login" element={<LoginPage />} />
				<Route
					path="/dashboard"
					element={
						<PrivateRoute>
							<DashboardPage />
						</PrivateRoute>
					}
				/>
				<Route
					path="/report"
					element={
						<PrivateRoute>
							<ReportPage />
						</PrivateRoute>
					}
				/>
				<Route
					path="/teachers"
					element={
						<PrivateRoute>
							<TeachersPage />
						</PrivateRoute>
					}
				/>
				<Route
					path="/teachers/add-teacher"
					element={
						<PrivateRoute>
							<AddTeacherPage />
						</PrivateRoute>
					}
				/>
				<Route
					path="/profile"
					element={
						<PrivateRoute>
							<ProfilePage />
						</PrivateRoute>
					}
				/>
			</Routes>
		</Router>
	);
}
