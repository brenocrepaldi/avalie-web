import { useEffect, useState } from 'react';

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
