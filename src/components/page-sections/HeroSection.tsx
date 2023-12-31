import {SignUpButton, SignedIn, SignedOut} from '@clerk/nextjs';
import {Button} from '@nextui-org/react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-hero bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="flex w-full max-w-[1400px] -translate-y-20 flex-col gap-14 px-14 text-white">
        <h2 className="text-6xl drop-shadow">Administra tu empresa</h2>
        <p className="text-4xl">
          Crea un portal e invita a tus proveedores <br />
          que carguen sus CFDI’s a tu portal... <br />
          organiza tus pagos.
        </p>
        <div className="mt-16 flex w-full justify-center gap-28">
          <SignedOut>
            <SignUpButton>
              <Button
                size="lg"
                radius="full"
                className="w-full max-w-[190px] px-8 text-xl hover:-translate-y-0.5"
                color="secondary"
                variant="shadow"
              >
                Comienza Ya
              </Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <Button
              color="secondary"
              variant="shadow"
              size="lg"
              radius="full"
              className="w-full max-w-[190px] px-8 text-xl hover:-translate-y-0.5"
            >
              <Link href="/dashboard">Portales &rarr;</Link>
            </Button>
          </SignedIn>
          <Button
            size="lg"
            radius="full"
            className="w-full max-w-[190px] px-8 text-xl hover:-translate-y-0.5 hover:bg-secondary hover:text-white"
            color="secondary"
            variant="flat"
          >
            <Link href="/pricing">Planes...</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
