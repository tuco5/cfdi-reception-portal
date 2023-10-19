import {inter} from '@/fonts';
import AboutSection from '@/components/page-sections/AboutSection';
import HeroSection from '@/components/page-sections/HeroSection';
import StepsSection from '@/components/page-sections/StepsSection';
import ContactUsSection from '@/components/page-sections/ContactUsSection';

export default function Home() {
  return (
    <main className={inter.className}>
      <HeroSection />
      <AboutSection />
      <StepsSection />
      <ContactUsSection />
    </main>
  );
}
