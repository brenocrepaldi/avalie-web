import { getNewAccessToken, storeInCache } from './auth';

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
			console.log('Token Atualizado');
			console.log(data.refreshToken);
		}
	}

	return response;
}
