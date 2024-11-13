import { PlusIcon, Search, Star } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { PageLayout } from '../../components/page-layout';
import { ProfessorList } from './professor-components/professor-list';
import { professorsData as professorsData } from '../../utils/professorUtils'; // alterar para dados do backend futuramente

export type ExpandedProfessorsState = {
	[key: number]: boolean;
};

export type VisibleFeedbacksState = {
	[key: number]: number;
};

export function ProfessorsPage() {
	const navigate = useNavigate();
	const [expandedProfessors, setExpandedProfessors] =
		useState<ExpandedProfessorsState>({});
	const [visibleFeedbacks, setVisibleFeedbacks] =
		useState<VisibleFeedbacksState>({});
	const [searchTerm, setSearchTerm] = useState('');

	const toggleExpand = (id: number) => {
		setExpandedProfessors((prevState) => {
			const isExpanding = !prevState[id];
			const newExpandedState = {
				...prevState,
				[id]: isExpanding,
			};

			if (!isExpanding) {
				setVisibleFeedbacks((prevVisibleFeedbacks) => ({
					...prevVisibleFeedbacks,
					[id]: 3,
				}));
			}

			return newExpandedState;
		});
	};

	const renderStars = (note: number) => {
		const maxStars = 5;
		const starElements = [];
		const roundedNote = Math.round(note);

		for (let i = 1; i <= maxStars; i++) {
			starElements.push(
				<Star
					key={i}
					className={`h-6 w-6 ${
						i <= roundedNote ? 'text-yellow-400' : 'text-gray-400'
					}`}
				/>
			);
		}

		return starElements;
	};

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const handleShowMoreFeedbacks = (professorId: number) => {
		setVisibleFeedbacks((prevState) => ({
			...prevState,
			[professorId]: (prevState[professorId] || 3) + 3,
		}));
	};

	const filteredProfessors = professorsData.filter((professor) =>
		professor.nome.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<PageLayout title="Professores">
			<div className="bg-zinc-800 p-6 pb-8 rounded-lg shadow-shape text-zinc-300 flex-grow space-y-8">
				<div className="flex justify-between">
					<Button onClick={() => navigate('/professors/add-professor')}>
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

				<ProfessorList
					filteredProfessors={filteredProfessors}
					expandedProfessors={expandedProfessors}
					toggleExpand={toggleExpand}
					renderStars={renderStars}
					visibleFeedbacks={visibleFeedbacks}
					handleShowMoreFeedbacks={handleShowMoreFeedbacks}
				/>
			</div>
		</PageLayout>
	);
}