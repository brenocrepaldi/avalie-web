export interface RatingProps {
	data: string;
	nota: number;
	comentario: string;
}

export interface TeacherDataProps {
	id: number;
	nome: string;
	disciplina: string;
	turmas: string[];
	mediaAvaliacao: number;
	avaliacoes: RatingProps[];
}

export const teachersData = [
	{
		id: 1,
		nome: 'Carlos Pereira',
		disciplina: 'Engenharia de Requisitos',
		turmas: ['0301', '0302'],
		mediaAvaliacao: 4.1,
		avaliacoes: [
			{
				data: '05/10/2024',
				nota: 4.25,
				comentario: 'Muito claro nas explicações.',
			},
			{
				data: '10/10/2024',
				nota: 3.95,
				comentario: 'Bom professor, mas poderia dar mais exemplos práticos.',
			},
			{
				data: '05/10/2024',
				nota: 4.25,
				comentario: 'Muito claro nas explicações.',
			},
			{
				data: '10/10/2024',
				nota: 3.95,
				comentario: 'Bom professor, mas poderia dar mais exemplos práticos.',
			},
			{
				data: '05/10/2024',
				nota: 4.25,
				comentario: 'Muito claro nas explicações.',
			},
			{
				data: '10/10/2024',
				nota: 3.95,
				comentario: 'Bom professor, mas poderia dar mais exemplos práticos.',
			},
			{
				data: '05/10/2024',
				nota: 4.25,
				comentario: 'Muito claro nas explicações.',
			},
			{
				data: '10/10/2024',
				nota: 3.95,
				comentario: 'Bom professor, mas poderia dar mais exemplos práticos.',
			},
		],
	},
	{
		id: 2,
		nome: 'Luciana Andrade',
		disciplina: 'Algoritmos Avançados',
		turmas: ['0201'],
		mediaAvaliacao: 2.35,
		avaliacoes: [
			{
				data: '08/10/2024',
				nota: 2.5,
				comentario: 'Razoável, mas sempre disponível para tirar dúvidas.',
			},
			{
				data: '13/10/2024',
				nota: 2.25,
				comentario: 'Aula ruim, sem exemplos práticos.',
			},
		],
	},
];
