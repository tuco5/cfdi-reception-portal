import CompanyForm from '@/components/forms/CompanyForm';
import InviteSuppliersForm from '@/components/forms/InviteSuppliersForm';
import InviteTeamMembersForm from '@/components/forms/InviteTeamMembersForm';
import UploadLogoForm from '@/components/forms/UploadLogoForm';
import {useState} from 'react';
import {twMerge} from 'tailwind-merge';

const registrationSteps = ['Datos físcales', 'Logo', 'Usuarios', 'Invitar Proveedores'];

export default function NewPortalPage() {
  const [progress, setProgress] = useState(1);

  const onContinue = () => {
    if (progress === registrationSteps.length) return;
    setProgress(prevState => prevState + 1);
  };

  return (
    <div className="flex h-[92vh] justify-center bg-slate-800">
      <div className="flex w-full max-w-[1400px]">
        <div className="flex w-full items-center justify-center bg-slate-500">
          {progress === 1 && <CompanyForm onSubmit={onContinue} />}
          {progress === 2 && <UploadLogoForm onSubmit={onContinue} />}
          {progress === 3 && <InviteTeamMembersForm onSubmit={onContinue} />}
          {progress === 4 && <InviteSuppliersForm onSubmit={onContinue} />}
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
