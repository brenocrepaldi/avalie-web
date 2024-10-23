import { ChevronDown, ChevronUp, Star, PlusIcon } from 'lucide-react';
import { useState } from 'react';
import { PageLayout } from '../../components/page-layout';
import { teachersData } from './teachers-data'; // alterar para dados do backend futuramente
import { Button } from '../../components/button';
import { useNavigate } from 'react-router-dom';

// Defina o tipo para o estado expandedTeachers
type ExpandedTeachersState = {
	[key: number]: boolean;
};

export function TeachersPage() {
	const navigate = useNavigate();
	// Tipagem explícita para o estado expandedTeachers
	const [expandedTeachers, setExpandedTeachers] =
		useState<ExpandedTeachersState>({});

	// Função para alternar entre expandir e colapsar o conteúdo do professor
	const toggleExpand = (id: number) => {
		setExpandedTeachers((prevState) => ({
			...prevState,
			[id]: !prevState[id], // Alterna o estado expandido/colapsado
		}));
	};

	const renderStars = (rating: number) => {
		const maxStars = 5;
		const starElements = [];
		const roundedRating = Math.round((rating / 10) * 5); // Converter a nota de 0 a 10 para 0 a 5 estrelas

		for (let i = 1; i <= maxStars; i++) {
			starElements.push(
				<Star
					key={i}
					className={`h-5 w-5 ${
						i <= roundedRating ? 'text-yellow-400' : 'text-gray-400'
					}`}
				/>
			);
		}

		return starElements;
	};

	return (
		<PageLayout title="Professores">
			<div className="bg-zinc-800 p-6 pb-8 rounded-lg shadow-shape text-zinc-300 flex-grow space-y-8">
				<div className="flex justify-between">
					<Button onClick={() => navigate('/teachers/add-teacher')}>
						<PlusIcon />
						Adicionar Professor
					</Button>
					<div className="h-12 w-1/4 px-4 bg-zinc-900 border-zinc-800 rounded-lg flex items-center">
						<input
							type="text"
							placeholder="Buscar professor"
							className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
						/>
					</div>
				</div>

				<div className="h-[1px] rounded-lg bg-zinc-700" />

				<div>
					<h2 className="text-2xl mb-4">Lista de Professores</h2>
					<div className="px-2 rounded-md flex flex-col space-y-4">
						{teachersData.map((teacher) => (
							<div
								key={teacher.id}
								className="p-4 bg-zinc-700 rounded-lg hover:bg-zinc-600 transition-all duration-100 ease-in-out space-y-6"
								onClick={() => toggleExpand(teacher.id)}
							>
								<div className="flex items-center justify-between">
									<h2 className="text-xl font-bold cursor-pointer">
										{teacher.nome}
									</h2>
									{expandedTeachers[teacher.id] ? (
										<ChevronUp className="cursor-pointer" />
									) : (
										<ChevronDown className="cursor-pointer" />
									)}
								</div>
								{expandedTeachers[teacher.id] && (
									<div className="transition-all duration-500 ease-in-out overflow-hidden flex flex-col gap-4 mt-4 p-4 bg-zinc-800 rounded-md">
										<div className="border-b border-zinc-600 pb-2">
											<span className="block font-semibold text-lg text-zinc-100">
												Disciplina:
											</span>
											<span className="text-zinc-400">
												{teacher.disciplina}
											</span>
										</div>
										<div className="border-b border-zinc-600 pb-2">
											<span className="block font-semibold text-lg text-zinc-100">
												Turmas:
											</span>
											<span className="text-zinc-400">
												{teacher.turmas.join(', ')}
											</span>
										</div>
										<div className="flex items-center gap-2 border-b border-zinc-600 pb-2">
											<span className="block font-semibold text-lg text-zinc-100">
												Média de Avaliação:
											</span>
											<div className="flex">
												{renderStars(teacher.mediaAvaliacao)}
											</div>
										</div>
										<div>
											<h3 className="font-semibold text-lg text-zinc-100 mb-2">
												Avaliações:
											</h3>
											<ul className="list-disc pl-5 text-zinc-400">
												{teacher.avaliacoes.map((avaliacao, index) => (
													<li key={index} className="mb-1">
														<span className="text-zinc-100">
															{avaliacao.data}
														</span>
														-
														<span className="text-teal-400">
															{avaliacao.turma}
														</span>
														:
														<div className="flex">
															{renderStars(avaliacao.nota)}
														</div>
														<span className="text-zinc-300">
															({avaliacao.comentario})
														</span>
													</li>
												))}
											</ul>
										</div>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</PageLayout>
	);
}
