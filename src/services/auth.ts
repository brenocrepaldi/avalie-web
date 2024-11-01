import { toast } from 'sonner';
import { api } from './api';
import { handleErrorResponse } from './error';
import { useEffect, useState } from 'react';

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
		localStorage.getItem('access_level') &&
		localStorage.getItem('refreshToken')
	) {
		localStorage.removeItem('accessToken');
		localStorage.removeItem('access_level');
		localStorage.removeItem('refreshToken');
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
	access_level: number,
	refreshToken: string
) {
	localStorage.setItem('accessToken', accessToken);
	localStorage.setItem('access_level', access_level.toString());
	localStorage.setItem('refreshToken', refreshToken);
}

export function useUserAccessLevel() {
	const [accessLevel, setAccessLevel] = useState<number | null>(null);

	useEffect(() => {
		const accessLevelStr = localStorage.getItem('access_level');
		if (accessLevelStr) {
			setAccessLevel(parseInt(accessLevelStr));
		}
	}, []);

	return accessLevel;
}
