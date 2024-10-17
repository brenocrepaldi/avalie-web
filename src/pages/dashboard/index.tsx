import { useState } from 'react';
import { LogOut } from 'lucide-react';
import { MenuBar } from './dashboard-components/menu-bar/index';
import { Button } from '../../components/button';
import { useNavigate } from 'react-router-dom';
import ReactECharts from 'echarts-for-react';

export function DashboardPage() {
	const navigate = useNavigate();
	const [isMenubarOpen, setIsMenubarOpen] = useState(false);

	const toggleMenubar = () => {
		setIsMenubarOpen(!isMenubarOpen);
	};

	function UserLogOut() {
		navigate('/login');
	}

	const getFeedbackOption = () => {
		return {
			title: {
				left: 'center',
				textStyle: {
					color: '#ffffff',
					fontFamily: 'Inter, sans-serif',
					fontSize: '1.5em',
				},
			},
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
						{ value: 28, name: 'Positivas', itemStyle: { color: '#3b82f6' } }, // blue
						{ value: 14, name: 'Neutras', itemStyle: { color: '#71717a' } }, // grey
						{ value: 5, name: 'Negativas', itemStyle: { color: '#ef4444' } }, // red
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
				left: '3%',
				right: '4%',
				bottom: '3%',
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

	return (
		<div className="bg-zinc-900 h-screen flex">
			<MenuBar toggleMenubar={toggleMenubar} isMenubarOpen={isMenubarOpen} />

			<main className="flex-1 p-10">
				<header className="flex justify-between items-center mb-8">
					<h1 className="text-3xl font-semibold text-zinc-200">Dashboard</h1>
					<Button type="button" variant="secondary" onClick={UserLogOut}>
						<LogOut />
						Sair
					</Button>
				</header>

				{/* Seção de Estatísticas */}
				<div className="bg-zinc-800 p-6 rounded-lg shadow-shape text-zinc-300 mb-6">
					<h2 className="text-2xl mb-4">Estatísticas</h2>

					{/* Gráfico de Pizza de Feedback dos Alunos */}
					<ReactECharts option={getFeedbackOption()} />

					{/* Gráfico de Barras de Notas */}
					<ReactECharts option={getGradesOption()} />

					{/* Gráfico de Linha de Evolução do Desempenho */}
				</div>
			</main>
		</div>
	);
}
