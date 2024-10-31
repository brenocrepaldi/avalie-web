import { useState, useEffect } from 'react';
import { Pencil } from 'lucide-react';
import { Input } from '../../../components/input';
import { Button } from '../../../components/button';

interface UserInfoProps {
	name: string;
	email: string;
	isEditing: boolean;
	handleEditToggle: () => void;
	handleUpdateInfo: (newName: string, newEmail: string) => void;
	handleConfirmationModal: () => void;
	isChangesConfirmed: boolean;
}

export function UserInfo({
	name,
	email,
	isEditing,
	handleEditToggle,
	handleUpdateInfo,
	handleConfirmationModal,
	isChangesConfirmed,
}: UserInfoProps) {
	const [editedName, setEditedName] = useState(name);
	const [editedEmail, setEditedEmail] = useState(email);

	const updateInfo = () => {
		handleConfirmationModal();
	};

	useEffect(() => {
		if (isChangesConfirmed) {
			handleUpdateInfo(editedName, editedEmail);
			handleEditToggle();
		}
	}, [
		isChangesConfirmed,
		editedName,
		editedEmail,
		handleUpdateInfo,
		handleEditToggle,
	]);

	return (
		<div className="space-y-3">
			<h2 className="text-2xl ml-[-10px]">Informações</h2>
			{!isEditing ? (
				<div className="bg-zinc-900 p-4 rounded-lg flex">
					<div className="flex-1">
						<h2 className="text-2xl font-bold">{name}</h2>
						<p className="text-sm text-zinc-400">{email}</p>
					</div>
					<button
						className="text-zinc-400 hover:text-zinc-200"
						onClick={handleEditToggle}
					>
						<Pencil size={17} />
					</button>
				</div>
			) : (
				<div className="space-y-3">
					<div className="pt-2 space-y-2">
						<span className="text-zinc-300">Nome completo</span>
						<Input
							type="text"
							placeholder="Insira seu nome completo"
							value={editedName}
							onChange={(e) => setEditedName(e.target.value)}
						/>
					</div>
					<div className="space-y-2">
						<span className="text-zinc-300">E-mail</span>
						<Input
							type="email"
							placeholder="Insira seu e-mail"
							value={editedEmail}
							onChange={(e) => setEditedEmail(e.target.value)}
						/>
					</div>
					<Button type="button" size="full" onClick={updateInfo}>
						Confirmar
					</Button>
				</div>
			)}
		</div>
	);
}
