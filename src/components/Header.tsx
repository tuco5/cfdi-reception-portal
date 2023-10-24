import Logo from './Logo';
import CustomLink from './MenuLink';
import {NavbarBrand, Navbar, NavbarContent, Button} from '@nextui-org/react';
import {UserButton, SignedIn, SignedOut, SignInButton, SignUpButton} from '@clerk/nextjs';

const menuLinks = [
  {href: '/', label: 'Inicio'},
  {href: '/pricing', label: 'Precio'},
  {href: '/#contact-us', label: 'Contacto'},
];

const userMenuLinks = [
  {href: '/dashboard', label: 'Inicio'},
  {href: '/pricing', label: 'Precio'},
  {href: '/#contact-us', label: 'Contacto'},
];

export default function Header() {
  return (
    <Navbar shouldHideOnScroll className="py-2" maxWidth="xl">
      <NavbarBrand>
        <Logo />
      </NavbarBrand>

      <NavbarContent justify="center" className="min-w-[350px] gap-0">
        <SignedOut>
          {menuLinks.map(({href, label}) => (
            <CustomLink key={href} href={href}>
              {label}
            </CustomLink>
          ))}
        </SignedOut>
        <SignedIn>
          {userMenuLinks.map(({href, label}) => (
            <CustomLink key={href} href={href}>
              {label}
            </CustomLink>
          ))}
        </SignedIn>
      </NavbarContent>

      <NavbarContent justify="end">
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            showName
            appearance={{
              elements: {
                userButtonBox: 'flex-row-reverse',
                avatarBox: 'h-10 w-10',
                userButtonOuterIdentifier: 'max-w-[100px] truncate overflow-hidden',
              },
            }}
          />
        </SignedIn>

        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard">
            <Button
              color="secondary"
              variant="shadow"
              radius="full"
              className="px-4 text-base"
              size="sm"
            >
              Conectate
            </Button>
          </SignInButton>
          <SignUpButton afterSignUpUrl="/dashboard">
            <Button
              color="secondary"
              variant="flat"
              radius="full"
              className="px-4 text-base"
              size="sm"
            >
              Registrate
            </Button>
          </SignUpButton>
        </SignedOut>
      </NavbarContent>
    </Navbar>
  );
}
