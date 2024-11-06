import { toast } from 'sonner';
import { api } from './api';
import { handleErrorResponse } from './error';
import { UserData } from '../hooks/useUserData';

export async function handleLogin(email: string, password: string) {
	try {
		const response = await api('/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});

		if (response.ok) {
			const data = await response.json();
			if (data.access_level < 1) {
				toast.error('Usuário não autorizado');
				return null;
			}
			return data;
		} else handleErrorResponse(response);
	} catch (error) {
		console.error('Error:', error);
		toast.error('Erro ao conectar com o servidor. Verifique sua conexão.');
	}
}

export function handleLogout() {
	if (
		localStorage.getItem('accessToken') &&
		localStorage.getItem('id') &&
		localStorage.getItem('access_level') &&
		localStorage.getItem('refreshToken')
	) {
		localStorage.removeItem('id');
		localStorage.removeItem('accessToken');
		localStorage.removeItem('access_level');
		localStorage.removeItem('refreshToken');
	} else {
		toast.error('Erro ao sair da conta.');
	}
}

export async function getNewAccessToken() {
	const refreshToken = localStorage.getItem('refreshToken');
	if (!refreshToken) {
		toast.error('Erro ao recuperar nova autenticação.');
		return null;
	}

	try {
		const response = await api('/refresh', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				refreshToken,
			}),
		});

		if (response.ok) {
			const data = await response.json();
			return data;
		} else handleErrorResponse(response);
	} catch (error) {
		console.error('Error:', error);
		toast.error('Erro ao conectar com o servidor. Verifique sua conexão.');
	}
}

export function storeInCache(
	userId: string,
	accessToken: string,
	access_level: number,
	refreshToken: string
) {
	localStorage.setItem('id', userId);
	localStorage.setItem('accessToken', accessToken);
	localStorage.setItem('access_level', access_level.toString());
	localStorage.setItem('refreshToken', refreshToken);
}

export async function getUserData(
	id: string,
	accessLevel: number
): Promise<UserData | null> {
	const userType = accessLevel === 1 ? 'professor' : 'director';

	try {
		const response = await api(`/${userType}/findById?id=${id}`, {
			method: 'GET',
		});

		if (response) return response;
		else return null;
	} catch (error) {
		console.error('Error:', error);
		toast.error('Erro ao conectar com o servidor. Verifique sua conexão.');
		return null;
	}
}

export async function apiUpdateUserData(
	id: string,
	accessLevel: number,
	updatedData: Partial<UserData>
) {
	const userType = accessLevel === 1 ? 'professor' : 'director';
	try {
		const response = await api(`/${userType}/updateById?id=${id}`, {
			method: 'POST',
			body: JSON.stringify({
				updatedData,
			}),
		});

		if (response.ok) {
			const data = await response.json();
			console.log('DATAAAAAAAAAAAAAAAAAA:', data);
			if (data.access_level < 1) {
				toast.error('Usuário não autorizado');
				return null;
			}
			return data;
		} else handleErrorResponse(response);
	} catch (error) {
		console.error('Error:', error);
		toast.error('Erro ao conectar com o servidor. Verifique sua conexão.');
	}
}
