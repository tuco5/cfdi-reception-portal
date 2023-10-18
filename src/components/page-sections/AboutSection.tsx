import Icon from '../Icon';

export default function AboutSection() {
  return (
    <section className="flex min-h-[90vh] flex-col items-center gap-10 bg-white">
      <h2 className="mb-8 mt-14 h-16 text-5xl font-bold text-tertiary">
        Fácil de usar, conoce más...
      </h2>
      <div className="flex items-center justify-center gap-20">
        <AboutCard title="Amigable" Icon={<Icon name="friendly" className="h-24 w-24" />}>
          Plataforma fácil de usar. No requiere mayor capacitacion para comenzar.
        </AboutCard>

        <AboutCard title="Estructurado" Icon={<Icon name="structure-mind" className="h-24 w-24" />}>
          Comienza hoy y organiza tus cuentas fácilmente con un portal. Invita a tus proveedores
          para que comiencen a cargar sus documentos fiscales.
        </AboutCard>

        <AboutCard title="Integral" Icon={<Icon name="bank" className="h-24 w-24" />}>
          Integra aplicaciones de terceros, cómo tu banca favorita y programa pagos de forma
          automática.
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
      <p className="text-4xl text-secondary">{title}</p>
      <div className="flex h-24 w-full items-center justify-center">{Icon}</div>
      <p className="h-full text-center text-lg">{children}</p>
    </div>
  );
}
