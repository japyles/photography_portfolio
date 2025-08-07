import { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { ProtectedGallery } from '@/components/protected-gallery';

export const metadata: Metadata = {
  title: 'Client Gallery | Alex Morgan Photography',
  description: 'Private client galleries. Enter your password to access your photos.',
};

export default function ClientGalleryPage() {
  return (
    <>
      <PageHeader
        title="Client Gallery"
        subtitle="Private access to your photo collection"
        backgroundImage="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg"
      />
      <ProtectedGallery />
    </>
  );
}