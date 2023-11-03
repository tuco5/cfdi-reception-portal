import {Button, Input, Select, SelectItem} from '@nextui-org/react';

const RegimenFiscalList = [
  'Régimen de incorporación fiscal (RIF).',
  'Régimen Simplificado de Confianza (RESICO).',
  'Régimen de actividad empresarial.',
  'Régimen de arrendamiento de inmuebles.',
  'Régimen de actividades profesionales (honorarios).',
  'Régimen de Asalariado.',
];

export default function CompanyForm({onSubmit}: FormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
    // save data on DB
  };

  return (
    <form
      className="flex h-[675px] w-4/5 flex-col gap-6 rounded-2xl border-[3px] border-black bg-white p-8"
      onSubmit={handleSubmit}
    >
      <h2 className="text-4xl font-bold">Datos físcales</h2>
      <div className="flex gap-6">
        <Input
          color="default"
          label="Nombre o razón social"
          isRequired
          isClearable
          classNames={{inputWrapper: 'bg-slate-300'}}
        />
        <Input
          label="Nombre comercial"
          isRequired
          isClearable
          classNames={{inputWrapper: 'bg-slate-300'}}
        />
      </div>

      <div className="flex gap-24">
        <Input
          color="default"
          label="RFC"
          isRequired
          isClearable
          classNames={{inputWrapper: 'bg-slate-300'}}
        />
        <Input label="CP" isRequired isClearable classNames={{inputWrapper: 'bg-slate-300'}} />
      </div>

      <Select
        label="Regimen fiscal"
        isRequired
        classNames={{trigger: 'bg-slate-300', popover: 'bg-slate-200'}}
      >
        {RegimenFiscalList.map(regimen => (
          <SelectItem key={regimen}>{regimen}</SelectItem>
        ))}
      </Select>

      <h2 className="text-4xl font-bold">Contácto</h2>
      <Input
        color="default"
        label="Nombre de contácto"
        isRequired
        isClearable
        classNames={{inputWrapper: 'bg-slate-300'}}
      />
      <div className="flex gap-24">
        <Input
          color="default"
          label="Correo electónico"
          type="email"
          isRequired
          isClearable
          classNames={{inputWrapper: 'bg-slate-300'}}
        />
        <Input
          label="Teléfono"
          type="tel"
          isRequired
          isClearable
          classNames={{inputWrapper: 'bg-slate-300'}}
        />
      </div>
      <Button
        color="secondary"
        variant="shadow"
        radius="full"
        className="mt-4 w-fit self-center px-8 text-xl"
        size="lg"
        type="submit"
      >
        Continuar
      </Button>
    </form>
  );
}
