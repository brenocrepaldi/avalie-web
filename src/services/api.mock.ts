import { getNewAccessToken, storeInCache } from './auth';
import {
  mockCourses,
  mockDisciplines,
  mockProfessors,
  mockLoginData,
  simulateNetworkDelay,
  findUserById,
  findDisciplineById,
  findDisciplineByName,
  findCourseByName,
  findFeedbacksByDiscipline
} from './mockData';

const apiUrl = import.meta.env.VITE_API_URL;
const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_DATA === 'true' || !apiUrl;

// Função para simular chamadas de API com dados mockados
async function mockApiCall(path: string, options: RequestInit = {}) {
  await simulateNetworkDelay();
  
  const method = options.method || 'GET';
  const url = new URL(path, 'http://localhost');
  const pathname = url.pathname;
  const searchParams = url.searchParams;

  // Simulação de login
  if (pathname === '/login' && method === 'POST') {
    const body = JSON.parse(options.body as string);
    const loginData = mockLoginData[body.email];
    
    if (loginData && body.password === '123456') {
      return {
        ok: true,
        json: async () => loginData
      };
    } else {
      return {
        ok: false,
        status: 401,
        json: async () => ({ message: 'Credenciais inválidas' })
      };
    }
  }

  // Simulação de refresh token
  if (pathname === '/refresh-token' && method === 'POST') {
    const body = JSON.parse(options.body as string);
    const refreshToken = body.refreshToken;
    
    // Encontrar usuário pelo refresh token
    const userData = Object.values(mockLoginData).find(
      data => data.refreshToken === refreshToken
    );
    
    if (userData) {
      return {
        ok: true,
        json: async () => ({
          ...userData,
          accessToken: userData.accessToken + '-refreshed'
        })
      };
    } else {
      return {
        ok: false,
        status: 401
      };
    }
  }

  // Endpoints GET
  if (method === 'GET') {
    // Professores
    if (pathname === '/professor/findAll') {
      return mockProfessors;
    }
    
    if (pathname === '/professor/findById') {
      const id = searchParams.get('id');
      const professor = findUserById(id || '');
      return professor || null;
    }

    // Diretores
    if (pathname === '/director/findById') {
      const id = searchParams.get('id');
      const director = findUserById(id || '');
      return director || null;
    }

    // Cursos
    if (pathname === '/course/findAll') {
      return mockCourses;
    }
    
    if (pathname === '/course/findByName') {
      const name = searchParams.get('name');
      return findCourseByName(name || '');
    }

    // Disciplinas
    if (pathname === '/disciplines/findAll') {
      return mockDisciplines;
    }
    
    if (pathname === '/disciplines/findById') {
      const id = searchParams.get('id');
      return findDisciplineById(id || '');
    }
    
    if (pathname === '/disciplines/findByName') {
      const name = searchParams.get('name');
      return findDisciplineByName(name || '');
    }

    // Feedbacks
    if (pathname === '/feedback/findByDiscipline') {
      const disciplineId = searchParams.get('disciplineId');
      return findFeedbacksByDiscipline(disciplineId || '');
    }
  }

  // Se chegou até aqui, endpoint não encontrado
  throw new Error(`Mock endpoint not found: ${method} ${pathname}`);
}

if (!apiUrl && !USE_MOCK_DATA) {
  throw new Error(
    'A URL do backend não foi definida. Verifique a variável de ambiente VITE_API_URL ou ative VITE_USE_MOCK_DATA=true.'
  );
}

export async function api(path: string, options: RequestInit = {}) {
  // Se estiver usando dados mockados, chama a função de mock
  if (USE_MOCK_DATA) {
    return mockApiCall(path, options);
  }

  // Código original para chamadas reais da API
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
    };
  }

  const response = await fetch(`${apiUrl}${path}`, options);

  if (response.status === 401) {
    if (accessToken) localStorage.removeItem('accessToken');
    if (options.headers)
      delete (options.headers as Record<string, string>)['Authorization'];

    const data = await getNewAccessToken();
    if (data) {
      storeInCache(
        data.id,
        data.accessToken,
        data.access_level,
        data.refreshToken
      );
      console.log('accessToken atualizado com sucesso!');
      window.location.reload(); // revarrega a página para atualizar o token
    }
  }

  if (options.method === 'GET') {
    const data = await response.json();
    return data;
  }

  return response;
}
