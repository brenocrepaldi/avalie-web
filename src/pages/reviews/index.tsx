import { useState } from 'react';
import { PageLayout } from '../../components/page-layout';
import { reviews } from '../dashboard/dashboard-components/reviews/reviews';
import { SlidersVertical } from 'lucide-react';
import { getMeanRating, renderStars } from '../../utils/reviewUtils';

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
							<div className="h-16 flex-1 p-3 rounded-md bg-zinc-900 flex justify-center transition-all">
								<div className="flex flex-col">
									<div className="flex gap-2 items-center justify-center">
										<span className="text-lg font-semibold text-zinc-100">
											Filtrar por estrelas:
										</span>
										<div className="flex gap-1">
											{renderStars(5, true, selectedRating, setSelectedRating)}
										</div>
									</div>
									<span className="flex justify-center text-xs text-zinc-500">
										Clique para selecionar um número de estrelas
									</span>
								</div>
							</div>
						) : (
							<div className="h-16 flex-1 p-3 rounded-md bg-zinc-700 flex justify-around items-center transition-all">
								<div className="flex items-center gap-2">
									<span className="text-xl font-semibold text-zinc-200">
										Total de avaliações:
									</span>
									<span className="text-zinc-400 text-xl">
										{reviews.length}
									</span>
								</div>
								<div className="flex items-center gap-2">
									<span className="text-xl font-semibold text-zinc-100">
										Média das avaliações:
									</span>
									<div className="flex">
										{renderStars(getMeanRating(reviews))}
									</div>
								</div>
							</div>
						)}
						<button
							onClick={() => {
								setFilterOpen(!filterOpen);
								setSelectedRating(null);
							}}
							className={`h-12 w-12 flex items-center justify-center p-2 rounded-lg text-zinc-100 shadow-md transition-colors ${
								filterOpen && 'bg-zinc-700 hover:bg-zinc-600'
							}`}
							aria-label="Toggle Filter"
						>
							<SlidersVertical className="h-7 w-7" />
						</button>
					</div>

					{/* Avaliações Filtradas */}
					<div className="min-h-40 flex flex-col gap-4 p-10 px-20 bg-zinc-900 rounded-lg items-center justify-center">
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
