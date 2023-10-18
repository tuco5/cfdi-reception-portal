import {Input} from '@nextui-org/react';
import Icon from '../Icon';

export default function ContactUsSection() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-40">
      <div className="flex h-52 w-full items-center justify-center bg-black text-center">
        <h2 className="text-5xl font-semibold tracking-widest text-white">
          ¿Tienes dudas? Contactanos...
        </h2>
      </div>

      <div className="flex h-[500px] w-11/12 max-w-[1280px] rounded-2xl border-[3px] border-black">
        <div className="flex w-1/2 flex-col items-center gap-8">
          <h3 className="my-6 text-center text-2xl font-bold ">
            Dejanos tus datos y te escribiremos
          </h3>
          <Input
            variant="faded"
            label="Nombre"
            labelPlacement="outside"
            className="w-4/5 "
            size="lg"
            isRequired
          />
          <Input
            variant="faded"
            label="Correo"
            type="email"
            labelPlacement="outside"
            className="w-4/5 "
            size="lg"
            isRequired
            endContent={
              <Icon
                name="mail"
                className="text-default-400 pointer-events-none flex-shrink-0 text-2xl"
              />
            }
          />
        </div>
        <div className="w-1/2">Imagen</div>
      </div>
    </div>
  );
}
