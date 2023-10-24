import {inter} from '@/styles/fonts';
import {Button} from '@nextui-org/react';
import Link from 'next/link';
import {twMerge} from 'tailwind-merge';

export default function DashboardPage() {
  const LinkStyle = 'px-4 py-2 hover:bg-slate-800 transition-all';

  return (
    <main className={twMerge(inter.className, 'flex flex-col items-center')}>
      <div className="flex w-full">
        <div className="flex h-screen w-full max-w-xs flex-col gap-2 bg-slate-500 py-4 text-white">
          <h2 className="px-4 py-2 text-lg font-bold text-slate-800 ">Applicación</h2>
          <Link href="/dashboard" className={LinkStyle}>
            Mis Portales
          </Link>
          <Link href="#" className={LinkStyle}>
            Usuarios
          </Link>
          <Link href="#" className={LinkStyle}>
            Configuración
          </Link>
        </div>
        <div className="flex w-full flex-col p-8">
          <div className="flex gap-4">
            <Link href="/portal/new">
              <Button color="secondary" radius="sm" className="text-base">
                Nuevo Portal
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
