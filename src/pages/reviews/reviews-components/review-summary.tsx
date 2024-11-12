import { Rating } from '../../../hooks/useRatings';
import { getMeanRating, renderStars } from '../../../utils/reviewUtils';

interface ReviewSummaryProps {
	totalReviews: number;
	feedbacks: Rating[];
}

export function ReviewSummary({ totalReviews, feedbacks }: ReviewSummaryProps) {
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
				<div className="flex">{renderStars(getMeanRating(feedbacks))}</div>
			</div>
		</div>
	);
}
