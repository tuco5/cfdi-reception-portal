import Link, {LinkProps} from 'next/link';
import {twMerge} from 'tailwind-merge';

const VARIANT = {
  black: 'text-black border-black hover:bg-black hover:text-white',
  white: 'text-white border-white hover:bg-white hover:text-black',
};
interface MenuLinkProps extends LinkProps, PropsWithChildren {
  variant?: 'white' | 'black';
}
export default function MenuLink({
  variant = 'black',
  href,
  children,
  className = '',
}: MenuLinkProps) {
  return (
    <Link
      key={href.toString()}
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
