import { Metadata } from 'next';
import { AboutHero } from '@/components/about-hero';
import { AboutStory } from '@/components/about-story';
import { AboutEquipment } from '@/components/about-equipment';
import { AboutAwards } from '@/components/about-awards';

export const metadata: Metadata = {
  title: 'About | Alex Morgan Photography',
  description: 'Learn about Alex Morgan, professional photographer with over 10 years of experience in portrait and wedding photography.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutEquipment />
      <AboutAwards />
    </>
  );
}