import { Hero } from '@/components/hero';
import { FeaturedWork } from '@/components/featured-work';
import { ServicesPreview } from '@/components/services-preview';
import { TestimonialsSection } from '@/components/testimonials-section';
import { CtaSection } from '@/components/cta-section';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <ServicesPreview />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}