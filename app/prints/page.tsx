import { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { PrintStore } from '@/components/print-store';

export const metadata: Metadata = {
  title: 'Prints | Alex Morgan Photography',
  description: 'Purchase high-quality prints of Alex Morgan\'s photography. Available in various sizes and finishes.',
};

export default function PrintsPage() {
  return (
    <>
      <PageHeader
        title="Fine Art Prints"
        subtitle="Bring my photography into your space with premium quality prints"
        backgroundImage="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg"
      />
      <PrintStore />
    </>
  );
}