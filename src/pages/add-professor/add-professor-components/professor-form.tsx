import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '../../../components/button';
import { Input } from '../../../components/input';

export function ProfessorForm() {
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

	const handlePasswordVisibility = () => setShowPassword(!showPassword);

	const registerProfessor = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(formData);
		toast.success(`Professor cadastrado com sucesso!`);
	};

	return (
		<form onSubmit={registerProfessor} className="space-y-6">
			<div className="space-y-4">
				<Input
					label="Nome completo"
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					placeholder="Insira o nome completo"
					required
				/>
				<Input
					label="E-mail"
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					placeholder="Insira o e-mail"
					required
				/>
				<Input
					label="Senha"
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
				<Input
					label="RA"
					type="number"
					id="ra"
					name="ra"
					value={formData.ra}
					onChange={handleChange}
					placeholder="Insira o RA"
					required
				/>
				<Input
					label="Disciplina"
					type="text"
					id="discipline"
					name="discipline"
					value={formData.discipline}
					onChange={handleChange}
					placeholder="Insira a disciplina"
					required
				/>
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
	);
}
