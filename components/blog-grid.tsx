"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 1,
    title: 'Essential Tips for Perfect Wedding Day Photography',
    excerpt: 'Learn the insider secrets to capturing stunning wedding moments that couples will treasure forever.',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
    category: 'Wedding Tips',
    date: '2024-01-15',
    readTime: '8 min read',
    slug: 'essential-wedding-photography-tips'
  },
  {
    id: 2,
    title: 'Creating Emotional Portraits: A Behind-the-Scenes Look',
    excerpt: 'Discover the techniques I use to capture authentic emotions and create powerful portrait photography.',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
    category: 'Portrait Photography',
    date: '2024-01-10',
    readTime: '6 min read',
    slug: 'creating-emotional-portraits'
  },
  {
    id: 3,
    title: 'My Journey Through Iceland: Travel Photography Adventures',
    excerpt: 'Join me on a photographic journey through Iceland\'s breathtaking landscapes and unique culture.',
    image: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg',
    category: 'Travel',
    date: '2024-01-05',
    readTime: '10 min read',
    slug: 'iceland-travel-photography'
  },
  {
    id: 4,
    title: 'Natural Light vs Studio Light: When to Use Each',
    excerpt: 'Understanding the difference between natural and artificial lighting and how to use each effectively.',
    image: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg',
    category: 'Photography Tips',
    date: '2023-12-28',
    readTime: '7 min read',
    slug: 'natural-vs-studio-light'
  },
  {
    id: 5,
    title: 'Client Spotlight: Sarah & Michael\'s Intimate Garden Wedding',
    excerpt: 'A beautiful intimate wedding celebration in a private garden setting with close family and friends.',
    image: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg',
    category: 'Real Weddings',
    date: '2023-12-20',
    readTime: '5 min read',
    slug: 'sarah-michael-garden-wedding'
  },
  {
    id: 6,
    title: 'Building Your Photography Portfolio: A Beginner\'s Guide',
    excerpt: 'Essential steps and considerations for creating a strong photography portfolio that showcases your best work.',
    image: 'https://images.pexels.com/photos/1619775/pexels-photo-1619775.jpeg',
    category: 'Photography Business',
    date: '2023-12-15',
    readTime: '9 min read',
    slug: 'building-photography-portfolio'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function BlogGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.div key={post.id} variants={cardVariants}>
              <Card className="glass dark:glass-dark border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group h-full overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="glass dark:glass-dark text-white border-white/20">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <CardDescription className="mb-4 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                  
                  <Button
                    asChild
                    variant="ghost"
                    className="p-0 h-auto group/button hover:bg-transparent"
                  >
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="glass dark:glass-dark hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <Link href="/blog">View All Posts</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}