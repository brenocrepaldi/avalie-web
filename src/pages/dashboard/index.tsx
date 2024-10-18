import { format, subDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useEffect, useState } from 'react';
import { DateRange } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useNavigate } from 'react-router-dom';
import { Header } from '../header';
import { DatePickerModal } from './dashboard-components/date-picker-modal';
import { MenuBar } from './dashboard-components/menu-bar/index';
import { Statistics } from './dashboard-components/statistics';
import { Reviews } from './reviews';

export function DashboardPage() {
	const navigate = useNavigate();
	const [isMenubarOpen, setIsMenubarOpen] = useState(false);
	const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
	const [contentVisible, setContentVisible] = useState(false);
	const [dateRange, setDateRange] = useState<DateRange | undefined>({
		from: subDays(new Date(), 30),
		to: new Date(),
	});

	// Função para alternar o menu lateral
	const toggleMenubar = () => {
		setIsMenubarOpen(!isMenubarOpen);
	};

	// Atualiza a opacidade do conteúdo quando o menu é aberto ou fechado
	useEffect(() => {
		if (isMenubarOpen) {
			setContentVisible(false);
			setTimeout(() => setContentVisible(true), 400);
		} else {
			setContentVisible(false);
			setTimeout(() => setContentVisible(true), 400);
		}
	}, [isMenubarOpen]);

	function UserLogOut() {
		navigate('/login');
	}

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
		<div className="bg-zinc-900 h-screen flex">
			<MenuBar toggleMenubar={toggleMenubar} isMenubarOpen={isMenubarOpen} />
			<div
				className={`flex-1 p-10 transition-all duration-300 overflow-y-scroll overflow-x-hidden flex flex-col gap-6 ${
					isMenubarOpen ? 'ml-64' : 'ml-20'
				}`}
			>
				<Header
					title="Dashboard"
					hasCalendar={true}
					handleDatePicker={handleDatePicker}
					displayedDate={displayedDate}
					UserLogOut={UserLogOut}
				/>
				<div
					className={`flex flex-col gap-6 transition-all duration-300 ${
						contentVisible ? 'opacity-100' : 'opacity-0'
					}`}
				>
					<Statistics />
					<Reviews />
				</div>

				{isDatePickerOpen && (
					<DatePickerModal
						handleDatePicker={handleDatePicker}
						dateRange={dateRange}
						setDateRange={setDateRange}
					/>
				)}
			</div>
		</div>
	);
}
