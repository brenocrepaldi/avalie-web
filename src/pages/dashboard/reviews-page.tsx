import { useState } from 'react';
import { PageLayout } from '../../components/page-layout';
import { reviews } from './dashboard-components/reviews/reviews';
import { Star, SlidersVertical } from 'lucide-react';

interface Review {
	rating: number;
	comment: string;
	date: string;
}

export function ReviewsPage() {
	const [selectedRating, setSelectedRating] = useState<number | null>(null);
	const [filterOpen, setFilterOpen] = useState(false);

	function renderStars(rating: number, clickable = false) {
		const maxStars = 5;
		const stars = [];

		for (let i = 1; i <= maxStars; i++) {
			stars.push(
				<Star
					key={i}
					className={`h-6 w-6 cursor-pointer transition-colors ${
						i <= (clickable ? selectedRating || 0 : rating)
							? 'text-yellow-400'
							: 'text-gray-400'
					}`}
					onClick={() => clickable && setSelectedRating(i)}
				/>
			);
		}
		return stars;
	}

	function getMeanRating(reviews: Review[]) {
		if (reviews.length === 0) return 0;
		const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
		return sum / reviews.length;
	}

	const filteredReviews =
		!filterOpen || selectedRating === null
			? reviews
			: reviews.filter((review) => review.rating === selectedRating);

	return (
		<PageLayout title="Dashboard">
			<div className="bg-zinc-800 p-6 pb-8 rounded-lg shadow-md">
				<div className="w-[80%] mx-auto space-y-6">
					<div className="flex justify-between items-center mb-6">
						<h2 className="text-2xl text-zinc-200">Todas avaliações</h2>
						<button
							onClick={() => {
								setFilterOpen(!filterOpen);
								setSelectedRating(null);
							}}
							className={`p-2 rounded-lg text-zinc-100 shadow-md transition-colors ${
								filterOpen && 'bg-zinc-700 hover:bg-zinc-600'
							}`}
							aria-label="Toggle Filter"
						>
							<SlidersVertical className="h-6 w-6" />
						</button>
					</div>

					<div className="h-[1px] rounded-lg bg-zinc-700" />

					{filterOpen ? (
						<div className="p-4 rounded-md bg-zinc-600 flex justify-center gap-2 items-center mb-6 transition-all">
							<span className="text-lg font-semibold text-zinc-100">
								Filtrar por estrelas:
							</span>
							<div className="flex gap-1">{renderStars(5, true)}</div>
						</div>
					) : (
						<div className="p-4 rounded-md bg-zinc-900 flex justify-around items-center mb-6 transition-all">
							<div className="flex items-center gap-2">
								<span className="text-xl font-semibold text-zinc-200">
									Total de avaliações:
								</span>
								<span className="text-zinc-400 text-xl">{reviews.length}</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="text-xl font-semibold text-zinc-100">
									Média de Avaliação:
								</span>
								<div className="flex">
									{renderStars(Math.round(getMeanRating(reviews)))}
								</div>
							</div>
						</div>
					)}

					{/* Avaliações Filtradas */}
					<div className="flex flex-col gap-4">
						{filteredReviews.length > 0 ? (
							filteredReviews.map((review, index) => (
								<div
									key={index}
									className="w-full p-4 bg-zinc-700 rounded-lg shadow-md flex items-start gap-4 transition-transform hover:bg-zinc-600"
								>
									<div className="flex items-center">
										{renderStars(review.rating)}
									</div>
									<div className="flex flex-col gap-1">
										<span className="text-zinc-100 italic">
											{review.comment}
										</span>
										<span className="text-zinc-500 text-sm">{review.date}</span>
									</div>
								</div>
							))
						) : (
							<div className="text-zinc-400 text-center pt-10">
								Nenhuma avaliação encontrada.
							</div>
						)}
					</div>
				</div>
			</div>
		</PageLayout>
	);
}
