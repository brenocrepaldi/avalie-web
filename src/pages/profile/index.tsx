import { useState } from 'react';
import { toast } from 'sonner';
import { PageLayout } from '../../components/page-layout';
import { useUserAccessLevel } from '../../hooks/access-level';
import { useUserId } from '../../hooks/user-id';
import { UserData, useUserData } from '../../hooks/useUserData';
import { apiUpdateUserData } from '../../services/auth';
import { ConfirmationModal } from './profile-components/confirmation-modal';
import { PasswordChange } from './profile-components/password-change';
import { UserInfo } from './profile-components/user-info';

export function ProfilePage() {
	const userId = useUserId();
	const userAccessLevel = useUserAccessLevel();
	const { userData, updateUserData } = useUserData();
	const [isEditing, setIsEditing] = useState(false);
	const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
	const [updatedData, setUpdatedData] = useState<Partial<UserData> | null>(
		null
	);

	const toggleEdit = () => setIsEditing((prev) => !prev);
	const toggleConfirmationModal = () =>
		setIsConfirmationModalOpen((prev) => !prev);

	const handleUpdateUserData = () => {
		if (updatedData) {
			updateUserData(updatedData);

			console.log('Dados atualizados do usuário:', updatedData);
			// atualizar os dados no backend

			if (userId && userAccessLevel !== null)
				apiUpdateUserData(userId, userAccessLevel, updatedData);

			toast.success('Dados do usuário atualizados com sucesso!');
			setIsEditing(false);
			setUpdatedData(null);
		}
	};

	return (
		<PageLayout title="Perfil">
			<div className="bg-zinc-800 p-6 pb-8 pt-2 rounded-lg shadow-shape text-zinc-300 flex-grow">
				<div className="w-1/3 py-6 px-3 rounded-md flex flex-col space-y-6">
					<UserInfo
						userData={userData}
						isEditing={isEditing}
						toggleEdit={toggleEdit}
						setUpdatedData={setUpdatedData} // Atualiza o estado com os dados
						toggleConfirmationModal={toggleConfirmationModal} // Abre o modal
					/>
					<div className="h-[1px] rounded-lg bg-zinc-700" />
					<PasswordChange />
				</div>
			</div>

			{isConfirmationModalOpen && (
				<ConfirmationModal
					confirm={handleUpdateUserData}
					toggleModal={toggleConfirmationModal}
				/>
			)}
		</PageLayout>
	);
}
