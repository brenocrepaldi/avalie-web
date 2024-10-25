import { EyeIcon, EyeOff } from 'lucide-react';
import {
  cloneElement,
  ComponentProps,
  isValidElement,
  ReactElement,
} from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const inputVariants = tv({
	base: 'bg-transparent text-base placeholder-zinc-400 outline-none flex-1',

	variants: {
		customSize: {
			default: 'py-2',
			full: 'w-full h-11',
		},
	},

	defaultVariants: {
		variant: 'primary',
		customSize: 'default',
	},
});

interface InputProps
	extends ComponentProps<'input'>,
		VariantProps<typeof inputVariants> {
	icon?: ReactElement<{ className?: string }>;
	isPassword?: boolean;
	handlePasswordVisibility?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	showPassword?: boolean;
}

export function Input({
	customSize,
	icon,
	isPassword = false,
	handlePasswordVisibility,
	showPassword,
	...props
}: InputProps) {
	return (
		<div className="space-y-2">
			<div className="h-12 px-4 bg-zinc-900 border-zinc-700 border-2 rounded-lg flex items-center gap-2">
				{icon &&
					isValidElement(icon) &&
					cloneElement(icon, {
						className: 'text-zinc-400 size-5',
					})}
				<input {...props} className={inputVariants({ customSize })} />
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
