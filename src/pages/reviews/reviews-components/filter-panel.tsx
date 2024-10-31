import { renderStars } from '../../../utils/reviewUtils';

interface FilterPanelProps {
	selectedRating: number | null;
	setSelectedRating: (rating: number | null) => void;
}

export function FilterPanel({
	selectedRating,
	setSelectedRating,
}: FilterPanelProps) {
	return (
		<div className="h-16 flex-1 p-3 rounded-md bg-zinc-900 flex justify-center transition-all duration-100">
			<div className="flex flex-col">
				<div className="flex gap-2 items-center justify-center">
					<span className="text-lg font-semibold text-zinc-100">
						Filtrar por estrelas:
					</span>
					<div className="flex gap-1">
						{renderStars(5, true, selectedRating, setSelectedRating)}
					</div>
				</div>
				<span className="flex justify-center text-xs text-zinc-500">
					Clique para selecionar um número de estrelas
				</span>
			</div>
		</div>
	); 
}
