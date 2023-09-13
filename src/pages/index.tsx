import {Inter} from 'next/font/google';
import Logo from '@/components/Logo';
import AboutSection from '@/components/page-sections/AboutSection';
import HeroSection from '@/components/page-sections/HeroSection';
import StepsSection from '@/components/page-sections/StepsSection';

const inter = Inter({subsets: ['latin']});

export default function Home() {
  return (
    <main className={inter.className}>
      <div className="flex min-h-[50vh] items-center justify-center">
        <Logo variant="black" />
      </div>
      <HeroSection />
      <AboutSection />
      <StepsSection />
    </main>
  );
}
