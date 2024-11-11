import { toast } from 'sonner';
import { api } from '../services/api';
import { UserData } from './useUserData';
import { getDisciplineId } from './useDisciplines';

async function getTypedUserData(userId: string, userType: string) {
	try {
		const data = await api(`/${userType}/findById?id=${userId}`, {
			method: 'GET',
		});

		if (data) return data;
	} catch (error) {
		console.error('Error:', error);
		toast.error('Erro ao conectar com o servidor. Verifique sua conexão.');
		return null;
	}
}

type Rating = {
	id: string;
	text: string;
	course: string;
	student: string;
	discipline: string;
	note: number;
	date: string;
};

export async function getProfessorRatingInfo(professorId: string) {
	const professorData: UserData = await getTypedUserData(
		professorId,
		'professor'
	);
	const professorDisciplinesId = await getDisciplineId(professorData);

	let totalRatings = 0;
	let sumOfRatings = 0;
	let positiveRatings = 0;
	let neutralRatings = 0;
	let negativeRatings = 0;

	await Promise.all(
		professorDisciplinesId.map(async (disciplineId) => {
			try {
				const data: Rating[] = await api(
					`/feedback/findByDiscipline?discipline=${disciplineId}`,
					{
						method: 'GET',
					}
				);

				if (data) {
					totalRatings += data.length;
					data.map((feedback) => {
						sumOfRatings += feedback.note;
						if (feedback.note > 3) {
							positiveRatings++;
						} else if (feedback.note < 3) {
							negativeRatings++;
						} else {
							neutralRatings++;
						}
					});
				}
			} catch (error) {
				console.error('Error:', error);
				toast.error('Erro ao conectar com o servidor. Verifique sua conexão.');
			}
		})
	);

	const meanRating = totalRatings > 0 ? sumOfRatings / totalRatings : 0;

	return {
		meanRating,
		totalRatings,
		positiveRatings,
		neutralRatings,
		negativeRatings,
	};
}
