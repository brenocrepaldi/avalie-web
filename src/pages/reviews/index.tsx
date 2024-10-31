import { useState } from 'react';
import { PageLayout } from '../../components/page-layout';
import { SlidersVertical } from 'lucide-react';
import { reviews } from '../dashboard/dashboard-components/reviews/reviews';
import { FilterPanel } from './reviews-components/filter-panel';
import { ReviewSummary } from './reviews-components/review-summary';
import { ReviewItem } from './reviews-components/review-item';

export function ReviewsPage() {
	const [selectedRating, setSelectedRating] = useState<number | null>(null);
	const [filterOpen, setFilterOpen] = useState(false);

	const filteredReviews =
		!filterOpen || selectedRating === null
			? reviews
			: reviews.filter((review) => review.rating === selectedRating);

	return (
		<PageLayout title="Dashboard">
			<div className="bg-zinc-800 p-6 pb-8 rounded-lg shadow-md">
				<div className="space-y-5">
					<div className="flex justify-between items-center mb-6">
						<h2 className="text-2xl text-zinc-200">Todas avaliações</h2>
					</div>

					<div className="h-[1px] rounded-lg bg-zinc-700" />

					<div className="w-full flex items-center justify-center gap-2">
						{filterOpen ? (
							<FilterPanel
								selectedRating={selectedRating}
								setSelectedRating={setSelectedRating}
							/>
						) : (
							<ReviewSummary totalReviews={reviews.length} reviews={reviews} />
						)}
						<button
							onClick={() => {
								setFilterOpen(!filterOpen);
								setSelectedRating(null);
							}}
							className={`h-[64px] w-[52px] flex items-center justify-center p-2 rounded-lg text-zinc-100 transition-colors ${
								filterOpen && 'bg-zinc-700 hover:bg-zinc-600'
							}`}
							aria-label="Toggle Filter"
						>
							<SlidersVertical />
						</button>
					</div>

					<div className="min-h-40 flex flex-col gap-4 p-10 px-20 bg-zinc-900 rounded-lg items-center justify-center">
						{filteredReviews.length > 0 ? (
							filteredReviews.map((review, index) => (
								<ReviewItem
									key={index}
									rating={review.rating}
									comment={review.comment}
									date={review.date}
								/>
							))
						) : (
							<div className="text-zinc-400 text-center">
								Nenhuma avaliação encontrada.
							</div>
						)}
					</div>
				</div>
			</div>
		</PageLayout>
	);
}
