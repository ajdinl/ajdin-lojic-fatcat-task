import { ButtonProps } from '@homework-task/types/button';
import clsx from 'clsx';

export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    className,
    type = 'button',
    disabled = false,
}) => {
    return (
        <button
            type={type}
            className={clsx(
                'rounded-lg',
                'px-4',
                'py-2',
                'bg-black',
                'text-white',
                className
            )}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
