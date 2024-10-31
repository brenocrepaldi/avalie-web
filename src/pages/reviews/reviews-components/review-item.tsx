import { renderStars } from '../../../utils/reviewUtils';

interface ReviewItemProps {
	rating: number;
	comment: string;
	date: string;
}

export function ReviewItem({ rating, comment, date }: ReviewItemProps) {
	return (
		<div className="w-full p-4 bg-zinc-700 rounded-lg shadow-md flex items-start gap-4 transition-transform hover:bg-zinc-600">
			<div className="flex items-center">{renderStars(rating)}</div>
			<div className="flex flex-col gap-1">
				<span className="text-zinc-100 italic">{comment}</span>
				<span className="text-zinc-500 text-sm">{date}</span>
			</div>
		</div>
	);
}
