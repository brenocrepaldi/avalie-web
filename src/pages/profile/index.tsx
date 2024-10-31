import { useState } from 'react';
import { PageLayout } from '../../components/page-layout';
import { UserInfo } from './profile-components/user-info';
import { PasswordChange } from './profile-components/password-change';

export function ProfilePage() {
	const [name, setName] = useState('Nome do usuário');
	const [email, setEmail] = useState('E-mail do usuário');

	const handleUpdateInfo = (newName: string, newEmail: string) => {
		setName(newName);
		setEmail(newEmail);
	};

	return (
		<PageLayout title="Perfil">
			<div className="bg-zinc-800 p-6 pb-8 pt-2 rounded-lg shadow-shape text-zinc-300 flex-grow">
				<div className="w-1/4 py-6 px-3 rounded-md flex flex-col space-y-6">
					<UserInfo name={name} email={email} onUpdate={handleUpdateInfo} />
					<div className="h-[1px] rounded-lg bg-zinc-700" />
					<PasswordChange />
				</div>
			</div>
		</PageLayout>
	);
}
