import { EyeIcon, EyeOff } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/button';
import { handleLogin, storeTokens } from '../../services/auth';
import { LoginResponse } from '../../services/types';
import { ForgotPasswordModal } from './login-components/forgot-password-modal';

export function LoginPage() {
	const navigate = useNavigate();
	const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] =
		useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem('accessToken');
		if (token) {
			navigate('/dashboard');
		}
	}, [navigate]);

	const handleForgotPasswordModal = () => {
		setIsForgotPasswordModalOpen(!isForgotPasswordModalOpen);
	};

	const handlePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		showPassword ? setShowPassword(false) : setShowPassword(true);
	};

	function UserLogIn(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		handleLogin(email, password).then((data: LoginResponse) => {
			if (data) {
				storeTokens(data.accessToken, data.refreshToken, data.expiresIn);
				navigate('/dashboard');
			}
		});
	}

	return (
		<div className="bg-zinc-900 h-screen flex items-center justify-center">
			<div className="bg-zinc-800 w-[700px] h-auto rounded-xl py-7 px-12 shadow-shape flex flex-col justify-center gap-10">
				<div className="w-full text-center">
					<h2 className="text-3xl font-semibold">Login</h2>
				</div>

				<form className="space-y-3" onSubmit={UserLogIn}>
					<p className="text-sm text-zinc-400">
						Preencha seus dados para realizar o login.
					</p>
					<div className="space-y-2">
						<div className="h-12 px-4 bg-zinc-900 border-zinc-700 border-2 rounded-lg flex items-center gap-2">
							<input
								type="email"
								name="email"
								placeholder="Digite seu e-mail"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
								required
							/>
						</div>
						<div className="h-12 px-4 bg-zinc-900 border-zinc-700 border-2 rounded-lg flex items-center gap-2">
							<input
								type={showPassword ? 'text' : 'password'}
								name="password"
								placeholder="Digite sua senha"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
								required
							/>
							<button
								onClick={(e) => {
									handlePasswordVisibility(e);
								}}
							>
								{showPassword ? (
									<EyeOff className="text-zinc-400" />
								) : (
									<EyeIcon className="text-zinc-400" />
								)}
							</button>
						</div>
					</div>
					<div className="space-y-2">
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
