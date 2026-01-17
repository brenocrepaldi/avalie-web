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
	{
		id: 'disc-7',
		name: 'Sistemas Operacionais',
		start_time: '14:00',
		end_time: '16:00',
		days_week: ['Terça', 'Quinta'],
		active: true,
	},
	{
		id: 'disc-8',
		name: 'Arquitetura de Computadores',
		start_time: '16:00',
		end_time: '18:00',
		days_week: ['Segunda', 'Quarta'],
		active: true,
	},
	{
		id: 'disc-9',
		name: 'Desenvolvimento Web',
		start_time: '19:00',
		end_time: '21:00',
		days_week: ['Terça', 'Quinta'],
		active: true,
	},
	{
		id: 'disc-10',
		name: 'Segurança da Informação',
		start_time: '08:00',
		end_time: '10:00',
		days_week: ['Sexta'],
		active: true,
	},
	{
		id: 'disc-11',
		name: 'Computação em Nuvem',
		start_time: '10:00',
		end_time: '12:00',
		days_week: ['Segunda', 'Quarta'],
		active: true,
	},
	{
		id: 'disc-12',
		name: 'Machine Learning',
		start_time: '14:00',
		end_time: '16:00',
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
		disciplines: ['Redes de Computadores', 'Segurança da Informação'],
		email: 'carlos.oliveira@universidade.edu.br',
		active: true,
	},
	{
		id: 'prof-4',
		name: 'Dra. Ana Costa',
		ra: '45678',
		disciplines: ['Inteligência Artificial', 'Machine Learning'],
		email: 'ana.costa@universidade.edu.br',
		active: true,
	},
	{
		id: 'prof-5',
		name: 'Prof. Pedro Almeida',
		ra: '56789',
		disciplines: ['Sistemas Operacionais', 'Arquitetura de Computadores'],
		email: 'pedro.almeida@universidade.edu.br',
		active: true,
	},
	{
		id: 'prof-6',
		name: 'Profa. Juliana Ferreira',
		ra: '67890',
		disciplines: ['Desenvolvimento Web', 'Programação Orientada a Objetos'],
		email: 'juliana.ferreira@universidade.edu.br',
		active: true,
	},
	{
		id: 'prof-7',
		name: 'Dr. Rafael Sousa',
		ra: '78901',
		disciplines: ['Computação em Nuvem', 'Banco de Dados'],
		email: 'rafael.sousa@universidade.edu.br',
		active: true,
	},
	{
		id: 'prof-8',
		name: 'Dra. Fernanda Lima',
		ra: '89012',
		disciplines: ['Engenharia de Software', 'Desenvolvimento Web'],
		email: 'fernanda.lima@universidade.edu.br',
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
		disciplines: ['Redes de Computadores', 'Segurança da Informação'],
		active: true,
	},
	{
		id: 'prof-4',
		ra: '45678',
		name: 'Dra. Ana Costa',
		email: 'ana.costa@universidade.edu.br',
		password: '123456',
		disciplines: ['Inteligência Artificial', 'Machine Learning'],
		active: true,
	},
	{
		id: 'prof-5',
		ra: '56789',
		name: 'Prof. Pedro Almeida',
		email: 'pedro.almeida@universidade.edu.br',
		password: '123456',
		disciplines: ['Sistemas Operacionais', 'Arquitetura de Computadores'],
		active: true,
	},
	{
		id: 'prof-6',
		ra: '67890',
		name: 'Profa. Juliana Ferreira',
		email: 'juliana.ferreira@universidade.edu.br',
		password: '123456',
		disciplines: ['Desenvolvimento Web', 'Programação Orientada a Objetos'],
		active: true,
	},
	{
		id: 'prof-7',
		ra: '78901',
		name: 'Dr. Rafael Sousa',
		email: 'rafael.sousa@universidade.edu.br',
		password: '123456',
		disciplines: ['Computação em Nuvem', 'Banco de Dados'],
		active: true,
	},
	{
		id: 'prof-8',
		ra: '89012',
		name: 'Dra. Fernanda Lima',
		email: 'fernanda.lima@universidade.edu.br',
		password: '123456',
		disciplines: ['Engenharia de Software', 'Desenvolvimento Web'],
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
	// Feedbacks para Algoritmos e Estruturas de Dados
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
		id: 'feed-13',
		text: 'Os exercícios propostos ajudam muito no aprendizado.',
		course: 'Engenharia de Software',
		student: 'Aluno Teste 13',
		discipline: 'Algoritmos e Estruturas de Dados',
		note: 3,
		date: '2024-09-13T08:15:00Z',
	},
	{
		id: 'feed-14',
		text: 'Professor explica os conceitos de forma clara e objetiva.',
		course: 'Ciência da Computação',
		student: 'Aluno Teste 14',
		discipline: 'Algoritmos e Estruturas de Dados',
		note: 5,
		date: '2024-09-12T11:30:00Z',
	},
	{
		id: 'feed-15',
		text: 'Gostaria que houvesse mais tempo para tirar dúvidas.',
		course: 'Sistemas de Informação',
		student: 'Aluno Teste 15',
		discipline: 'Algoritmos e Estruturas de Dados',
		note: 2,
		date: '2024-09-11T16:45:00Z',
	},

	// Feedbacks para Programação Orientada a Objetos
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
		id: 'feed-12',
		text: 'Professor muito preparado, aulas sempre bem planejadas.',
		course: 'Análise e Desenvolvimento de Sistemas',
		student: 'Aluno Teste 12',
		discipline: 'Programação Orientada a Objetos',
		note: 5,
		date: '2024-09-04T16:30:00Z',
	},
	{
		id: 'feed-16',
		text: 'As práticas em laboratório são excelentes!',
		course: 'Ciência da Computação',
		student: 'Aluno Teste 16',
		discipline: 'Programação Orientada a Objetos',
		note: 5,
		date: '2024-09-10T10:20:00Z',
	},
	{
		id: 'feed-17',
		text: 'Material didático bem elaborado e atual.',
		course: 'Engenharia de Software',
		student: 'Aluno Teste 17',
		discipline: 'Programação Orientada a Objetos',
		note: 4,
		date: '2024-09-09T14:30:00Z',
	},
	{
		id: 'feed-18',
		text: 'Professor domina Java e C++, ensina muito bem.',
		course: 'Ciência da Computação',
		student: 'Aluno Teste 18',
		discipline: 'Programação Orientada a Objetos',
		note: 5,
		date: '2024-09-08T15:40:00Z',
	},

	// Feedbacks para Banco de Dados
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
		id: 'feed-19',
		text: 'Aprendi muito sobre SQL e modelagem de dados.',
		course: 'Sistemas de Informação',
		student: 'Aluno Teste 19',
		discipline: 'Banco de Dados',
		note: 5,
		date: '2024-09-07T13:20:00Z',
	},
	{
		id: 'feed-20',
		text: 'Excelente abordagem prática com PostgreSQL.',
		course: 'Ciência da Computação',
		student: 'Aluno Teste 20',
		discipline: 'Banco de Dados',
		note: 4,
		date: '2024-09-06T09:10:00Z',
	},
	{
		id: 'feed-21',
		text: 'As aulas sobre normalização foram muito esclarecedoras.',
		course: 'Análise e Desenvolvimento de Sistemas',
		student: 'Aluno Teste 21',
		discipline: 'Banco de Dados',
		note: 5,
		date: '2024-09-05T14:50:00Z',
	},

	// Feedbacks para Engenharia de Software
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
		id: 'feed-22',
		text: 'Os conceitos de SCRUM e metodologias ágeis foram bem explicados.',
		course: 'Ciência da Computação',
		student: 'Aluno Teste 22',
		discipline: 'Engenharia de Software',
		note: 5,
		date: '2024-09-04T11:00:00Z',
	},
	{
		id: 'feed-23',
		text: 'Gostei das apresentações de casos reais de projetos.',
		course: 'Engenharia de Software',
		student: 'Aluno Teste 23',
		discipline: 'Engenharia de Software',
		note: 4,
		date: '2024-09-03T16:20:00Z',
	},
	{
		id: 'feed-24',
		text: 'Professor tem muita experiência na indústria, agrega bastante.',
		course: 'Sistemas de Informação',
		student: 'Aluno Teste 24',
		discipline: 'Engenharia de Software',
		note: 5,
		date: '2024-09-02T10:30:00Z',
	},

	// Feedbacks para Redes de Computadores
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
		id: 'feed-25',
		text: 'Práticas com Cisco Packet Tracer foram essenciais.',
		course: 'Ciência da Computação',
		student: 'Aluno Teste 25',
		discipline: 'Redes de Computadores',
		note: 5,
		date: '2024-09-01T14:40:00Z',
	},
	{
		id: 'feed-26',
		text: 'Aprendi muito sobre protocolos TCP/IP.',
		course: 'Engenharia de Software',
		student: 'Aluno Teste 26',
		discipline: 'Redes de Computadores',
		note: 4,
		date: '2024-08-31T09:15:00Z',
	},
	{
		id: 'feed-27',
		text: 'A parte de configuração de roteadores foi bem explicada.',
		course: 'Sistemas de Informação',
		student: 'Aluno Teste 27',
		discipline: 'Redes de Computadores',
		note: 5,
		date: '2024-08-30T11:50:00Z',
	},

	// Feedbacks para Inteligência Artificial
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
		note: 2,
		date: '2024-09-05T14:15:00Z',
	},
	{
		id: 'feed-28',
		text: 'Os algoritmos de busca foram muito bem apresentados.',
		course: 'Ciência da Computação',
		student: 'Aluno Teste 28',
		discipline: 'Inteligência Artificial',
		note: 5,
		date: '2024-08-29T16:30:00Z',
	},
	{
		id: 'feed-29',
		text: 'Gostei das aplicações práticas com Python.',
		course: 'Sistemas de Informação',
		student: 'Aluno Teste 29',
		discipline: 'Inteligência Artificial',
		note: 4,
		date: '2024-08-28T13:20:00Z',
	},
	{
		id: 'feed-30',
		text: 'A introdução a redes neurais foi fascinante.',
		course: 'Ciência da Computação',
		student: 'Aluno Teste 30',
		discipline: 'Inteligência Artificial',
		note: 5,
		date: '2024-08-27T10:10:00Z',
	},

	// Feedbacks para Sistemas Operacionais
	{
		id: 'feed-31',
		text: 'Excelente explicação sobre processos e threads.',
		course: 'Ciência da Computação',
		student: 'Aluno Teste 31',
		discipline: 'Sistemas Operacionais',
		note: 5,
		date: '2024-08-26T11:20:00Z',
	},
	{
		id: 'feed-32',
		text: 'As práticas com Linux foram muito úteis.',
		course: 'Engenharia de Software',
		student: 'Aluno Teste 32',
		discipline: 'Sistemas Operacionais',
		note: 4,
		date: '2024-08-25T14:30:00Z',
	},
	{
		id: 'feed-33',
		text: 'Professor domina muito bem o assunto.',
		course: 'Sistemas de Informação',
		student: 'Aluno Teste 33',
		discipline: 'Sistemas Operacionais',
		note: 5,
		date: '2024-08-24T09:45:00Z',
	},
	{
		id: 'feed-34',
		text: 'Gostaria de mais tempo para as atividades práticas.',
		course: 'Ciência da Computação',
		student: 'Aluno Teste 34',
		discipline: 'Sistemas Operacionais',
		note: 2,
		date: '2024-08-23T16:00:00Z',
	},

	// Feedbacks para Arquitetura de Computadores
	{
		id: 'feed-35',
		text: 'Aulas muito técnicas e bem estruturadas.',
		course: 'Ciência da Computação',
		student: 'Aluno Teste 35',
		discipline: 'Arquitetura de Computadores',
		note: 5,
		date: '2024-08-22T10:15:00Z',
	},
	{
		id: 'feed-36',
		text: 'A parte de Assembly foi desafiadora mas muito boa.',
		course: 'Engenharia de Software',
		student: 'Aluno Teste 36',
		discipline: 'Arquitetura de Computadores',
		note: 4,
		date: '2024-08-21T13:30:00Z',
	},
	{
		id: 'feed-37',
		text: 'Professor explica os conceitos de hardware muito bem.',
		course: 'Sistemas de Informação',
		student: 'Aluno Teste 37',
		discipline: 'Arquitetura de Computadores',
		note: 5,
		date: '2024-08-20T15:45:00Z',
	},

	// Feedbacks para Desenvolvimento Web
	{
		id: 'feed-38',
		text: 'Aprendi muito sobre React e frameworks modernos.',
		course: 'Ciência da Computação',
		student: 'Aluno Teste 38',
		discipline: 'Desenvolvimento Web',
		note: 5,
		date: '2024-08-19T11:00:00Z',
	},
	{
		id: 'feed-39',
		text: 'Os projetos práticos foram excelentes!',
		course: 'Engenharia de Software',
		student: 'Aluno Teste 39',
		discipline: 'Desenvolvimento Web',
		note: 5,
		date: '2024-08-18T14:20:00Z',
	},
	{
		id: 'feed-40',
		text: 'Professor sempre atualizado com as novas tecnologias.',
		course: 'Sistemas de Informação',
		student: 'Aluno Teste 40',
		discipline: 'Desenvolvimento Web',
		note: 4,
		date: '2024-08-17T16:30:00Z',
	},
	{
		id: 'feed-41',
		text: 'Gostei muito das aulas sobre APIs RESTful.',
		course: 'Análise e Desenvolvimento de Sistemas',
		student: 'Aluno Teste 41',
		discipline: 'Desenvolvimento Web',
		note: 5,
		date: '2024-08-16T10:40:00Z',
	},

	// Feedbacks para Segurança da Informação
	{
		id: 'feed-42',
		text: 'Conteúdo extremamente relevante e atual.',
		course: 'Ciência da Computação',
		student: 'Aluno Teste 42',
		discipline: 'Segurança da Informação',
		note: 5,
		date: '2024-08-15T13:15:00Z',
	},
	{
		id: 'feed-43',
		text: 'As práticas de penetration testing foram incríveis.',
		course: 'Engenharia de Software',
		student: 'Aluno Teste 43',
		discipline: 'Segurança da Informação',
		note: 5,
		date: '2024-08-14T09:30:00Z',
	},
	{
		id: 'feed-44',
		text: 'Professor tem vasta experiência na área.',
		course: 'Sistemas de Informação',
		student: 'Aluno Teste 44',
		discipline: 'Segurança da Informação',
		note: 4,
		date: '2024-08-13T15:00:00Z',
	},

	// Feedbacks para Computação em Nuvem
	{
		id: 'feed-45',
		text: 'Aprendi muito sobre AWS e Azure.',
		course: 'Ciência da Computação',
		student: 'Aluno Teste 45',
		discipline: 'Computação em Nuvem',
		note: 5,
		date: '2024-08-12T11:45:00Z',
	},
	{
		id: 'feed-46',
		text: 'Aulas práticas com Docker e Kubernetes foram ótimas.',
		course: 'Engenharia de Software',
		student: 'Aluno Teste 46',
		discipline: 'Computação em Nuvem',
		note: 5,
		date: '2024-08-11T14:10:00Z',
	},
	{
		id: 'feed-47',
		text: 'Professor domina as plataformas de cloud computing.',
		course: 'Sistemas de Informação',
		student: 'Aluno Teste 47',
		discipline: 'Computação em Nuvem',
		note: 4,
		date: '2024-08-10T16:25:00Z',
	},

	// Feedbacks para Machine Learning
	{
		id: 'feed-48',
		text: 'Conteúdo desafiador mas muito interessante.',
		course: 'Ciência da Computação',
		student: 'Aluno Teste 48',
		discipline: 'Machine Learning',
		note: 5,
		date: '2024-08-09T10:30:00Z',
	},
	{
		id: 'feed-49',
		text: 'As aplicações com TensorFlow foram excelentes.',
		course: 'Engenharia de Software',
		student: 'Aluno Teste 49',
		discipline: 'Machine Learning',
		note: 5,
		date: '2024-08-08T13:45:00Z',
	},
	{
		id: 'feed-50',
		text: 'Professora explica conceitos complexos de forma clara.',
		course: 'Ciência da Computação',
		student: 'Aluno Teste 50',
		discipline: 'Machine Learning',
		note: 4,
		date: '2024-08-07T15:20:00Z',
	},
	{
		id: 'feed-51',
		text: 'Gostei muito dos projetos com datasets reais.',
		course: 'Sistemas de Informação',
		student: 'Aluno Teste 51',
		discipline: 'Machine Learning',
		note: 5,
		date: '2024-08-06T09:00:00Z',
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
	'pedro.almeida@universidade.edu.br': {
		id: 'prof-5',
		accessToken: 'mock-access-token-prof-5',
		refreshToken: 'mock-refresh-token-prof-5',
		access_level: 1, // Professor
	},
	'juliana.ferreira@universidade.edu.br': {
		id: 'prof-6',
		accessToken: 'mock-access-token-prof-6',
		refreshToken: 'mock-refresh-token-prof-6',
		access_level: 1, // Professor
	},
	'rafael.sousa@universidade.edu.br': {
		id: 'prof-7',
		accessToken: 'mock-access-token-prof-7',
		refreshToken: 'mock-refresh-token-prof-7',
		access_level: 1, // Professor
	},
	'fernanda.lima@universidade.edu.br': {
		id: 'prof-8',
		accessToken: 'mock-access-token-prof-8',
		refreshToken: 'mock-refresh-token-prof-8',
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
	new Promise((resolve) => setTimeout(resolve, ms));

// Funções auxiliares para filtrar dados
export const findProfessorById = (id: string) => mockProfessors.find((prof) => prof.id === id);

export const findUserById = (id: string) => mockUsers.find((user) => user.id === id);

export const findDisciplineById = (id: string) =>
	mockDisciplines.find((discipline) => discipline.id === id);

export const findDisciplineByName = (name: string) =>
	mockDisciplines.filter((discipline) => discipline.name === name);

export const findCourseByName = (name: string) =>
	mockCourses.filter((course) => course.name === name);

export const findFeedbacksByDiscipline = (disciplineId: string) => {
	const discipline = findDisciplineById(disciplineId);
	if (!discipline) return [];

	return mockFeedbacks.filter((feedback) => feedback.discipline === discipline.name);
};

export const findFeedbacksByProfessor = (professorId: string) => {
	const professor = findProfessorById(professorId);
	if (!professor) return [];

	return mockFeedbacks.filter((feedback) => professor.disciplines.includes(feedback.discipline));
};
