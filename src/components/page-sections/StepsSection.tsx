export default function StepsSection() {
  return (
    <section className="bg-slate-200 bg-steps flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat">
      <div className="flex h-screen w-full max-w-[1400px] flex-col pt-32">
        <h2 className="text-center text-6xl font-semibold tracking-wider text-white drop-shadow">
          En simples pasos comienza ya...
        </h2>

        <div className="mt-40 flex w-full justify-between">
          <StepsCard title="Paso 1">Lorem ipsum</StepsCard>
          <StepsCard title="Paso 2">Lorem ipsum</StepsCard>
          <StepsCard title="Paso 3">Lorem ipsum</StepsCard>
          <StepsCard title="Paso 4">Lorem ipsum</StepsCard>
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
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-tertiary text-white">
        {icon}
      </div>
      <h4 className="text-4xl font-semibold uppercase text-quarternary">{title}</h4>
      <p className="text-2xl text-white">{children}</p>
    </div>
  );
}
