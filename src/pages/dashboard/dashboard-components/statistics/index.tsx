import ReactECharts from 'echarts-for-react';
import { getFeedbackOption, getGradesOption } from './chart-options';
import { Star } from 'lucide-react';

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

export function Statistics() {
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
								<div className="flex items-center">{renderStars(4)}</div>
							</div>
							<div className="border-zinc-600 flex gap-2 items-baseline">
								<span className="text-lg font-semibold text-zinc-200">
									Total de avaliações:
								</span>
								<span className="text-zinc-400 text-lg">19</span>
							</div>
						</div>
						<div className="h-[1px] rounded-lg bg-zinc-600" />
						<ReactECharts option={getFeedbackOption()} />
					</div>
				</div>
				{/* Gráfico de Avaliações por Turma */}
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
