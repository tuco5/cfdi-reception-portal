import {twMerge} from 'tailwind-merge';

const STYLE = {
  main: 'bg-secondary hover:bg-primary hover:shadow-secondary',
  second:
    'border-2 border-secondary text-secondary hover:bg-secondary hover:text-white hover:shadow-primary',
};
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'main' | 'second';
}
export default function Button({
  children,
  className,
  variant = 'main',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={twMerge(
        'rounded-full px-8 py-2 text-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg',
        STYLE[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
