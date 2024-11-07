import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes,
} from 'react-router-dom';
import { AddTeacherPage } from './pages/add-teacher';
import { DashboardPage } from './pages/dashboard/index';
import { LoginPage } from './pages/login/index';
import { NotFoundPage } from './pages/not-found';
import { ProfilePage } from './pages/profile';
import { ReviewsPage } from './pages/reviews';
import { TeachersPage } from './pages/teachers';
import { PrivateRoute } from './routes/private-route';

export function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Navigate to="/login" />} />
				<Route path="/login" element={<LoginPage />} />

				<Route
					path="/dashboard"
					element={
						<PrivateRoute requiredLevel={1}>
							<DashboardPage />
						</PrivateRoute>
					}
				/>
				<Route
					path="/dashboard/reviews"
					element={
						<PrivateRoute requiredLevel={1}>
							<ReviewsPage />
						</PrivateRoute>
					}
				/>

				<Route
					path="/teachers"
					element={
						<PrivateRoute requiredLevel={2}>
							<TeachersPage />
						</PrivateRoute>
					}
				/>
				<Route
					path="/teachers/add-teacher"
					element={
						<PrivateRoute requiredLevel={2}>
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

				<Route path="/not-found" element={<NotFoundPage />} />
			</Routes>
		</Router>
	);
}
