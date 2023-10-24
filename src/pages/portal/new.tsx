import {Input} from '@nextui-org/react';

export default function NewPortalPage() {
  return (
    <div className="flex h-[92vh] justify-center bg-slate-800">
      <div className="flex w-full max-w-[1400px]">
        <div className="flex w-full items-center justify-center bg-slate-500">
          {/* Tarjeta Registro */}
          <div className="flex h-2/3 w-4/5 flex-col rounded-2xl border-[3px] border-black bg-white p-8">
            <h2 className="text-4xl font-bold">Datos físcales</h2>
            <Input
              className="mt-10"
              label="Nombre o razón social"
              labelPlacement="outside"
              isRequired
              isClearable
              variant="bordered"
            />
          </div>
        </div>
        <div className="w-80 bg-black"></div>
      </div>
    </div>
  );
}
