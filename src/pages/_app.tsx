import {NextUIProvider} from "@nextui-org/react";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Navbar />
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
