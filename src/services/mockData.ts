import { Professor } from '../hooks/useProfessors';
import { Feedback } from '../hooks/useFeedbacks';
import { Course } from '../hooks/useCourses';
import { Discipline } from '../hooks/useDisciplines';
import { UserData } from '../hooks/useUserData';
import { LoginResponse } from './types';

// Mock data para cursos
export const mockCourses: Course[] = [
	{
		id: '1',
		name: 'Ciência da Computação',
		active: true,
	},
	{
		id: '2',
		name: 'Engenharia de Software',
		active: true,
	},
	{
		id: '3',
		name: 'Sistemas de Informação',
		active: true,
	},
	{
		id: '4',
		name: 'Análise e Desenvolvimento de Sistemas',
		active: true,
	},
];

// Mock data para disciplinas
export const mockDisciplines: Discipline[] = [
	{
		id: 'disc-1',
		name: 'Algoritmos e Estruturas de Dados',
		start_time: '08:00',
		end_time: '10:00',
		days_week: ['Segunda', 'Quarta'],
		active: true,
	},
	{
		id: 'disc-2',
		name: 'Programação Orientada a Objetos',
		start_time: '10:00',
		end_time: '12:00',
		days_week: ['Terça', 'Quinta'],
		active: true,
	},
	{
		id: 'disc-3',
		name: 'Banco de Dados',
		start_time: '14:00',
		end_time: '16:00',
		days_week: ['Segunda', 'Quarta'],
		active: true,
	},
	{
		id: 'disc-4',
		name: 'Engenharia de Software',
		start_time: '16:00',
		end_time: '18:00',
		days_week: ['Terça', 'Quinta'],
		active: true,
	},
	{
		id: 'disc-5',
		name: 'Redes de Computadores',
		start_time: '19:00',
		end_time: '21:00',
		days_week: ['Segunda', 'Quarta'],
		active: true,
	},
	{
		id: 'disc-6',
		name: 'Inteligência Artificial',
		start_time: '08:00',
		end_time: '10:00',
		days_week: ['Sexta'],
		active: true,
	},
];

// Mock data para professores
export const mockProfessors: Professor[] = [
	{
		id: 'prof-1',
		name: 'Dr. João Silva',
		ra: '12345',
		disciplines: ['Algoritmos e Estruturas de Dados', 'Programação Orientada a Objetos'],
		email: 'joao.silva@universidade.edu.br',
		active: true,
	},
	{
		id: 'prof-2',
		name: 'Dra. Maria Santos',
		ra: '23456',
		disciplines: ['Banco de Dados', 'Engenharia de Software'],
		email: 'maria.santos@universidade.edu.br',
		active: true,
	},
	{
		id: 'prof-3',
		name: 'Dr. Carlos Oliveira',
		ra: '34567',
		disciplines: ['Redes de Computadores'],
		email: 'carlos.oliveira@universidade.edu.br',
		active: true,
	},
	{
		id: 'prof-4',
		name: 'Dra. Ana Costa',
		ra: '45678',
		disciplines: ['Inteligência Artificial'],
		email: 'ana.costa@universidade.edu.br',
		active: true,
	},
];

// Mock data para usuários (professores e diretores)
export const mockUsers: UserData[] = [
	{
		id: 'prof-1',
		ra: '12345',
		name: 'Dr. João Silva',
		email: 'joao.silva@universidade.edu.br',
		password: '123456',
		disciplines: ['Algoritmos e Estruturas de Dados', 'Programação Orientada a Objetos'],
		active: true,
	},
	{
		id: 'prof-2',
		ra: '23456',
		name: 'Dra. Maria Santos',
		email: 'maria.santos@universidade.edu.br',
		password: '123456',
		disciplines: ['Banco de Dados', 'Engenharia de Software'],
		active: true,
	},
	{
		id: 'prof-3',
		ra: '34567',
		name: 'Dr. Carlos Oliveira',
		email: 'carlos.oliveira@universidade.edu.br',
		password: '123456',
		disciplines: ['Redes de Computadores'],
		active: true,
	},
	{
		id: 'prof-4',
		ra: '45678',
		name: 'Dra. Ana Costa',
		email: 'ana.costa@universidade.edu.br',
		password: '123456',
		disciplines: ['Inteligência Artificial'],
		active: true,
	},
	{
		id: 'dir-1',
		ra: '99999',
		name: 'Diretor Roberto Lima',
		email: 'diretor@universidade.edu.br',
		password: '123456',
		course: 'Ciência da Computação',
		active: true,
	},
];

