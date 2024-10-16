import { useState } from 'react';
import { LogOut } from 'lucide-react';
import { MenuBar } from './dashboard-components/menu-bar/index';
import { Button } from '../../components/button';
import { useNavigate } from 'react-router-dom';

export function DashboardPage() {
	const navigate = useNavigate();
	const [isMenubarOpen, setIsMenubarOpen] = useState(false);

	const toggleMenubar = () => {
		setIsMenubarOpen(!isMenubarOpen);
	};

	function UserLogOut() {
		navigate('/login');
	}

	return (
		<div className="bg-zinc-900 h-screen flex">
			<MenuBar toggleMenubar={toggleMenubar} isMenubarOpen={isMenubarOpen} />

			<main className="flex-1 p-10">
				<header className="flex justify-between items-center mb-8">
					<h1 className="text-3xl font-semibold text-zinc-200">Dashboard</h1>
					<Button type="button" variant="secondary" onClick={UserLogOut}>
						<LogOut />
						Sair
					</Button>
				</header>

				<div className="bg-zinc-800 p-6 rounded-lg shadow-shape text-zinc-300">
					<h2 className="text-2xl mb-4">Estatísticas</h2>
				</div>
			</main>
		</div>
	);
}
