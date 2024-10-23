import { ThumbsUp, ThumbsDown, Meh } from 'lucide-react';

export const lastReviews = [
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
