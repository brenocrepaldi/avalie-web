import { getMeanRating, renderStars } from '../../../utils/reviewUtils';

interface ReviewSummaryProps {
	totalReviews: number;
	reviews: { rating: number }[];
}

export function ReviewSummary({ totalReviews, reviews }: ReviewSummaryProps) {
	return (
		<div className="h-16 flex-1 p-3 rounded-md bg-zinc-700 flex justify-around items-center transition-all duration-100">
			<div className="flex items-center gap-2">
				<span className="text-xl font-semibold text-zinc-200">
					Total de avaliações:
				</span>
				<span className="text-zinc-400 text-xl">{totalReviews}</span>
			</div>
			<div className="flex items-center gap-2">
				<span className="text-xl font-semibold text-zinc-100">
					Média das avaliações:
				</span>
				<div className="flex">{renderStars(getMeanRating(reviews))}</div>
			</div>
		</div>
	);
}
