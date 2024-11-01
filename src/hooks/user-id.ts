import { useEffect, useState } from 'react';

export function useUserId() {
	const [accessLevel, setAccessLevel] = useState<string | null>(null);

	useEffect(() => {
		const accessLevel = localStorage.getItem('_id');
		if (accessLevel) {
			setAccessLevel(accessLevel);
		}
	}, []);

	return accessLevel;
}
