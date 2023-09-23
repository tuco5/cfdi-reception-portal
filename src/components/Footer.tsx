import Image from 'next/image';
import Logo from './Logo';
import NavItem from './NavItem';
import Link from 'next/link';

const menuLinks = [
  {href: '/privacy', label: 'Políticas de privacidad'},
  {href: '/terms-and-conditions', label: 'Terminos y condiciones'},
  {href: '/about-us', label: 'Acerca de nosotros'},
];
export default function Footer() {
  return (
    <footer className="mb-96 flex w-full justify-center bg-black px-10 text-white">
      <div className="flex h-56 w-full max-w-6xl flex-col">
        <div className="flex h-full w-full items-center justify-between">
          <Logo variant="white" size="md" />

          <div className="flex w-full max-w-xl justify-around">
            {menuLinks.map(({href, label}) => (
              <NavItem key={href} href={href} variant="white" className="h-8">
                {label}
              </NavItem>
            ))}
          </div>

          <div className="flex flex-col items-center gap-2">
            <p>Contáctanos</p>
            <div className="flex w-24 justify-between">
              <Link
                href="https://twitter.com"
                className="transition-all duration-300 hover:-translate-y-1"
                target="_blank"
              >
                <Image src="/img/logo-facebook.png" alt="logo facebook" width={40} height={40} />
              </Link>
              <Link
                href="https://facebook.com"
                className="transition-all duration-300 hover:-translate-y-1"
                target="_blank"
              >
                <Image src="/img/logo-twitter.png" alt="logo twitter" width={40} height={40} />
              </Link>
            </div>
            <a className="text-sm text-secondary" href="mailto:soporte@cfdiportal.com">
              soporte@cfdiportal.com
            </a>
          </div>
        </div>
        <p className="p-4 text-xs">©2023 CFDI Portal</p>
      </div>
    </footer>
  );
}
