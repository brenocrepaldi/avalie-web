import { useEffect, useState } from 'react';
import { PageLayout } from '../../components/page-layout';
import { UserInfo } from './profile-components/user-info';
import { PasswordChange } from './profile-components/password-change';
import { ConfirmationModal } from './profile-components/confirmation-modal';
import { toast } from 'sonner';

export function ProfilePage() {
	const [name, setName] = useState<string>('Nome do usuário');
	const [email, setEmail] = useState<string>('E-mail do usuário');
	const [isEditing, setIsEditing] = useState(false);
	const [isConfirmationModalOpen, setIsConfirmationModalOpen] =
		useState<boolean>(false);
	const [isChangesConfirmed, setIsChangesConfirmed] = useState<boolean>(false);

	const handleEditToggle = () => setIsEditing((prev) => !prev);

	const handleConfirmationModal = () =>
		setIsConfirmationModalOpen((prev) => !prev);

	const handleUpdateInfo = (newName: string, newEmail: string) => {
		setName(newName);
		setEmail(newEmail);
		toast.success('Informações alteradas!');
	};

	useEffect(() => {
		if (isChangesConfirmed) {
			setIsChangesConfirmed(false);
			setIsEditing(false);
		}
	}, [isChangesConfirmed]);

	return (
		<PageLayout title="Perfil">
			<div className="bg-zinc-800 p-6 pb-8 pt-2 rounded-lg shadow-shape text-zinc-300 flex-grow">
				<div className="w-1/4 py-6 px-3 rounded-md flex flex-col space-y-6">
					<UserInfo
						name={name}
						email={email}
						isEditing={isEditing}
						handleEditToggle={handleEditToggle}
						handleUpdateInfo={handleUpdateInfo}
						handleConfirmationModal={handleConfirmationModal}
						isChangesConfirmed={isChangesConfirmed}
					/>
					<div className="h-[1px] rounded-lg bg-zinc-700" />
					<PasswordChange />
				</div>
			</div>

			{isConfirmationModalOpen && (
				<ConfirmationModal
					setIsChangesConfirmed={setIsChangesConfirmed}
					handleConfirmationModal={handleConfirmationModal}
				/>
			)}
		</PageLayout>
	);
}
