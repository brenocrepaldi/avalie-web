import { useEffect, useState } from 'react';

export function useUserId() {
	const [accessLevel, setAccessLevel] = useState<string | null>(null);

	useEffect(() => {
		const accessLevel = localStorage.getItem('id');
		if (accessLevel) {
			setAccessLevel(accessLevel);
		}
	}, []);

	return accessLevel;
}
