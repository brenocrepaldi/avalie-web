import { toast } from 'sonner';
import { refreshToken, storeTokens } from './auth';

export async function api(url: string, options: RequestInit = {}) {
	const accessToken = localStorage.getItem('accessToken');
	if (accessToken) {
		options.headers = {
			...options.headers,
			Authorization: `Bearer ${accessToken}`,
		};
	}

	const response = await fetch(url, options);

	if (response.status === 401) {
		if (accessToken) {
			const data = await refreshToken();
			if (data)
				storeTokens(data.accessToken, data.refreshToken, data.expiresIn);
		} else toast.error('Sessão expirada. Faça login novamente.');
	}

	return response;
}
export { storeTokens };

