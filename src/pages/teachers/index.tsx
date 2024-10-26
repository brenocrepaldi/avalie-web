import { PlusIcon, Search, Star } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { PageLayout } from '../../components/page-layout';
import { TeacherList } from './teachers-components/teacher-list';
import { teachersData } from './teachers-data'; // alterar para dados do backend futuramente

export type ExpandedTeachersState = {
	[key: number]: boolean;
};

export type VisibleReviewsState = {
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

				<TeacherList
					filteredTeachers={filteredTeachers}
					expandedTeachers={expandedTeachers}
					toggleExpand={toggleExpand}
					renderStars={renderStars}
					visibleReviews={visibleReviews}
					handleShowMoreReviews={handleShowMoreReviews}
				/>
			</div>
		</PageLayout>
	);
}
