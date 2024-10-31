import { PageLayout } from '../../components/page-layout';
import { Statistics } from './dashboard-components/statistics';
import { LastReviews } from './dashboard-components/last-reviews';

export function DashboardPage() {
	return (
		<PageLayout title="Dashboard">
			<Statistics />
			<LastReviews />
		</PageLayout>
	);
}
