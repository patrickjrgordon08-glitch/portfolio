import CtaBanner from '@/components/CtaBanner';
import FeaturedWork from '@/components/FeaturedWork';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';

export default function PortfolioHomePage() {
  return (
    <>
      <Hero />
      <TechStack />
      <FeaturedWork />
      <CtaBanner />
    </>
  );
}
