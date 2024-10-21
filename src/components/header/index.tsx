import { format, subDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Calendar, LogOut } from 'lucide-react';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';
import { Button } from '../button';
import { DatePickerModal } from './header-components/date-picker-modal';

interface HeaderProps {
	title: string;
	UserLogOut: () => void;
	hasCalendar?: boolean;
}

export function Header({
	title,
	UserLogOut,
	hasCalendar = false,
}: HeaderProps) {
	const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
	const [dateRange, setDateRange] = useState<DateRange | undefined>({
		from: subDays(new Date(), 30),
		to: new Date(),
	});

	const handleDatePicker = () => {
		isDatePickerOpen ? setIsDatePickerOpen(false) : setIsDatePickerOpen(true);
	};

	const displayedDate =
		dateRange && dateRange.from && dateRange.to
			? `${format(dateRange.from, 'dd/MM/yyyy', { locale: ptBR })} até ${format(
					dateRange.to,
					'dd/MM/yyyy',
					{ locale: ptBR }
				)}`
			: null;
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

			{isDatePickerOpen && (
				<DatePickerModal
					handleDatePicker={handleDatePicker}
					dateRange={dateRange}
					setDateRange={setDateRange}
				/>
			)}
		</div>
	);
}
