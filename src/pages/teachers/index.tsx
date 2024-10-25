import { ChevronDown, ChevronUp, Star, PlusIcon, Search } from 'lucide-react';
import { useState } from 'react';
import { PageLayout } from '../../components/page-layout';
import { teachersData } from './teachers-data'; // alterar para dados do backend futuramente
import { Button } from '../../components/button';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/input';

type ExpandedTeachersState = {
	[key: number]: boolean;
};

type VisibleReviewsState = {
	[key: number]: number;
};

export function TeachersPage() {
	const navigate = useNavigate();
	const [expandedTeachers, setExpandedTeachers] =
		useState<ExpandedTeachersState>({});
	const [visibleReviews, setVisibleReviews] = useState<VisibleReviewsState>({});
	const [searchTerm, setSearchTerm] = useState('');

	const toggleExpand = (id: number) => {
		setExpandedTeachers((prevState) => {
			const isExpanding = !prevState[id];
			const newExpandedState = {
				...prevState,
				[id]: isExpanding,
			};

			if (!isExpanding) {
				setVisibleReviews((prevVisibleReviews) => ({
					...prevVisibleReviews,
					[id]: 3,
				}));
			}

			return newExpandedState;
		});
	};

	const renderStars = (rating: number) => {
		const maxStars = 5;
		const starElements = [];
		const roundedRating = Math.round(rating);

		for (let i = 1; i <= maxStars; i++) {
			starElements.push(
				<Star
					key={i}
					className={`h-6 w-6 ${
						i <= roundedRating ? 'text-yellow-400' : 'text-gray-400'
					}`}
				/>
			);
		}

		return starElements;
	};

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const handleShowMoreReviews = (teacherId: number) => {
		setVisibleReviews((prevState) => ({
			...prevState,
			[teacherId]: (prevState[teacherId] || 3) + 3,
		}));
	};

	const filteredTeachers = teachersData.filter((teacher) =>
		teacher.nome.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<PageLayout title="Professores">
			<div className="bg-zinc-800 p-6 pb-8 rounded-lg shadow-shape text-zinc-300 flex-grow space-y-8">
				<div className="flex justify-between">
					<Button onClick={() => navigate('/teachers/add-teacher')}>
						<PlusIcon />
						Adicionar Professor
					</Button>

					<Input
						icon={<Search />}
						type="text"
						name="professor"
						placeholder="Buscar professor"
						value={searchTerm}
						onChange={handleSearchChange}
					/>
				</div>

				<div className="h-[1px] rounded-lg bg-zinc-700" />

				<div className="space-y-6">
					<h2 className="text-2xl">Lista de Professores</h2>
					<div className="px-2 rounded-md flex flex-col space-y-4">
						{filteredTeachers.map((teacher) => (
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
										{teacher.nome}
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
											<span className="text-zinc-400">
												{teacher.disciplina}
											</span>
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
			</div>
		</PageLayout>
	);
}
