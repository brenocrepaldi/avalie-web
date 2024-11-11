import { toast } from 'sonner';
import { api } from '../services/api';
import { getDisciplineId } from './useDisciplines';

// Função para buscar os dados do usuário
async function fetchUserData(userId: string, userType: string) {
	try {
		const response = await api(`/${userType}/findById?id=${userId}`, {
			method: 'GET',
		});
		return response ?? null;
	} catch (error) {
		console.error('Error:', error);
		toast.error('Erro ao conectar com o servidor. Verifique sua conexão.');
		return null;
	}
}

// Tipo para avaliação
type Rating = {
	id: string;
	text: string;
	course: string;
	student: string;
	discipline: string;
	note: number;
	date: string;
};

// Função para calcular as avaliações (positivas, neutras, negativas e soma das notas)
function calculateRatings(data: Rating[]) {
	let positiveRatings = 0;
	let neutralRatings = 0;
	let negativeRatings = 0;
	let sumOfRatings = 0;

	data.forEach((feedback) => {
		sumOfRatings += feedback.note;
		if (feedback.note > 3) {
			positiveRatings++;
		} else if (feedback.note < 3) {
			negativeRatings++;
		} else {
			neutralRatings++;
		}
	});

	return { positiveRatings, neutralRatings, negativeRatings, sumOfRatings };
}

// Função para obter as informações do professor (média e total de avaliações)
export async function getProfessorRatingInfo(professorId: string) {
	const professorData = await fetchUserData(professorId, 'professor');
	if (!professorData) return null;
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
					{ method: 'GET' }
				);

				if (data) {
					totalRatings += data.length;
					const {
						positiveRatings: positive,
						neutralRatings: neutral,
						negativeRatings: negative,
						sumOfRatings: sum,
					} = calculateRatings(data);
					positiveRatings += positive;
					neutralRatings += neutral;
					negativeRatings += negative;
					sumOfRatings += sum;
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

export type DisciplineRating = {
	disciplineName: string;
	positiveRatings: number;
	neutralRatings: number;
	negativeRatings: number;
};

// Função para obter as informações de avaliações por disciplina do professor
export async function getProfessorDisciplineRatingInfo(professorId: string) {
	const professorData = await fetchUserData(professorId, 'professor');
	if (!professorData) return null;
	const professorDisciplinesId = await getDisciplineId(professorData);

	const disciplineRatings: DisciplineRating[] = [];
	await Promise.all(
		professorDisciplinesId.map(async (disciplineId, index: number) => {
			try {
				const data: Rating[] = await api(
					`/feedback/findByDiscipline?discipline=${disciplineId}`,
					{ method: 'GET' }
				);

				if (data && professorData) {
					const { positiveRatings, neutralRatings, negativeRatings } =
						calculateRatings(data);

					const disciplineName = professorData.disciplines[index];
					disciplineRatings.push({
						disciplineName,
						positiveRatings,
						neutralRatings,
						negativeRatings,
					});
				}
			} catch (error) {
				console.error('Error:', error);
				toast.error('Erro ao conectar com o servidor. Verifique sua conexão.');
			}
		})
	);

	// Retornando as informações de todas as disciplinas
	return disciplineRatings;
}
