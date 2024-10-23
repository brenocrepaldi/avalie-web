import { ChevronLeft, EyeIcon, EyeOff, PlusIcon } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/button';
import { PageLayout } from '../../../components/page-layout';
import { toast } from 'sonner';

export function AddTeacherPage() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		ra: '',
		discipline: '',
		active: false,
	});
	const [showPassword, setShowPassword] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, type, checked } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const handlePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		showPassword ? setShowPassword(false) : setShowPassword(true);
	};

	const registerTeacher = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Requisição para cadastrar professor no backend

		toast.success(`Professor cadastrado com sucesso!`);
	};

	return (
		<PageLayout title="Professores">
			<div className="flex gap-2">
				<div
					className="flex items-center justify-center flex-shrink-0 bg-zinc-800 hover:bg-zinc-700 transition-all duration-100 p-4 rounded-lg shadow-lg text-zinc-400 cursor-pointer"
					onClick={() => {
						navigate('/teachers');
					}}
				>
					<ChevronLeft />
				</div>
				<div className="w-full bg-zinc-800 rounded-xl shadow-lg">
					<div className="w-1/3 p-6 flex-grow space-y-6">
						<h2 className="text-2xl">Adicionar Professor</h2>

						<div className="h-[1px] rounded-lg bg-zinc-700" />

						<div className="px-2 rounded-md flex flex-col flex-grow">
							<form
								onSubmit={(e) => {
									registerTeacher(e);
								}}
								className="space-y-6"
							>
								<div className="space-y-4">
									<div className="space-y-2">
										<span className="text-zinc-300">Nome completo</span>
										<div className="h-12 px-4 border-zinc-700 border-2 rounded-lg flex items-center gap-2">
											<input
												type="text"
												id="name"
												name="name"
												value={formData.name}
												onChange={handleChange}
												placeholder="Insira o nome completo"
												className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
												required
											/>
										</div>
									</div>

									<div className="space-y-2">
										<span className="text-zinc-300">E-mail</span>
										<div className="h-12 px-4 border-zinc-700 border-2 rounded-lg flex items-center gap-2">
											<input
												type="email"
												id="email"
												name="email"
												value={formData.email}
												onChange={handleChange}
												placeholder="Insira o e-mail"
												className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
												required
											/>
										</div>
									</div>

									<div className="space-y-2">
										<span className="text-zinc-300">Senha</span>
										<div className="h-12 px-4 border-zinc-700 border-2 rounded-lg flex items-center gap-2">
											<input
												type={showPassword ? 'text' : 'password'}
												name="password"
												placeholder="Insira uma nova senha"
												value={formData.password}
												onChange={handleChange}
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
										<span className="text-zinc-300">RA</span>
										<div className="h-12 px-4 border-zinc-700 border-2 rounded-lg flex items-center gap-2">
											<input
												type="number"
												id="ra"
												name="ra"
												value={formData.ra}
												onChange={handleChange}
												placeholder="Insira o RA"
												className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1 appearance-none"
												required
											/>
										</div>
									</div>

									<div className="space-y-2">
										<span className="text-zinc-300">Disciplina</span>
										<div className="h-12 px-4 border-zinc-700 border-2 rounded-lg flex items-center gap-2">
											<input
												type="text"
												id="discipline"
												name="discipline"
												value={formData.discipline}
												onChange={handleChange}
												placeholder="Insira a disciplina"
												className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
												required
											/>
										</div>
									</div>
									<div className="flex items-center justify-start gap-2">
										<input
											type="checkbox"
											id="active"
											name="active"
											checked={formData.active}
											onChange={handleChange}
											className="w-4 h-4"
										/>
										<label htmlFor="active">Ativo</label>
									</div>
								</div>
								<div className="flex justify-end">
									<Button type="submit">
										<PlusIcon />
										Adicionar Professor
									</Button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</PageLayout>
	);
}
