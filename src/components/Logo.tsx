import Link from 'next/link';
import Image from 'next/image';

const VARIANT = {
  white: '/img/logo-white.png',
  black: '/img/logo-black.png',
};

interface LogoProps {
  variant?: 'white' | 'black';
}

export default function Logo({ variant = 'black' }: LogoProps) {
  return <div>Logo</div>;
}

// <Link href="/">
//   <Image src={VARIANT[variant]} alt="Logo" height={60} width={120} className="object-contain object-center h-16" />
// </Link>
