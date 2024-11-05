import { Check, Pencil } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '../../../components/button';
import { Input } from '../../../components/input';
import { useUserAccessLevel } from '../../../hooks/access-level';
import { UserData } from '../../../hooks/useUserData';
import { api } from '../../../services/api';

interface UserInfoProps {
	userData: UserData;
	isEditing: boolean;
	toggleEdit: () => void;
	setUpdatedData: (data: Partial<UserData>) => void;
	toggleConfirmationModal: () => void;
}

type Disciple = {
	id: string;
	active: boolean;
	days_week: string[];
	end_time: string;
	name: string;
	start_time: string;
};

export function UserInfo({
	userData,
	isEditing,
	toggleEdit,
	setUpdatedData,
	toggleConfirmationModal,
}: UserInfoProps) {
	const userAccessLevel = useUserAccessLevel();
	const [formData, setFormData] = useState<UserData>(userData);
	const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([]);
	const [disciplines, setDisciplines] = useState<Disciple[]>([]);

	useEffect(() => {
		if (userAccessLevel !== null) {
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
	}, [userAccessLevel]);

	useEffect(() => {
		setFormData(userData);
		if (userData.disciplines) setSelectedDisciplines(userData.disciplines);
	}, [userData]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, type, checked } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const handleSave = () => {
		setUpdatedData({ ...formData, disciplines: selectedDisciplines }); // Atualiza com disciplinas selecionadas
		toggleConfirmationModal(); // Abre o modal de confirmação
	};

	const handleToggleDiscipline = (discipline: string) => {
		setSelectedDisciplines((prev) => {
			if (prev.includes(discipline)) {
				// Remove disciplina se já estiver selecionada
				return prev.filter((d) => d !== discipline);
			} else {
				// Adiciona disciplina se não estiver selecionada
				return [...prev, discipline];
			}
		});
	};

	return (
		<div className="space-y-3 p-2">
			<h2 className="text-2xl ml-[-10px]">Informações</h2>
			{!isEditing ? (
				<div className="bg-zinc-900 p-6 rounded-lg shadow-shape">
					<p className="text-sm text-gray-500 italic">
						{userAccessLevel === 1 ? 'Professor' : 'Diretor'}
					</p>
					<div className="flex items-center justify-between">
						<h2 className="text-2xl font-bold text-white">{userData.name}</h2>
						<button
							className="text-gray-400 hover:text-white transition duration-200"
							onClick={toggleEdit}
						>
							<Pencil size={20} />
						</button>
					</div>
					<p className="text-sm text-gray-400">{userData.email}</p>
					<div className="mt-4">
						<h3 className="text-lg font-semibold text-gray-300">
							Informações Adicionais
						</h3>
						<ul className="list-disc list-inside text-gray-400 pl-4">
							<li className="py-1">
								RA:{' '}
								<span className="font-medium text-white">{userData.ra}</span>
							</li>
							{userAccessLevel === 2 && (
								<li className="py-1">
									Curso:{' '}
									<span className="font-medium text-white">
										{userData.course || 'Não especificado'}
									</span>
								</li>
							)}
							{userAccessLevel === 1 &&
								userData.disciplines &&
								userData.disciplines.length > 0 && (
									<li className="py-1">
										Disciplinas:{' '}
										<span className="font-medium text-white">
											{userData.disciplines.join(', ')}
										</span>
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
												selectedDisciplines.includes(discipline.name)
													? 'bg-sky-600 border-sky-400 text-white'
													: 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600'
											}`}
											onClick={() => handleToggleDiscipline(discipline.id)}
										>
											{discipline.name}
										</button>
									))}
								</div>
								<p className="mt-2 text-sm text-gray-400">
									Selecionadas: {selectedDisciplines.join(', ')}
								</p>
								4
							</div>
						)}
						{userAccessLevel === 2 && formData.course && (
							<Input
								label="Curso"
								type="text"
								id="course"
								name="course"
								value={formData.course}
								onChange={handleChange}
								placeholder="Insira o curso"
								required
							/>
						)}
					</div>
					<div className="flex justify-end gap-2">
						<Button type="button" variant="secondary" onClick={toggleEdit}>
							Cancelar
						</Button>
						<Button type="button" onClick={handleSave}>
							<Check />
							Confirmar Alterações
						</Button>
					</div>
				</form>
			)}
		</div>
	);
}
