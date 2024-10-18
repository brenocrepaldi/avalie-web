import { Button } from '../../components/button';
import { LogOut, Calendar } from 'lucide-react';

interface HeaderProps {
	title: string;
	hasCalendar: boolean;
	handleDatePicker: () => void;
	displayedDate: string | null;
	UserLogOut: () => void;
}

export function Header({
	title,
	hasCalendar = false,
	handleDatePicker,
	displayedDate,
	UserLogOut,
}: HeaderProps) {
	return (
		<div className="bg-zinc-800 p-4 rounded-lg shadow-shape flex justify-between items-center">
			<h1 className="text-2xl font-semibold text-zinc-200">{title}</h1>

			{hasCalendar && (
				<button
					onClick={handleDatePicker}
					className="flex items-center gap-2 text-left"
				>
					<Calendar className="size-5 text-zinc-400" />
					<span className="text-lg text-zinc-400">
						{displayedDate || 'Selecione o período'}
					</span>
				</button>
			)}

			<Button type="button" variant="secondary" onClick={UserLogOut}>
				<LogOut />
				Sair
			</Button>
		</div>
	);
}
