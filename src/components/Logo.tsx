import Link from 'next/link';
import Image from 'next/image';

const VARIANT = {
  white: '/img/logo-white.png',
  black: '/img/logo-black.png',
};
const SIZE = {
  sm: {height: 60, width: 120},
  md: {height: 80, width: 160},
  lg: {height: 120, width: 240},
};

interface LogoProps {
  variant?: 'white' | 'black';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({variant = 'black', size = 'sm'}: LogoProps) {
  return (
    <Link href="/">
      <Image
        src={VARIANT[variant]}
        alt="Logo"
        height={SIZE[size].height}
        width={SIZE[size].width}
        className="object-contain object-center"
      />
    </Link>
  );
}
