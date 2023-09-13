import {Inter} from 'next/font/google';
import Logo from '@/components/Logo';
import AboutSection from '@/components/page-sections/AboutSection';
import HeroSection from '@/components/page-sections/HeroSection';
import StepsSection from '@/components/page-sections/StepsSection';

const inter = Inter({subsets: ['latin']});

export default function Home() {
  return (
    <main className={inter.className}>
      <HeroSection />
      <AboutSection />
      <StepsSection />
    </main>
  );
}
