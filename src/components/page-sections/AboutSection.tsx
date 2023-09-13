import {Avatar} from '../Navbar';

export default function AboutSection() {
  return (
    <section className="flex min-h-[90vh] flex-col items-center gap-10 bg-white">
      <h2 className='h-16 mt-14 mb-8 text-5xl'>asdasdas</h2>
      <div className="flex items-center justify-center gap-14">
        <AboutCard title="Amigable" Icon={<Avatar />}>
          Plataforma fácil de usar. No requiere mayor capacitacion para comenzar.
        </AboutCard>

        <AboutCard title="Estrucutrado" Icon={<Avatar />}>
          Comienza hoy y organiza tus cuentas fácilmente con un portal. Invita a tus proveedores
          para que comiencen a cargar sus documentos fiscales.
        </AboutCard>
      </div>
    </section>
  );
}

interface AboutCardProps {
  title: string;
  children: React.ReactNode;
  Icon: React.ReactNode;
}
function AboutCard({title, children, Icon}: AboutCardProps) {
  return (
    <div className="flex h-96 w-80 flex-col items-center justify-between gap-4 rounded-2xl bg-black p-8 text-white">
      <p className="text-4xl">{title}</p>
      <p className="flex h-24 items-center justify-center">{Icon}</p>
      <p className="h-full text-center text-lg">{children}</p>
    </div>
  );
}
