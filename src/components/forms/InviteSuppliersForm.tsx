import {Input} from '@nextui-org/react';

export default function InviteSuppliersForm(props: Props) {
  return (
    <div {...props}>
      <h2 className="text-4xl font-bold">Agrega proveedores (opcional)</h2>
      <div className="flex gap-6">
        <Input
          color="default"
          label="Correo electrónico"
          isRequired
          isClearable
          classNames={{inputWrapper: 'bg-slate-300'}}
        />
      </div>
      <div className="h-40"></div>
    </div>
  );
}
