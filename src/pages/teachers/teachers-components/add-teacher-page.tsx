import { ChevronLeft, PlusIcon } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/button';
import { PageLayout } from '../../../components/page-layout';
import { toast } from 'sonner';
import { Input } from '../../../components/input';

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

		console.log(formData);

		// Requisição para cadastrar professor no backend

		toast.success(`Professor cadastrado com sucesso!`);
	};

	return (
		<PageLayout title="Professores">
			<div className="flex gap-2">
				<div
					className="flex items-center justify-center flex-shrink-0 bg-zinc-700 hover:bg-zinc-600 transition-all duration-100 p-4 rounded-lg shadow-lg text-zinc-400 cursor-pointer"
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
										<Input
											type="text"
											id="name"
											name="name"
											value={formData.name}
											onChange={handleChange}
											placeholder="Insira o nome completo"
											required
										/>
									</div>

									<div className="space-y-2">
										<span className="text-zinc-300">E-mail</span>
										<Input
											type="email"
											id="email"
											name="email"
											value={formData.email}
											onChange={handleChange}
											placeholder="Insira o e-mail"
											required
										/>
									</div>

									<div className="space-y-2">
										<span className="text-zinc-300">Senha</span>
										<Input
											isPassword={true}
											handlePasswordVisibility={handlePasswordVisibility}
											showPassword={showPassword}
											type={showPassword ? 'text' : 'password'}
											name="password"
											placeholder="Digite sua senha"
											value={formData.password}
											onChange={handleChange}
											required
										/>
									</div>

									<div className="space-y-2">
										<span className="text-zinc-300">RA</span>
										<Input
											type="number"
											id="ra"
											name="ra"
											value={formData.ra}
											onChange={handleChange}
											placeholder="Insira o RA"
											required
										/>
									</div>

									<div className="space-y-2">
										<span className="text-zinc-300">Disciplina</span>
										<Input
											type="text"
											id="discipline"
											name="discipline"
											value={formData.discipline}
											onChange={handleChange}
											placeholder="Insira a disciplina"
											required
										/>
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
										<label htmlFor="active" className="text-zinc-200">
											Ativo
										</label>
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
