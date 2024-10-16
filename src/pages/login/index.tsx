import { useState } from 'react';
import { Button } from '../../components/button';
import { ForgotPasswordModal } from './login-components/forgot-password-modal';

export function LoginPage() {
	const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] =
		useState(false);

	const handleForgotPasswordModal = () => {
		isForgotPasswordModalOpen
			? setIsForgotPasswordModalOpen(false)
			: setIsForgotPasswordModalOpen(true);
	};

	return (
		<div className="bg-zinc-900 h-screen flex items-center justify-center">
			<div className="bg-zinc-800 w-[640px] h-auto rounded-xl py-7 px-6 shadow-shape flex flex-col justify-center gap-10">
				<div className="w-full text-center">
					<h2 className="text-3xl font-semibold">Login</h2>
				</div>

				<form className="space-y-3">
					<p className="text-sm text-zinc-400">
						Preencha seus dados para realizar o login.
					</p>
					<div className="space-y-2">
						<div className="h-12 px-4 bg-zinc-900 border-zinc-800 rounded-lg flex items-center gap-2">
							<input
								type="email"
								name="email"
								placeholder="Digite seu e-mail"
								className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
							/>
						</div>

						<div className="h-12 px-4 bg-zinc-900 border-zinc-800 rounded-lg flex items-center gap-2">
							<input
								type="password"
								name="password"
								placeholder="Digite sua senha"
								className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
							/>
						</div>
					</div>
					<Button type="submit" variant="primary" size="full">
						Entrar
					</Button>

					<div className="w-full flex justify-center">
						<button
							type="button"
							className="text-sm text-zinc-300 underline hover:text-zinc-200"
							onClick={handleForgotPasswordModal}
						>
							Esqueci minha senha
						</button>
					</div>
				</form>
			</div>

			{isForgotPasswordModalOpen && (
				<ForgotPasswordModal
					handleForgotPasswordModal={handleForgotPasswordModal}
				/>
			)}
		</div>
	);
}
