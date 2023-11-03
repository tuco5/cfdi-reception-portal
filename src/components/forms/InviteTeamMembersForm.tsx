import {Button, Input, Select, SelectItem} from '@nextui-org/react';

const PerfilesList = ['Administrador', 'Supervisor', 'Capturista', 'Consulta'];

export default function TeamMembersForm(props: Props) {
  return (
    <div {...props}>
      <h2 className="text-4xl font-bold">Agrega personas a tu equipo (opcional)</h2>
      <div className="flex gap-6">
        <Input
          color="default"
          label="Correo electrónico"
          isRequired
          isClearable
          classNames={{inputWrapper: 'bg-slate-300'}}
        />

        <Select
          label="Perfil de usuario"
          isRequired
          classNames={{trigger: 'bg-slate-300', popover: 'bg-slate-200'}}
        >
          {PerfilesList.map(regimen => (
            <SelectItem key={regimen}>{regimen}</SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
}
