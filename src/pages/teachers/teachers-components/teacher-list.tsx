import { ReactNode, useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '../../../components/button';
import { ExpandedTeachersState, VisibleReviewsState } from '../index';
import { TeacherDataProps } from '../../../utils/teachersUtils';
import { api } from '../../../services/api';

interface TeacherListProps {
	filteredTeachers: TeacherDataProps[];
	expandedTeachers: ExpandedTeachersState;
	toggleExpand: (id: number) => void;
	renderStars: (rating: number) => ReactNode[];
	visibleReviews: VisibleReviewsState;
	handleShowMoreReviews: (teacherId: number) => void;
}

interface Teacher {
	id: number;
	name: string;
	ra: string;
	disciplines: string[];
	email: string;
	active: boolean;
}

type TeacherList = Teacher[];

export function TeacherList({
	filteredTeachers,
	expandedTeachers,
	toggleExpand,
	renderStars,
	visibleReviews,
	handleShowMoreReviews,
}: TeacherListProps) {
	const [teacherList, setTeacherList] = useState<TeacherList | null>(null);

	useEffect(() => {
		api('/professor/findAll', {
			method: 'GET',
		})
			.then((data: TeacherList) => {
				setTeacherList(data);
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
				{teacherList &&
					filteredTeachers.map((teacher: TeacherDataProps, index: number) => (
						<div
							key={teacher.id}
							className={`p-4 bg-zinc-700 rounded-lg transition-all duration-100 ease-in-out space-y-6 ${
								!expandedTeachers[teacher.id] &&
								'hover:bg-zinc-600 cursor-pointer'
							}`}
							onClick={() => toggleExpand(teacher.id)}
						>
							<div className="flex items-center justify-between">
								<h2 className="text-xl font-bold cursor-pointer text-zinc-300">
									{teacherList[index].name}
								</h2>
								{expandedTeachers[teacher.id] ? (
									<ChevronUp className="cursor-pointer" />
								) : (
									<ChevronDown className="cursor-pointer" />
								)}
							</div>
							{expandedTeachers[teacher.id] && (
								<div
									className="transition-all duration-500 ease-in-out overflow-hidden flex flex-col gap-6 mt-6 p-6 bg-zinc-800 rounded-lg shadow-md"
									onClick={(e) => e.stopPropagation()}
								>
									<div className="border-zinc-600 flex gap-2 items-baseline">
										<span className="text-lg font-semibold text-zinc-100">
											Disciplina:
										</span>
										<span className="text-zinc-400">{teacher.disciplina}</span>
									</div>

									<div className="h-[1px] rounded-lg bg-zinc-700" />

									<div className="border-zinc-600 flex gap-2 items-baseline">
										<span className="text-lg font-semibold text-zinc-100">
											Turmas:
										</span>
										<span className="text-zinc-400">
											{teacher.turmas.join(', ')}
										</span>
									</div>

									<div className="h-[1px] rounded-lg bg-zinc-700" />

									<div className="border-zinc-600 flex gap-2 items-center">
										<span className="text-lg font-semibold text-zinc-100">
											Média de Avaliação:
										</span>
										<div className="flex items-center">
											{renderStars(teacher.mediaAvaliacao)}
										</div>
									</div>

									<div className="h-[1px] rounded-lg bg-zinc-700" />

									<div className="space-y-4">
										<h3 className="text-lg font-semibold text-zinc-100">
											Avaliações:
										</h3>
										<ul className="space-y-3">
											{teacher.avaliacoes
												.slice(0, visibleReviews[teacher.id] || 3)
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
										{(visibleReviews[teacher.id] || 3) <
											teacher.avaliacoes.length && (
											<Button
												onClick={() => handleShowMoreReviews(teacher.id)}
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
					))}
			</div>
		</div>
	);
}
