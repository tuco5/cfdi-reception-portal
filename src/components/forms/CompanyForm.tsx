import {Input, Select, SelectItem} from '@nextui-org/react';

const RegimenFiscalList = [
  'Régimen de incorporación fiscal (RIF).',
  'Régimen Simplificado de Confianza (RESICO).',
  'Régimen de actividad empresarial.',
  'Régimen de arrendamiento de inmuebles.',
  'Régimen de actividades profesionales (honorarios).',
  'Régimen de Asalariado.',
];

export default function CompanyForm(props: Props) {
  return (
    <div {...props}>
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
    </div>
  );
}
