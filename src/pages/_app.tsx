import type {AppProps} from 'next/app';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Providers from './_providers';
import '@/styles/globals.css';

export default function App({Component, pageProps}: AppProps) {
  return (
    <Providers>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Providers>
  );
}
