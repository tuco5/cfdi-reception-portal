import CompanyForm from '@/components/forms/CompanyForm';
import InviteSuppliersForm from '@/components/forms/InviteSuppliersForm';
import InviteTeamMembersForm from '@/components/forms/InviteTeamMembersForm';
import UploadLogoForm from '@/components/forms/UploadLogoForm';
import {useRouter} from 'next/router';
import {PropsWithChildren, useState} from 'react';
import {twMerge} from 'tailwind-merge';
import {Button} from '@nextui-org/react';

const registrationSteps = ['Datos físcales', 'Logo', 'Usuarios', 'Invitar Proveedores'];

export default function NewPortalPage() {
  const [progress, setProgress] = useState(1);
  const router = useRouter();

  const onContinue = () => {
    if (progress === registrationSteps.length) return router.push('/dashboard');
    setProgress(prevState => prevState + 1);
  };

  const onGoBack = () => {
    if (progress === 1) return router.back();
    setProgress(prevState => prevState - 1);
  };

  return (
    <div className="flex h-[92vh] justify-center bg-slate-800">
      <div className="flex w-full max-w-[1400px]">
        <div className="flex w-full items-center justify-center bg-slate-500">
          <Form onSubmit={onContinue} onGoBack={onGoBack}>
            {progress === 1 && <CompanyForm className="flex flex-col gap-6" />}
            {progress === 2 && <UploadLogoForm className="flex flex-col gap-14" />}
            {progress === 3 && <InviteTeamMembersForm className="flex flex-col gap-6" />}
            {progress === 4 && <InviteSuppliersForm className="flex flex-col gap-6" />}
          </Form>
        </div>
        <div className="flex w-80  flex-col justify-center bg-black px-4">
          <ProgressRegistration
            steps={registrationSteps}
            current={progress}
            onNavigate={(step: number) => setProgress(step)}
          />
        </div>
      </div>
    </div>
  );
}

interface FormProps extends PropsWithChildren {
  onSubmit: () => void;
  onGoBack?: () => void;
}
function Form({children, onSubmit, onGoBack = () => null}: FormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
    // Logic to save data on server
  };

  return (
    <form
      className="flex h-[675px] w-4/5 flex-col justify-between rounded-2xl border-[3px] border-black bg-white p-8"
      onSubmit={handleSubmit}
    >
      {children}
      <div className="flex gap-6 self-center">
        <Button
          color="secondary"
          variant="bordered"
          radius="full"
          className="mt-4 w-fit self-center px-8 text-xl"
          size="lg"
          onClick={onGoBack}
        >
          Regresar
        </Button>
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
      </div>
    </form>
  );
}

interface ProgressRegistration extends Props {
  steps: string[];
  current?: number;
  onNavigate: (s: number) => void;
}
function ProgressRegistration({steps, current = 1, onNavigate}: ProgressRegistration) {
  const style =
    'bg-gradient-to-b from-secondary from-50% to-white to-50% bg-[length:200%_200%] transition-all bg-bottom';
  const iconStyle = 'flex h-8 w-8 items-center justify-center rounded-full';
  const textStyle = 'bg-clip-text text-transparent';
  const activeStyle = 'bg-top font-bold';

  return (
    <div className="flex flex-col gap-2 text-xl">
      {steps.map((step, index) => (
        <div key={step}>
          <button
            onClick={() => onNavigate(index + 1)}
            className="flex items-center gap-4 font-light"
          >
            <span
              className={twMerge(
                style,
                iconStyle,
                'bg-[length:600%_600%]',
                index < current && activeStyle
              )}
            >
              {index + 1}
            </span>
            <span className={twMerge(style, textStyle, index < current && activeStyle)}>
              {step}
            </span>
          </button>
          {index + 1 !== steps.length && (
            <span
              className={twMerge(
                'ml-2 text-4xl text-white',
                style,
                textStyle,
                index < current - 1 ? 'bg-top' : 'bg-bottom'
              )}
            >
              &darr;
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
