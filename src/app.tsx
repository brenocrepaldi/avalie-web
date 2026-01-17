import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AddProfessorPage } from './pages/add-professor';
import { DashboardPage } from './pages/dashboard/index';
import { LoginPage } from './pages/login/index';
import { NotFoundPage } from './pages/not-found';
import { ProfilePage } from './pages/profile';
import { FeedbacksPage } from './pages/feedbacks';
import { ProfessorsPage } from './pages/professors';
import { PrivateRoute } from './routes/private-route';
import { RequestFeedbackPage } from './pages/request-feedback';

export function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Navigate to="/login" />} />
				<Route path="/login" element={<LoginPage />} />

				<Route path="/dashboard" element={<DashboardPage />} />
				<Route path="/feedback-request" element={<RequestFeedbackPage />} />

				<Route path="/feedbacks" element={<FeedbacksPage />} />

				<Route path="/professors" element={<ProfessorsPage />} />
				<Route path="/professors/add-professor" element={<AddProfessorPage />} />

				<Route path="/profile" element={<ProfilePage />} />

				<Route path="/not-found" element={<NotFoundPage />} />
			</Routes>
		</Router>
	);
}
