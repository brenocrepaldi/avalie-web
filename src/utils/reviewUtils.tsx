import { Star } from 'lucide-react';

export function renderStars(
	rating: number,
	clickable = false,
	selectedRating: number | null = null,
	onClick?: (rating: number) => void
) {
	const maxStars = 5;
	const stars = [];

	for (let i = 1; i <= maxStars; i++) {
		stars.push(
			<Star
				key={i}
				className={`h-6 w-6 transition-colors ${
					i <= (clickable ? selectedRating || 0 : rating)
						? 'text-yellow-400'
						: 'text-gray-500'
				} ${clickable && 'cursor-pointer'}`}
				onClick={() => clickable && onClick && onClick(i)}
			/>
		);
	}
	return stars;
}

export function getMeanRating(reviews: { rating: number }[]) {
	if (reviews.length === 0) return 0;
	const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
	return sum / reviews.length;
}
