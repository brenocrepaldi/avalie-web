import { Check, Pencil } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '../../../components/button';
import { Input } from '../../../components/input';
import { useUserAccessLevel } from '../../../hooks/access-level';
import {
	Course,
	Disciple,
	SelectedDiscipline,
	UserData,
} from '../../../hooks/useUserData';
import { api } from '../../../services/api';

interface UserInfoProps {
	userData: UserData;
	isEditing: boolean;
	toggleEdit: () => void;
	setUpdatedData: (data: Partial<UserData>) => void;
	toggleConfirmationModal: () => void;
}

export function UserInfo({
	userData,
	isEditing,
	toggleEdit,
	setUpdatedData,
	toggleConfirmationModal,
}: UserInfoProps) {
	const userAccessLevel = useUserAccessLevel();
	const [formData, setFormData] = useState<UserData>(userData);
	const [selectedDisciplines, setSelectedDisciplines] = useState<
		SelectedDiscipline[]
	>([]);
	const [disciplines, setDisciplines] = useState<Disciple[]>([]);
	const [selectedCourse, setSelectedCourse] = useState<string | undefined>(
		userData.course
	);
	const [courses, setCourses] = useState<Course[]>([]);

	useEffect(() => {
		if (userAccessLevel === 1) {
			(async () => {
				try {
					const fetchedDisciplines = await api('/disciplines/findAll', {
						method: 'GET',
					});
					if (fetchedDisciplines) setDisciplines(fetchedDisciplines);
				} catch (error) {
					console.error('Falha ao buscar dados do usuário:', error);
				}
			})();
		}

		if (userAccessLevel === 2) {
			(async () => {
				try {
					const fetchedCourses = await api('/course/findAll', {
						method: 'GET',
					});
					if (fetchedCourses) setCourses(fetchedCourses);
				} catch (error) {
					console.error('Falha ao buscar cursos:', error);
				}
			})();
		}
	}, [userAccessLevel]);

	useEffect(() => {
		setFormData(userData);
		setSelectedCourse(userData.course);
		// Verifica se userData.disciplines é um array de strings e transforma em SelectedDiscipline[]
		const initialSelectedDisciplines = userData.disciplines
			?.map((disciplineName) => {
				const discipline = disciplines.find((d) => d.name === disciplineName);
				return discipline ? { id: discipline.id, name: discipline.name } : null;
			})
			.filter(Boolean) as SelectedDiscipline[]; // Filtra qualquer null e faz o cast para SelectedDiscipline[]

		setSelectedDisciplines(initialSelectedDisciplines || []); // Inicia com disciplinas do usuário
	}, [userData, disciplines]);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		const checked =
			(e.target as HTMLInputElement).type === 'checkbox'
				? (e.target as HTMLInputElement).checked
				: undefined;

		setFormData((prevData) => ({
			...prevData,
			[name]: checked !== undefined ? checked : value,
		}));

		if (name === 'course') {
			setSelectedCourse(value);
		}
	};

	const handleSave = () => {
		const filteredData = Object.fromEntries(
			Object.entries({
				...formData,
				disciplines:
					userAccessLevel === 1
						? selectedDisciplines.map((d) => d.id)
						: undefined,
				course: userAccessLevel === 2 ? selectedCourse : undefined,
				active: undefined,
				id: undefined,
			}).filter(([, value]) => value !== undefined)
		);

		setUpdatedData(filteredData);
		toggleConfirmationModal();
	};

	const handleToggleDiscipline = (discipline: Disciple) => {
		setSelectedDisciplines((prev) => {
			if (prev.some((d) => d.id === discipline.id)) {
				// Remove disciplina se já estiver selecionada
				return prev.filter((d) => d.id !== discipline.id);
			} else {
				// Adiciona disciplina se não estiver selecionada
				return [...prev, { id: discipline.id, name: discipline.name }];
			}
		});
	};

	return (
		<div className="space-y-3 p-2">
			<h2 className="text-2xl ml-[-10px]">Informações</h2>
			{!isEditing ? (
				<div className="bg-zinc-900 p-8 rounded-2xl shadow-xl">
					<div>
						<p className="text-sm text-gray-500 italic">
							{userAccessLevel === 1 ? 'Professor' : 'Diretor'}
						</p>
						<div className="flex items-center justify-between mt-4">
							<h2 className="text-3xl font-bold text-white">{userData.name}</h2>
							<button
								className="text-gray-400 hover:text-white transition duration-200 ease-in-out transform hover:scale-105"
								onClick={toggleEdit}
							>
								<Pencil size={22} />
							</button>
						</div>
						<p className="text-sm text-gray-400">{userData.email}</p>
					</div>
					<div className="h-[1px] rounded-lg bg-zinc-700 my-4" />
					<div className="mt-6 space-y-2">
						<h3 className="text-xl font-semibold text-gray-300">
							Informações Adicionais
						</h3>
						<ul className="list-inside text-gray-400 pl-2 space-y-2 list-none">
							<li>
								RA:{' '}
								<span className="font-medium text-white">{userData.ra}</span>
							</li>
							{userAccessLevel === 2 && (
								<li>
									Curso:{' '}
									<span className="font-medium text-white">
										{userData.course || 'Não especificado'}
									</span>
								</li>
							)}
							{userAccessLevel === 1 &&
								userData.disciplines &&
								userData.disciplines.length > 0 && (
									<li>
										Disciplinas:{' '}
										<div className="flex flex-wrap gap-2 mt-2">
											{userData.disciplines.map((discipline, index) => (
												<span
													key={index}
													className="bg-sky-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
												>
													{discipline}{' '}
												</span>
											))}
										</div>
									</li>
								)}
						</ul>
					</div>
				</div>
			) : (
				<form className="space-y-6 py-4">
					<div className="space-y-4">
						<Input
							label="Nome completo"
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							placeholder="Insira o nome completo"
							required
						/>
						<Input
							label="E-mail"
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="Insira o e-mail"
							required
						/>
						<Input
							label="RA"
							type="number"
							id="ra"
							name="ra"
							value={formData.ra}
							onChange={handleChange}
							placeholder="Insira o RA"
							required
						/>
						{userAccessLevel === 1 && (
							<div>
								<span className="text-zinc-300">Disciplinas</span>
								<div className="flex flex-wrap gap-2 mt-2">
									{disciplines.map((discipline) => (
										<button
											key={discipline.id}
											type="button"
											className={`border-2 rounded-md py-1 px-2 text-sm font-medium transition duration-200 ${
												selectedDisciplines.some((d) => d.id === discipline.id)
													? 'bg-sky-600 border-sky-400 text-white'
													: 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600'
											}`}
											onClick={() => handleToggleDiscipline(discipline)}
										>
											{discipline.name}
										</button>
									))}
								</div>
								<p className="mt-2 text-sm text-gray-400">
									Selecionadas:{' '}
									{selectedDisciplines.map((d) => d.name).join(', ')}
								</p>
							</div>
						)}
						{userAccessLevel === 2 && (
							<div className="flex flex-col">
								<label htmlFor="course" className="text-zinc-300">
									Curso
								</label>
								<select
									id="course"
									name="course"
									value={selectedCourse}
									onChange={handleChange}
									className="bg-zinc-900 text-zinc-200 p-2 rounded-md w-full h-12 mt-2"
								>
									<option value="" disabled>
										Selecione um curso
									</option>
									{courses.map((course) => (
										<option key={course.id} value={course.name}>
											{course.name}
										</option>
									))}
								</select>
							</div>
						)}
					</div>
					<div className="flex justify-end gap-4">
						<Button type="button" variant="secondary" onClick={toggleEdit}>
							Cancelar
						</Button>
						<Button type="button" onClick={handleSave}>
							<Check />
							Salvar
						</Button>
					</div>
				</form>
			)}
		</div>
	);
}
