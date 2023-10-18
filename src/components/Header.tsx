import Logo from './Logo';
import CustomLink from './MenuLink';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  NavbarBrand,
  Navbar,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';

const menuLinks = [
  {href: '/', label: 'Inicio'},
  {href: '/pricing', label: 'Precio'},
  {href: '/contact-us', label: 'Contacto'},
];

export default function Header() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <Navbar shouldHideOnScroll className="py-2" maxWidth="xl">
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent justify="center" className="min-w-[350px] gap-0">
        {menuLinks.map(({href, label}) => (
          <CustomLink key={href} href={href}>
            {label}
          </CustomLink>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <Button
          color="primary"
          className="text-base hover:-translate-y-0.5"
          variant="shadow"
          onClick={onOpen}
        >
          Sign up
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
          <ModalContent>
            {onClose => (
              <>
                <ModalHeader className="flex flex-col gap-1">Sign up</ModalHeader>
                <ModalBody>Sign up with google</ModalBody>
                <ModalFooter>{/* TODO: Formulario email and password */}</ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </NavbarContent>
    </Navbar>
  );
}
