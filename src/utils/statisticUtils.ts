export const getFeedbackOption = () => {
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
					color: '#ffffff',
					fontFamily: 'Inter, sans-serif',
				},
			},
		],
	};
};

export const getGradesOption = () => {
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
					color: '#ffffff',
					fontFamily: 'Inter, sans-serif',
				},
				emphasis: {
					focus: 'series',
				},
				data: [30, 34, 43],
				itemStyle: {
					color: '#3b82f6',
					borderRadius: [0, 7, 7, 0],
				},
			},
			{
				name: 'Neutras',
				type: 'bar',
				stack: 'total',
				label: {
					show: true,
					color: '#ffffff',
					fontFamily: 'Inter, sans-serif',
				},
				emphasis: {
					focus: 'series',
				},
				data: [12, 13, 10],
				itemStyle: {
					color: '#71717a',
					borderRadius: [7, 7, 7, 7],
				},
			},
			{
				name: 'Negativas',
				type: 'bar',
				stack: 'total',
				label: {
					show: true,
					color: '#ffffff',
					fontFamily: 'Inter, sans-serif',
				},
				emphasis: {
					focus: 'series',
				},
				data: [7, 9, 4],
				itemStyle: {
					color: '#ef4444',
					borderRadius: [7, 7, 7, 7],
				},
			},
		],
	};
};
