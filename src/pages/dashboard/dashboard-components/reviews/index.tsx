import { Star, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../../../../components/button';
import { reviews } from './reviews';

interface Review {
	rating: number;
	comment: string;
	date: string;
}

interface ReviewsModalProps {
	reviews: Review[];
	isOpen: boolean;
	onClose: () => void;
}

function renderStars(rating: number) {
	const maxStars = 5;
	const stars = [];

	for (let i = 1; i <= maxStars; i++) {
		stars.push(
			<Star
				key={i}
				className={`h-6 w-6 ${
					i <= rating ? 'text-yellow-400' : 'text-gray-400'
				}`}
			/>
		);
	}
	return stars;
}

function getMeanRating(reviews: Review[]) {
	if (reviews.length === 0) return 0;

	let sum = 0;
	for (let i = 0; i < reviews.length; i++) {
		sum += reviews[i].rating;
	}
	const meanRating = sum / reviews.length;

	return meanRating;
}

export function ReviewsModal({ reviews, isOpen, onClose }: ReviewsModalProps) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black/60 flex items-center justify-center">
			<div className="w-[70%] max-h-[75%] min-h-[200px] rounded-lg py-8 px-8 bg-zinc-800 shadow-lg space-y-4 transition-all transform duration-300 ease-in-out overflow-y-auto custom-scrollbar">
				<div className="flex items-center justify-between">
					<h2 className="text-2xl font-semibold text-white">
						Todas as avaliações
					</h2>
					<button onClick={onClose} aria-label="Fechar">
						<X className="h-6 w-6 text-zinc-400 hover:text-zinc-300 transition duration-100" />
					</button>
				</div>

				<div className="h-[1px] rounded-lg bg-zinc-700" />

				<div className="flex flex-col gap-2">
					<div className="border-zinc-600 flex gap-2 items-center">
						<span className="text-lg font-semibold text-zinc-100">
							Média de Avaliação:
						</span>
						<div className="flex items-center">
							{renderStars(getMeanRating(reviews))}
						</div>
					</div>
					
					<div className="border-zinc-600 flex gap-2 items-baseline">
						<span className="text-md font-semibold text-zinc-200">
							Total de avaliações:
						</span>
						<span className="text-zinc-400">{reviews.length}</span>
					</div>
				</div>

				<ul className="pt-2 px-4 space-y-4">
					{reviews.map((review, index) => (
						<li
							key={index}
							className="p-4 bg-zinc-700 hover:bg-zinc-600 rounded-md shadow-md flex items-center gap-3 transition-transform transform duration-300 ease-in-out"
						>
							<div className="flex">{renderStars(review.rating)}</div>
							<span className="text-zinc-300 italic">"{review.comment}"</span>
							<span className="text-zinc-400 text-sm ml-auto">
								{review.date}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

// Componente principal
export function Reviews() {
	const [isRatingsModalOpen, setIsRatingsModalOpen] = useState(false);

	const handleRatingsModal = () => {
		setIsRatingsModalOpen(!isRatingsModalOpen);
	};

	return (
		<div className="bg-zinc-800 p-6 pb-8 rounded-lg shadow-shape text-zinc-300 flex-grow">
			<h2 className="text-2xl mb-4">Últimas Avaliações</h2>

			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-4">
					{reviews.slice(0, 3).map((review, index) => (
						<div
							key={index}
							className="w-full p-4 py-6 bg-zinc-700 hover:bg-zinc-600 rounded-md flex items-center gap-3 transition-all duration-100"
						>
							<span className="text-zinc-100 flex">
								{renderStars(review.rating)}
							</span>
							<span className="text-zinc-300 italic">"{review.comment}"</span>
							<span className="text-zinc-400 text-sm ml-auto">05/09/2004</span>
						</div>
					))}

					<Button size="full" onClick={handleRatingsModal}>
						Ver todas as avaliações
					</Button>
				</div>
			</div>

			<ReviewsModal
				reviews={reviews}
				isOpen={isRatingsModalOpen}
				onClose={handleRatingsModal}
			/>
		</div>
	);
}
