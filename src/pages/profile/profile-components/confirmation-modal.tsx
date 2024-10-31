import { Button } from '../../../components/button';

interface ConfirmationModalProps {
	setIsChangesConfirmed: React.Dispatch<React.SetStateAction<boolean>>;
	handleConfirmationModal: () => void;
}

export function ConfirmationModal({
	setIsChangesConfirmed,
	handleConfirmationModal,
}: ConfirmationModalProps) {
	return (
		<div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
			<div className="rounded-xl max-w-[40%] py-7 px-8 shadow-shape bg-zinc-900 space-y-5">
				<div className="space-y-2">
					<h2 className="text-xl font-semibold text-zinc-200">
						Confirmar alterações
					</h2>
					<p className="text-zinc-400">
						Tem certeza de que deseja salvar as alterações?
					</p>
				</div>
				<div className="flex justify-end gap-2">
					<Button
						variant="secondary"
						onClick={() => {
							handleConfirmationModal();
						}}
					>
						Cancelar
					</Button>
					<Button
						onClick={() => {
							setIsChangesConfirmed(true);
							handleConfirmationModal();
						}}
					>
						Confirmar
					</Button>
				</div>
			</div>
		</div>
	);
}
