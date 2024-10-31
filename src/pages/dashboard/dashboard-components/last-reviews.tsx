import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/button';
import { reviews } from '../../../utils/lastReviewsUtils';
import { renderStars } from '../../../utils/reviewUtils';

export function LastReviews() {
	const navigate = useNavigate();

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

					<Button
						size="full"
						onClick={() => {
							navigate('/dashboard/reviews');
						}}
					>
						Ver todas as avaliações
					</Button>
				</div>
			</div>
		</div>
	);
}