import { useState } from 'react';
import { Button } from '../../components/button';
import { PageLayout } from '../../components/page-layout';
import { LockOpenIcon, Pencil } from 'lucide-react';
import { toast } from 'sonner';
import { Input } from '../../components/input';

export function ProfilePage() {
	const [name, setName] = useState('Nome do usuário');
	const [email, setEmail] = useState('E-mail do usuário');
	const [password, setPassword] = useState(String);
	const [showPassword, setShowPassword] = useState(false);
	const [isChangePasswordVisible, setIsChangePasswordVisible] = useState(false);
	const [isChangeInfoVisible, setIsChangeInfoVisible] = useState(false);

	const handlePasswordVisibility = () => {
		showPassword ? setShowPassword(false) : setShowPassword(true);
	};

	const handleChangeInfoVisibility = () => {
		isChangeInfoVisible
			? setIsChangeInfoVisible(false)
			: setIsChangeInfoVisible(true);
	};

	const handleChangePasswordVisibility = () => {
		isChangePasswordVisible
			? setIsChangePasswordVisible(false)
			: setIsChangePasswordVisible(true);
	};

	function changeInfo() {
		// Lógica de mudar a senha
		handleChangeInfoVisibility();
		toast.success('Informações alteradas!');
	}

	function changePassword() {
		// Lógica de mudar a senha
		handleChangePasswordVisibility();
		toast.success('Senha alterada!');
	}

	return (
		<PageLayout title="Perfil">
			<div className="bg-zinc-800 p-6 pb-8 pt-2 rounded-lg shadow-shape text-zinc-300 flex-grow">
				<div className="w-1/4 py-6 px-3 rounded-md flex flex-col space-y-6">
					<h2 className="text-2xl ml-[-10px]">Informações</h2>
					{!isChangeInfoVisible ? (
						<div className="bg-zinc-900 p-4 rounded-lg flex">
							<div className="flex-1">
								<h2 className="text-2xl font-bold">Nome do Usuário</h2>
								<p className="text-sm text-zinc-400">email@example.com</p>
							</div>
							<button
								className="text-zinc-400 hover:text-zinc-200"
								onClick={handleChangeInfoVisibility}
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
									name="name"
									placeholder="Insira seu nome completo"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div className="space-y-2">
								<span className="text-zinc-300">E-mail</span>
								<Input
									type="email"
									name="email"
									placeholder="Insira seu e-mail"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>

							<Button type="button" size="full" onClick={changeInfo}>
								Confirmar
							</Button>
						</div>
					)}

					<div className="h-[1px] rounded-lg bg-zinc-700" />

					<div className="space-y-4">
						<h2 className="text-2xl ml-[-10px]">Segurança</h2>
						{!isChangePasswordVisible ? (
							<Button
								type="button"
								variant="secondary"
								size="full"
								onClick={handleChangePasswordVisibility}
							>
								<LockOpenIcon size={18} />
								Alterar Senha
							</Button>
						) : (
							<div className="space-y-3">
								<div>
									<span className="text-zinc-300">Nova senha</span>
									<Input
										isPassword={true}
										handlePasswordVisibility={handlePasswordVisibility}
										showPassword={showPassword}
										type={showPassword ? 'text' : 'password'}
										name="password"
										placeholder="Insira uma nova senha"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										required
									/>
								</div>

								<Button type="button" size="full" onClick={changePassword}>
									Confirmar
								</Button>
							</div>
						)}
					</div>
				</div>
			</div>
		</PageLayout>
	);
}
