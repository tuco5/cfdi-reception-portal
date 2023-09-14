import {twMerge} from 'tailwind-merge';

export default function HeroSection() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-hero bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="flex w-full max-w-[1400px] -translate-y-20 flex-col gap-14 text-white">
        <h2 className="glow text-6xl drop-shadow">Administra tu empresa</h2>
        <p className="text-4xl">
          Crea un portal e invita a tus proveedores <br />
          que carguen sus CFDI’s a tu portal... <br />
          organiza tus pagos.
        </p>
        <div className="mt-16 flex w-full justify-center gap-28">
          <button
            type="button"
            className="max-w-[190px] rounded-full bg-secondary px-8 py-2 text-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:shadow-lg hover:shadow-secondary"
          >
            Comienza Ya
          </button>
          <button
            type="button"
            className="w-full max-w-[190px] rounded-full border-2 border-secondary px-8 py-2 text-xl text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:text-white hover:shadow-lg hover:shadow-primary"
          >
            Planes...
          </button>
        </div>
      </div>
    </section>
  );
}
