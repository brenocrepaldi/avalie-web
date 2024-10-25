import {
	ComponentProps,
	cloneElement,
	isValidElement,
	ReactElement,
} from 'react';
import { EyeIcon, EyeOff } from 'lucide-react';

interface InputProps extends ComponentProps<'input'> {
	icon?: ReactElement<{ className?: string }>;
	isPassword?: boolean;
	handlePasswordVisibility?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	showPassword?: boolean;
	fullSize?: boolean;
}

export function Input({
	icon,
	isPassword = false,
	handlePasswordVisibility,
	showPassword,
	fullSize = false,
	...props
}: InputProps) {
	return (
		<div className={`space-y-2 ${fullSize && 'w-full'}`}>
			<div className="h-12 px-4 bg-zinc-900 rounded-lg flex items-center gap-2">
				{icon &&
					isValidElement(icon) &&
					cloneElement(icon, {
						className: 'text-zinc-400 size-5',
					})}
				<input
					{...props}
					className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
				/>
				{isPassword && (
					<button
						onClick={(e) => {
							handlePasswordVisibility?.(e);
						}}
					>
						{showPassword ? (
							<EyeOff className="text-zinc-400" />
						) : (
							<EyeIcon className="text-zinc-400" />
						)}
					</button>
				)}
			</div>
		</div>
	);
}
