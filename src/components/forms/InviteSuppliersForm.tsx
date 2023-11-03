import {Button, Input} from '@nextui-org/react';



export default function InviteSuppliersForm({onSubmit}: FormProps) {

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
      <Button
        color="secondary"
        variant="shadow"
        radius="full"
        className="mt-4 w-fit self-center px-8 text-xl"
        size="lg"
        type="submit"
      >
        Finalizar
      </Button>
    </form>
  );
}
