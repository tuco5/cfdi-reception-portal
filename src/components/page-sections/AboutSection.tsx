import Icon from '../Icon';
import AboutCard from './AboutCard';

export default function AboutSection() {
  return (
    <section className="flex min-h-[90vh] flex-col items-center gap-10 bg-white">
      <h2 className='h-16 mt-14 mb-8 text-5xl text-tertiary font-bold'>Fácil de usar....conoce más</h2>
      <div className="flex items-center justify-center gap-14">
        <AboutCard title="Amigable" Icon={<Icon name="friendly"  className='w-24 h-24' />}>
          Plataforma fácil de usar. No requiere mayor capacitacion para comenzar.
        </AboutCard>

        <AboutCard title="Estrucutrado" Icon={<Icon name='structure-mind' className='w-24 h-24' />}>
          Comienza hoy y organiza tus cuentas fácilmente con un portal. Invita a tus proveedores
          para que comiencen a cargar sus documentos fiscales.
        </AboutCard>
      </div>
    </section>
  );
}
