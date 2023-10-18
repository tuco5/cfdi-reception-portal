import {NextUIProvider} from '@nextui-org/react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type {AppProps} from 'next/app';
import '@/styles/globals.css';

export default function App({Component, pageProps}: AppProps) {
  return (
    <NextUIProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </NextUIProvider>
  );
}
