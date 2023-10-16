import Link from 'next/link';
import {twMerge} from 'tailwind-merge';

const VARIANT = {
  black: 'text-black border-black hover:bg-black hover:text-white',
  white: 'text-white border-white hover:bg-white hover:text-black',
};
interface NavItemProps {
  variant?: 'white' | 'black';
  href: string;
  children: React.ReactNode;
  className?: string;
}
export default function NavItem({variant = 'black', href, children, className = ''}: NavItemProps) {
  return (
    <Link
      key={href}
      href={href}
      className={twMerge(
        'w-full border-r py-1 text-center text-lg transition-all duration-300 last:border-0 ',
        VARIANT[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
