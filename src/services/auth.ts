import { toast } from 'sonner';
import { api } from './api';
import { handleErrorResponse } from './error';

const apiUrl = import.meta.env.VITE_API_URL;

if (!apiUrl) {
	throw new Error(
		'A URL do backend não foi definida. Verifique a variável de ambiente VITE_API_URL.'
	);
}

export async function handleLogin(email: string, password: string) {
	try {
		const response = await api(`${apiUrl}/login`, {
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
		localStorage.getItem('refreshToken') &&
		localStorage.getItem('expiryDate')
	) {
		localStorage.removeItem('accessToken');
		localStorage.removeItem('refreshToken');
		localStorage.removeItem('expiryDate');
	} else {
		toast.error('Erro ao sair da conta.');
	}
}

export async function refreshToken() {
	try {
		const response = await api(`${apiUrl}/refresh`, {
			method: 'POST',
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

export function storeTokens(
	accessToken: string,
	refreshToken: string,
	expiresIn: number
) {
	localStorage.setItem('accessToken', accessToken);
	localStorage.setItem('refreshToken', refreshToken);
	const expiryDate = new Date(new Date().getTime() + expiresIn * 1000);
	localStorage.setItem('expiryDate', expiryDate.toISOString());
}
