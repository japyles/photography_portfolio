import { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { ContactForm } from '@/components/contact-form';
import { ContactInfo } from '@/components/contact-info';

export const metadata: Metadata = {
  title: 'Contact | Alex Morgan Photography',
  description: 'Get in touch to discuss your photography needs. Book a consultation or photo session today.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Let's Work Together"
        subtitle="Ready to capture your special moments? Let's discuss your photography needs"
        backgroundImage="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg"
      />
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </>
  );
}