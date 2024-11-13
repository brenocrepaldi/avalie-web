import { ReactNode, useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '../../../components/button';
import { ExpandedProfessorsState, VisibleFeedbacksState } from '../index';
import { ProfessorDataProps } from '../../../utils/professorUtils';
import { api } from '../../../services/api';

interface ProfessorListProps {
	filteredProfessors: ProfessorDataProps[];
	expandedProfessors: ExpandedProfessorsState;
	toggleExpand: (id: number) => void;
	renderStars: (note: number) => ReactNode[];
	visibleFeedbacks: VisibleFeedbacksState;
	handleShowMoreFeedbacks: (professorId: number) => void;
}

interface Professor {
	id: number;
	name: string;
	ra: string;
	disciplines: string[];
	email: string;
	active: boolean;
}

type ProfessorList = Professor[];

export function ProfessorList({
	filteredProfessors,
	expandedProfessors,
	toggleExpand,
	renderStars,
	visibleFeedbacks,
	handleShowMoreFeedbacks,
}: ProfessorListProps) {
	const [professorList, setProfessorList] = useState<ProfessorList | null>(
		null
	);

	useEffect(() => {
		api('/professor/findAll', {
			method: 'GET',
		})
			.then((data: ProfessorList) => {
				setProfessorList(data);
				console.log(data);
			})
			.catch((error) => {
				console.error('Erro ao buscar a lista de professores:', error);
			});
	}, []);

	return (
		<div className="space-y-6">
			<h2 className="text-2xl">Lista de Professores</h2>
			<div className="px-2 rounded-md flex flex-col space-y-4">
				{professorList &&
					filteredProfessors.map(
						(professor: ProfessorDataProps, index: number) => (
							<div
								key={professor.id}
								className={`p-4 bg-zinc-700 rounded-lg transition-all duration-100 ease-in-out space-y-6 ${
									!expandedProfessors[professor.id] &&
									'hover:bg-zinc-600 cursor-pointer'
								}`}
								onClick={() => toggleExpand(professor.id)}
							>
								<div className="flex items-center justify-between">
									<h2 className="text-xl font-bold cursor-pointer text-zinc-300">
										{professorList[index].name}
									</h2>
									{expandedProfessors[professor.id] ? (
										<ChevronUp className="cursor-pointer" />
									) : (
										<ChevronDown className="cursor-pointer" />
									)}
								</div>
								{expandedProfessors[professor.id] && (
									<div
										className="transition-all duration-500 ease-in-out overflow-hidden flex flex-col gap-6 mt-6 p-6 bg-zinc-800 rounded-lg shadow-md"
										onClick={(e) => e.stopPropagation()}
									>
										<div className="border-zinc-600 flex gap-2 items-baseline">
											<span className="text-lg font-semibold text-zinc-100">
												Disciplina:
											</span>
											<span className="text-zinc-400">
												{professor.disciplina}
											</span>
										</div>

										<div className="h-[1px] rounded-lg bg-zinc-700" />

										<div className="border-zinc-600 flex gap-2 items-baseline">
											<span className="text-lg font-semibold text-zinc-100">
												Turmas:
											</span>
											<span className="text-zinc-400">
												{professor.turmas.join(', ')}
											</span>
										</div>

										<div className="h-[1px] rounded-lg bg-zinc-700" />

										<div className="border-zinc-600 flex gap-2 items-center">
											<span className="text-lg font-semibold text-zinc-100">
												Média de Avaliação:
											</span>
											<div className="flex items-center">
												{renderStars(professor.mediaAvaliacao)}
											</div>
										</div>

										<div className="h-[1px] rounded-lg bg-zinc-700" />

										<div className="space-y-4">
											<h3 className="text-lg font-semibold text-zinc-100">
												Avaliações:
											</h3>
											<ul className="space-y-3">
												{professor.avaliacoes
													.slice(0, visibleFeedbacks[professor.id] || 3)
													.map((avaliacao, index) => (
														<li key={index} className="flex rounded-lg">
															<div className="w-full px-4 py-4 bg-zinc-700 rounded-xl shadow-shape flex items-center gap-3">
																<span className="text-zinc-100 flex">
																	{renderStars(avaliacao.nota)}
																</span>
																<span className="text-zinc-300 italic">
																	"{avaliacao.comentario}"
																</span>
																<span className="text-zinc-400 text-sm ml-auto">
																	{avaliacao.data}
																</span>
															</div>
														</li>
													))}
											</ul>
											{(visibleFeedbacks[professor.id] || 3) <
												professor.avaliacoes.length && (
												<Button
													onClick={() => handleShowMoreFeedbacks(professor.id)}
													className="text-zinc-400 hover:text-zinc-200 underline mt-2"
													variant="secondary"
													size="full"
												>
													Mostrar mais
												</Button>
											)}
										</div>
									</div>
								)}
							</div>
						)
					)}
			</div>
		</div>
	);
}
