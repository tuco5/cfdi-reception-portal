import Logo from './Logo';
import NavItem from './NavItem';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react';

const menuLinks = [
  {href: '/', label: 'Inicio'},
  {href: '/pricing', label: 'Precio'},
  {href: '/contact-us', label: 'Contacto'},
];

export default function Navbar() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <header className="fixed flex w-full justify-center bg-white bg-opacity-[0.95] px-12 shadow-md">
      <div className="flex w-full max-w-6xl items-center justify-between ">
        <div>
          <Logo />
        </div>
        <nav className="flex h-full w-1/3 max-w-sm items-center justify-between">
          {menuLinks.map(({href, label}) => (
            <NavItem key={href} href={href}>
              {label}
            </NavItem>
          ))}
        </nav>
        <div>
          <Button color="primary" className="text-base" variant="shadow" onClick={onOpen}>
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
        </div>
      </div>
    </header>
  );
}
