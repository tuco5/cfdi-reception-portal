import Logo from '@/components/Logo';
import AboutSection from '@/components/page-sections/AboutSection';
import HeroSection from '@/components/page-sections/HeroSection';
import StepsSection from '@/components/page-sections/StepsSection';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <div className="min-h-[50vh] flex justify-center items-center">
        <Logo variant='black'/>
      </div>
      <HeroSection />
      <AboutSection />
      <StepsSection />
    </main>
  );
}
