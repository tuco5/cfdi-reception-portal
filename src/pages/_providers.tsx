import {NextUIProvider} from '@nextui-org/react';
import {ClerkProvider} from '@clerk/nextjs';

export default function Providers({children, ...props}: {children: React.ReactNode}) {
  return (
    <ClerkProvider {...props}>
      <NextUIProvider>{children}</NextUIProvider>
    </ClerkProvider>
  );
}
