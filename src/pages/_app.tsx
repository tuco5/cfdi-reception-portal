import Navbar from '@/components/Navbar';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import {NextUIProvider} from "@nextui-org/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Navbar />
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
