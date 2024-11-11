import ReactECharts from 'echarts-for-react';
import { useEffect, useState } from 'react';
import { getProfessorRatingInfo } from '../../../hooks/useRatings';
import { useUserData } from '../../../hooks/useUserData';
import { renderStars } from '../../../utils/reviewUtils';
import {
	getFeedbackOption,
	getGradesOption,
} from '../../../utils/statisticUtils';

export function Statistics() {
	const userData = useUserData();
	const [ratingCategories, setRatingCategories] = useState<{
		positives: number;
		neutral: number;
		negatives: number;
	}>();
	const [totalRating, setTotalRatings] = useState<number>();
	const [meanRating, setMeanRating] = useState<number>(0);

	useEffect(() => {
		async function fetchMeanRating() {
			if (userData) {
				const ratingInfo = await getProfessorRatingInfo(userData.id);
				setMeanRating(ratingInfo.meanRating);
				setRatingCategories({
					positives: ratingInfo.positiveRatings,
					neutral: ratingInfo.neutralRatings,
					negatives: ratingInfo.negativeRatings,
				});
				setTotalRatings(ratingInfo.totalRatings);
			}
		}
		fetchMeanRating();
	}, [userData]);

	return (
		<div className="bg-zinc-800 p-6 rounded-lg shadow-lg text-zinc-300 flex flex-col">
			<h2 className="text-2xl mb-4">Estatísticas de Avaliações</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="bg-zinc-700 p-4 pt-8 rounded-md flex flex-col">
					<div className="space-y-6">
						<div className="flex justify-around">
							<div className="border-zinc-600 flex gap-2 items-center">
								<span className="text-lg font-semibold text-zinc-100">
									Média:
								</span>
								<div className="flex items-center">
									{renderStars(meanRating)}
								</div>
							</div>
							<div className="border-zinc-600 flex gap-2 items-baseline">
								<span className="text-lg font-semibold text-zinc-200">
									Total de avaliações:
								</span>
								<span className="text-zinc-400 text-lg">{totalRating}</span>
							</div>
						</div>
						<div className="h-[1px] rounded-lg bg-zinc-600" />
						{ratingCategories && (
							<ReactECharts
								option={getFeedbackOption(
									ratingCategories.positives,
									ratingCategories.neutral,
									ratingCategories.negatives
								)}
							/>
						)}
					</div>
				</div>

				<div className="bg-zinc-700 p-4 pt-8 rounded-md flex flex-col">
					<div className="text-center font-medium text-xl text-zinc-200 mb-4">
						Avaliações por turma
					</div>
					<ReactECharts option={getGradesOption()} />
				</div>
			</div>
		</div>
	);
}
