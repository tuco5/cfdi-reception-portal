import Icon from '../Icon';

export default function UploadLogoForm(props: Props) {
  return (
    <div {...props}>
      <h2 className="text-4xl font-bold">Agrega tu logo</h2>

      <label className="flex h-60 w-80 cursor-pointer flex-col items-center justify-center self-center rounded-lg border-2 border-dashed border-slate-500 bg-slate-200 text-sm transition-all hover:border-slate-700 hover:bg-slate-400">
        <Icon name="upload" className="mb-4 h-20 w-20" />
        <p>Arrastra o haz click para agregar una imagen</p>
        <p>2MB tamaño máximo</p>
        <input type="file" className="hidden" />
      </label>
    </div>
  );
}
