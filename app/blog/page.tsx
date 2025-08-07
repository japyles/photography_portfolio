import { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { BlogGrid } from '@/components/blog-grid';

export const metadata: Metadata = {
  title: 'Blog | Alex Morgan Photography',
  description: 'Photography tips, behind-the-scenes stories, and client features from professional photographer Alex Morgan.',
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Photography Journal"
        subtitle="Tips, stories, and inspiration from behind the lens"
        backgroundImage="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg"
      />
      <BlogGrid />
    </>
  );
}