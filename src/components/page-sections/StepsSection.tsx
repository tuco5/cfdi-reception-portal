export default function StepsSection() {
  return (
    <section className="bg-slate-200 flex min-h-screen items-center justify-center bg-steps bg-cover bg-center bg-no-repeat">
      <div className="flex h-screen w-full max-w-[1400px] flex-col pt-32 ">
        <h2 className="text-center text-6xl font-semibold tracking-wider text-white drop-shadow">
          En simples pasos comienza ya...
        </h2>

        <div className="mt-40 flex w-full justify-between">
          <StepsCard title="Paso 1">Crea una cuenta y registra tus datos fiscales.</StepsCard>
          <StepsCard title="Paso 2">Crea un portal e invita a tus proveedores</StepsCard>
          <StepsCard title="Paso 3">
            Solicita a tus proveedores que comiencen a cargar sus documentos físcales al portal
          </StepsCard>
          <StepsCard title="Paso 4">Programa tus pagos y automátiza tus procesos</StepsCard>
        </div>
      </div>
    </section>
  );
}

interface StepsCardProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}
function StepsCard({title, children, icon}: StepsCardProps) {
  return (
    <div className="flex max-w-[280px] flex-col items-center justify-center gap-4">
      <div className="h-24 w-24 flex-1 items-center justify-center rounded-full bg-tertiary text-white">
        {icon}
      </div>
      <h4 className="text-center text-4xl font-semibold uppercase text-quarternary">{title}</h4>
      <p className="text-center text-2xl text-white">{children}</p>
    </div>
  );
}
// style={{height: 200}}
