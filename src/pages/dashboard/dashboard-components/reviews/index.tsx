import { lastReviews } from './last-reviews';

export function Reviews() {
	return (
		<div className="bg-zinc-800 p-6 pb-8 rounded-lg shadow-shape text-zinc-300 flex-grow">
			<h2 className="text-2xl mb-4">Últimas Avaliações</h2>
			<div className="flex flex-col gap-4">
				{lastReviews.map((review, index) => (
					<div
						key={index}
						className="flex items-center gap-4 bg-zinc-700 p-4 rounded-md shadow flex-grow hover:bg-zinc-600 transition-all duration-100"
					>
						<div>{review.icon}</div>
						<div className="flex flex-col">
							<span className="font-semibold text-zinc-200">{review.type}</span>
							<p className="text-zinc-400">{review.comment}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
