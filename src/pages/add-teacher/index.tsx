import { useNavigate } from 'react-router-dom';
import { PageLayout } from '../../components/page-layout';
import { BackButton } from './add-teacher-components/back-button';
import { TeacherForm } from './add-teacher-components/teacher-form';

export function AddTeacherPage() {
	const navigate = useNavigate();

	return (
		<PageLayout title="Professores">
			<div className="flex gap-2">
				<BackButton onClick={() => navigate('/teachers')} />
				<div className="w-full bg-zinc-800 rounded-xl shadow-lg">
					<div className="w-1/3 p-6 flex-grow space-y-6">
						<h2 className="text-2xl">Adicionar Professor</h2>
						<div className="h-[1px] rounded-lg bg-zinc-700" />
						<TeacherForm />
					</div>
				</div>
			</div>
		</PageLayout>
	);
}