// Mock data para feedbacks
export const mockFeedbacks: Feedback[] = [
	{
		id: 'feed-1',
		text: 'Excelente professor, muito didático e paciente com os alunos.',
		course: 'Ciência da Computação',
		student: 'Aluno Teste 1',
		discipline: 'Algoritmos e Estruturas de Dados',
		note: 5,
		date: '2024-09-15T10:30:00Z',
	},
	{
		id: 'feed-2',
		text: 'Aulas muito bem estruturadas, material de qualidade.',
		course: 'Ciência da Computação',
		student: 'Aluno Teste 2',
		discipline: 'Algoritmos e Estruturas de Dados',
		note: 4,
		date: '2024-09-14T14:20:00Z',
	},
	{
		id: 'feed-3',
		text: 'Professor conhece muito bem a matéria, mas às vezes fala muito rápido.',
		course: 'Engenharia de Software',
		student: 'Aluno Teste 3',
		discipline: 'Programação Orientada a Objetos',
		note: 4,
		date: '2024-09-13T09:15:00Z',
	},
	{
		id: 'feed-4',
		text: 'Muito boa a metodologia de ensino, recomendo!',
		course: 'Sistemas de Informação',
		student: 'Aluno Teste 4',
		discipline: 'Banco de Dados',
		note: 5,
		date: '2024-09-12T16:45:00Z',
	},
	{
		id: 'feed-5',
		text: 'Professor atencioso, sempre disponível para tirar dúvidas.',
		course: 'Ciência da Computação',
		student: 'Aluno Teste 5',
		discipline: 'Banco de Dados',
		note: 5,
		date: '2024-09-11T11:30:00Z',
	},
	{
		id: 'feed-6',
		text: 'Aulas interessantes, mas poderia ter mais exemplos práticos.',
		course: 'Engenharia de Software',
		student: 'Aluno Teste 6',
		discipline: 'Engenharia de Software',
		note: 3,
		date: '2024-09-10T13:20:00Z',
	},
	{
		id: 'feed-7',
		text: 'Excelente domínio da matéria e boa comunicação.',
		course: 'Análise e Desenvolvimento de Sistemas',
		student: 'Aluno Teste 7',
		discipline: 'Engenharia de Software',
		note: 4,
		date: '2024-09-09T15:10:00Z',
	},
	{
		id: 'feed-8',
		text: 'Professor muito técnico, explica conceitos avançados com clareza.',
		course: 'Ciência da Computação',
		student: 'Aluno Teste 8',
		discipline: 'Redes de Computadores',
		note: 5,
		date: '2024-09-08T08:00:00Z',
	},
	{
		id: 'feed-9',
		text: 'Aulas dinâmicas e conteúdo atual com o mercado.',
		course: 'Sistemas de Informação',
		student: 'Aluno Teste 9',
		discipline: 'Redes de Computadores',
		note: 4,
		date: '2024-09-07T19:30:00Z',
	},
	{
		id: 'feed-10',
		text: 'Matéria muito interessante, professor explica de forma clara.',
		course: 'Ciência da Computação',
		student: 'Aluno Teste 10',
		discipline: 'Inteligência Artificial',
		note: 5,
		date: '2024-09-06T10:45:00Z',
	},
	{
		id: 'feed-11',
		text: 'Podia melhorar a pontualidade, mas o conteúdo é bom.',
		course: 'Engenharia de Software',
		student: 'Aluno Teste 11',
		discipline: 'Inteligência Artificial',
		note: 3,
		date: '2024-09-05T14:15:00Z',
	},
	{
		id: 'feed-12',
		text: 'Professor muito preparado, aulas sempre bem planejadas.',
		course: 'Análise e Desenvolvimento de Sistemas',
		student: 'Aluno Teste 12',
		discipline: 'Programação Orientada a Objetos',
		note: 5,
		date: '2024-09-04T16:30:00Z',
	},
];

// Mock data para login
export const mockLoginData: Record<string, LoginResponse> = {
	'joao.silva@universidade.edu.br': {
		id: 'prof-1',
		accessToken: 'mock-access-token-prof-1',
		refreshToken: 'mock-refresh-token-prof-1',
		access_level: 1, // Professor
	},
	'maria.santos@universidade.edu.br': {
		id: 'prof-2',
		accessToken: 'mock-access-token-prof-2',
		refreshToken: 'mock-refresh-token-prof-2',
		access_level: 1, // Professor
	},
	'carlos.oliveira@universidade.edu.br': {
		id: 'prof-3',
		accessToken: 'mock-access-token-prof-3',
		refreshToken: 'mock-refresh-token-prof-3',
		access_level: 1, // Professor
	},
	'ana.costa@universidade.edu.br': {
		id: 'prof-4',
		accessToken: 'mock-access-token-prof-4',
		refreshToken: 'mock-refresh-token-prof-4',
		access_level: 1, // Professor
	},
	'diretor@universidade.edu.br': {
		id: 'dir-1',
		accessToken: 'mock-access-token-dir-1',
		refreshToken: 'mock-refresh-token-dir-1',
		access_level: 2, // Diretor
	},
};

// Função auxiliar para simular delay de rede
export const simulateNetworkDelay = (ms: number = 500) => 
	new Promise(resolve => setTimeout(resolve, ms));

// Funções auxiliares para filtrar dados
export const findProfessorById = (id: string) => 
	mockProfessors.find(prof => prof.id === id);

export const findUserById = (id: string) => 
	mockUsers.find(user => user.id === id);

export const findDisciplineById = (id: string) => 
	mockDisciplines.find(discipline => discipline.id === id);

export const findDisciplineByName = (name: string) => 
	mockDisciplines.filter(discipline => discipline.name === name);

export const findCourseByName = (name: string) => 
	mockCourses.filter(course => course.name === name);

export const findFeedbacksByDiscipline = (disciplineId: string) => {
	const discipline = findDisciplineById(disciplineId);
	if (!discipline) return [];
	
	return mockFeedbacks.filter(feedback => feedback.discipline === discipline.name);
};

export const findFeedbacksByProfessor = (professorId: string) => {
	const professor = findProfessorById(professorId);
	if (!professor) return [];
	
	return mockFeedbacks.filter(feedback => 
		professor.disciplines.includes(feedback.discipline)
	);
};