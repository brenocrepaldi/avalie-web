import { useEffect, useState } from 'react';
import { getUserData } from '../services/auth';
import { useUserId } from './user-id';
import { useUserAccessLevel } from './access-level';

export type UserData = {
	id: string;
	ra: string;
	name: string;
	email: string;
	password: string;
	disciplines?: string[]; // opcional para professores
	course?: string; // opcional para diretores
	active: boolean;
};

export function useUserData() {
	const userId = useUserId();
	const userAccessLevel = useUserAccessLevel();

	const [userData, setUserData] = useState<UserData>({
		id: 'ID do usuário',
		ra: 'RA do usuário',
		name: 'Nome do usuário',
		email: 'E-mail do usuário',
		password: 'Senha do usuário',
		active: false,
		...(userAccessLevel === 1
			? { disciplines: ['Disciplina 1', 'Disciplina 2'] }
			: null),
		...(userAccessLevel === 2 ? { course: 'Nome do curso' } : null),
	});

	useEffect(() => {
		if (userId && userAccessLevel !== null) {
			(async () => {
				try {
					const fetchedData = await getUserData(userId, userAccessLevel);
					if (fetchedData) {
						setUserData({
							...fetchedData,
							disciplines:
								userAccessLevel === 1 ? fetchedData.disciplines : undefined,
							course: userAccessLevel === 2 ? fetchedData.course : undefined,
						});
					}
				} catch (error) {
					console.error('Falha ao buscar dados do usuário:', error);
				}
			})();
		}
	}, [userId, userAccessLevel]);

	const updateUserData = (data: Partial<UserData>) => {
		setUserData((prevData) => ({ ...prevData, ...data }));
	};

	return { userData, updateUserData };
}
