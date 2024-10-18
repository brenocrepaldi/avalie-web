import ReactECharts from 'echarts-for-react';
import { getFeedbackOption, getGradesOption } from './chart-options';

export function Statistics() {
	return (
		<div className="bg-zinc-800 p-6 pb-8 rounded-lg shadow-shape text-zinc-300 flex-grow">
			<h2 className="text-2xl mb-4">Estatísticas</h2>
			<div className="flex justify-between items-stretch gap-4">
				<div className="w-1/2 bg-zinc-700 py-6 px-3 rounded-md flex flex-col flex-grow">
					<div className="w-full text-center font-medium text-xl text-zinc-200">
						Total de avaliações
					</div>
					<ReactECharts option={getFeedbackOption()} />
				</div>
				<div className="w-1/2 bg-zinc-700 py-6 px-3 rounded-md flex flex-col flex-grow">
					<div className="w-full text-center font-medium text-xl text-zinc-200">
						Avaliações por turma
					</div>
					<ReactECharts option={getGradesOption()} />
				</div>
			</div>
		</div>
	);
}
