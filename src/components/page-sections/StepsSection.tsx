import Icon from '../Icon';

export default function StepsSection() {
  return (
    <section className="bg-slate-200 flex min-h-screen items-center justify-center bg-steps bg-cover bg-center bg-no-repeat">
      <div className="flex h-screen w-full max-w-[1400px] flex-col pt-32">
        <h2 className="text-center text-6xl font-semibold tracking-wider text-white drop-shadow">
          En simples pasos comienza ya...
        </h2>

        <div className="mt-40 flex w-full items-stretch justify-between gap-4">
          <StepsCard
            title="Paso 1"
            Icon={<Icon name="account-check" className="h-[4.5rem] w-[4.5rem]" />}
          >
            Crea una cuenta y registra tus datos fiscales.
          </StepsCard>
          <span className="pt-28 text-5xl text-white">&rarr;</span>
          <StepsCard title="Paso 2" Icon={<Icon name="create-portal" className="h-16 w-16" />}>
            Crea un portal e invita a tus proveedores
          </StepsCard>
          <span className="pt-28 text-5xl text-white">&rarr;</span>
          <StepsCard title="Paso 3" Icon={<Icon name="help" className="h-16 w-16" />}>
            Solicita a tus proveedores que comiencen a cargar sus documentos físcales al portal
          </StepsCard>
          <span className="pt-28 text-5xl text-white">&rarr;</span>
          <StepsCard title="Paso 4" Icon={<Icon name="schedule" className="h-16 w-16" />}>
            Programa tus pagos y automátiza tus procesos
          </StepsCard>
        </div>
      </div>
    </section>
  );
}

interface StepsCardProps {
  title: string;
  children: React.ReactNode;
  Icon?: React.ReactNode;
}
function StepsCard({title, children, Icon}: StepsCardProps) {
  return (
    <div className="flex max-w-[280px] flex-col items-center gap-4">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-tertiary text-white">
        {Icon}
      </div>
      <h4 className="text-4xl font-semibold uppercase text-quarternary">{title}</h4>
      <p className="text-center text-2xl text-white">{children}</p>
    </div>
  );
}
