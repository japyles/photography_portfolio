import { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { ServicesGrid } from '@/components/services-grid';
import { ProcessSection } from '@/components/process-section';
import { FaqSection } from '@/components/faq-section';

export const metadata: Metadata = {
  title: 'Services | Alex Morgan Photography',
  description: 'Professional photography services including portraits, weddings, commercial, and event photography. View packages and pricing.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Photography Services"
        subtitle="Professional photography services tailored to capture your most important moments"
        backgroundImage="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg"
      />
      <ServicesGrid />
      <ProcessSection />
      <FaqSection />
    </>
  );
}