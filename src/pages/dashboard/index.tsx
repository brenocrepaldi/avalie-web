import { useState, useEffect } from 'react';
import { LogOut } from 'lucide-react';
import { MenuBar } from './dashboard-components/menu-bar/index';
import { Button } from '../../components/button';
import { useNavigate } from 'react-router-dom';
import ReactECharts from 'echarts-for-react';
import { ThumbsUp, ThumbsDown, Meh } from 'lucide-react';

export function DashboardPage() {
	const navigate = useNavigate();
	const [isMenubarOpen, setIsMenubarOpen] = useState(false);
	const [contentVisible, setContentVisible] = useState(false);

	// Função para alternar o menu lateral
	const toggleMenubar = () => {
		setIsMenubarOpen(!isMenubarOpen);
	};

	// Atualiza a opacidade do conteúdo quando o menu é aberto ou fechado
	useEffect(() => {
		if (isMenubarOpen) {
			setContentVisible(false);
			setTimeout(() => setContentVisible(true), 400);
		} else {
			setContentVisible(false);
			setTimeout(() => setContentVisible(true), 400);
		}
	}, [isMenubarOpen]);

	function UserLogOut() {
		navigate('/login');
	}

	const getFeedbackOption = () => {
		return {
			tooltip: {
				trigger: 'item',
			},
			series: [
				{
					name: 'Feedback',
					type: 'pie',
					radius: ['40%', '70%'],
					avoidLabelOverlap: false,
					padAngle: 5,
					itemStyle: {
						borderRadius: 10,
					},
					data: [
						{ value: 28, name: 'Positivas', itemStyle: { color: '#3b82f6' } },
						{ value: 14, name: 'Neutras', itemStyle: { color: '#71717a' } },
						{ value: 5, name: 'Negativas', itemStyle: { color: '#ef4444' } },
					],
					emphasis: {
						itemStyle: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)',
						},
					},
					label: {
						textStyle: {
							color: '#ffffff',
							fontFamily: 'Inter, sans-serif',
						},
					},
				},
			],
		};
	};

	const getGradesOption = () => {
		return {
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'line',
				},
			},
			grid: {
				left: '5%',
				right: '5%',
				bottom: '5%',
				containLabel: true,
			},
			xAxis: {
				type: 'value',
			},
			yAxis: {
				type: 'category',
				data: ['Turma 1', 'Turma 2', 'Turma 3'],
			},
			series: [
				{
					name: 'Positivas',
					type: 'bar',
					stack: 'total',
					label: {
						show: true,
					},
					emphasis: {
						focus: 'series',
					},
					data: [30, 34, 43],
					itemStyle: {
						color: '#3b82f6',
						barBorderRadius: [0, 7, 7, 0],
					},
				},
				{
					name: 'Neutras',
					type: 'bar',
					stack: 'total',
					label: {
						show: true,
					},
					emphasis: {
						focus: 'series',
					},
					data: [12, 13, 10],
					itemStyle: {
						color: '#71717a',
						barBorderRadius: [7, 7, 7, 7],
					},
				},
				{
					name: 'Negativas',
					type: 'bar',
					stack: 'total',
					label: {
						show: true,
					},
					emphasis: {
						focus: 'series',
					},
					data: [7, 9, 4],
					itemStyle: {
						color: '#ef4444',
						barBorderRadius: [7, 7, 7, 7],
					},
				},
			],
		};
	};

	const mainReviews = [
		{
			type: 'Positiva',
			comment:
				'A aula foi incrível! Aprendi muito e o professor explicou muito bem.',
			icon: <ThumbsUp className="text-blue-500" />,
		},
		{
			type: 'Neutra',
			comment: 'A aula foi boa, mas senti falta de mais exemplos práticos.',
			icon: <Meh className="text-gray-400" />,
		},
		{
			type: 'Negativa',
			comment: 'A aula foi muito teórica e difícil de entender.',
			icon: <ThumbsDown className="text-red-500" />,
		},
	];

	return (
		<div className="bg-zinc-900 h-screen flex">
			<MenuBar toggleMenubar={toggleMenubar} isMenubarOpen={isMenubarOpen} />

			<div
				className={`flex-1 p-10 transition-all duration-300 overflow-y-scroll flex flex-col gap-6 ${
					isMenubarOpen ? 'ml-64' : 'ml-20'
				}`}
			>
				<div className="bg-zinc-800 p-4 rounded-lg shadow-shape flex justify-between items-center">
					<h1 className="text-2xl font-semibold text-zinc-200">Dashboard</h1>
					<Button type="button" variant="secondary" onClick={UserLogOut}>
						<LogOut />
						Sair
					</Button>
				</div>

				<div
					className={`flex flex-col gap-6 transition-all duration-300 ${
						contentVisible ? 'opacity-100' : 'opacity-0'
					}`}
				>
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
					<div className="bg-zinc-800 p-6 pb-8 rounded-lg shadow-shape text-zinc-300 flex-grow">
						<h2 className="text-2xl mb-4">Principais avaliações</h2>
						<div className="flex flex-col gap-4">
							{mainReviews.map((review, index) => (
								<div
									key={index}
									className="flex items-center gap-4 bg-zinc-700 p-4 rounded-md shadow flex-grow hover:bg-zinc-600 transition-all duration-100 cursor-pointer"
								>
									<div>{review.icon}</div>
									<div className="flex flex-col">
										<span className="font-semibold text-zinc-200">
											{review.type}
										</span>
										<p className="text-zinc-400">{review.comment}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
