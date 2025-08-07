import { Metadata } from 'next';
import { PortfolioGrid } from '@/components/portfolio-grid';
import { PageHeader } from '@/components/page-header';

export const metadata: Metadata = {
  title: 'Portfolio | Alex Morgan Photography',
  description: 'Browse my portfolio of professional photography including portraits, weddings, travel, and commercial work.',
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        title="Portfolio"
        subtitle="A collection of my finest work across various photography genres"
        backgroundImage="https://images.pexels.com/photos/1619775/pexels-photo-1619775.jpeg"
      />
      <PortfolioGrid />
    </>
  );
}