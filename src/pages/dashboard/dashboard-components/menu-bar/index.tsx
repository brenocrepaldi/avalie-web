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
		<aside
			className={`bg-zinc-800 h-full py-5 px-3 flex flex-col ${
				isMenubarOpen ? 'items-start' : 'items-center'
			}`}
		>
			<button
				onClick={toggleMenubar}
				className={`mb-2 w-fit text-zinc-300 hover:text-white hover:bg-zinc-700 p-3 rounded-full flex gap-2 items-center ${
					isMenubarOpen ? 'justify-start' : 'justify-center'
				} gap-3`}
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
		</aside>
	);
}
