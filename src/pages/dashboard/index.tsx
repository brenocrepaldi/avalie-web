import { PageLayout } from '../../components/page-layout';
import { Statistics } from './dashboard-components/statistics';
import { Reviews } from './dashboard-components/reviews';

export function DashboardPage() {
	return (
		<PageLayout title="Dashboard">
			<Statistics />
			<Reviews />
		</PageLayout>
	);
}
