import {
	Menu,
	LayoutDashboard,
	FileText,
	Settings,
	ArrowLeftIcon,
} from 'lucide-react';
import { MenuLink } from './menu-link';

interface MenuBarProps {
	toggleMenubar: () => void;
	isMenubarOpen: boolean;
}

export function MenuBar({ toggleMenubar, isMenubarOpen }: MenuBarProps) {
	return (
		<div
			className={`bg-zinc-800 h-screen py-5 px-3 flex flex-col overflow-hidden shadow-shape ${
				isMenubarOpen ? 'w-64 items-center' : 'w-20 items-center'
			} transition-all duration-300`}
			style={{ position: 'fixed', left: 0, top: 0, bottom: 0 }}
		>
			<button
				onClick={toggleMenubar}
				className={`mb-2 w-full rounded-md text-zinc-300 hover:text-white hover:bg-zinc-700 p-3 flex gap-2 items-center ${
					isMenubarOpen ? 'justify-start' : 'justify-center'
				}`}
			>
				{isMenubarOpen ? <ArrowLeftIcon /> : <Menu />}
			</button>

			<nav className="w-full space-y-1">
				<MenuLink
					link="/home"
					text="Dashboard"
					icon={<LayoutDashboard />}
					isMenubarOpen={isMenubarOpen}
				/>
				<MenuLink
					link="/reports"
					text="Relatórios"
					icon={<FileText />}
					isMenubarOpen={isMenubarOpen}
				/>
				<MenuLink
					link="/settings"
					text="Configurações"
					icon={<Settings />}
					isMenubarOpen={isMenubarOpen}
				/>
			</nav>
		</div>
	);
}
