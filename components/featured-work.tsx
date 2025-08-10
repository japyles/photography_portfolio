"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const featuredImages = [
  {
    src: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
    alt: 'Portrait Photography',
    category: 'Portraits',
    title: 'Natural Light Portraits',
  },
  {
    src: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
    alt: 'Wedding Photography',
    category: 'Weddings',
    title: 'Romantic Wedding Moments',
  },
  {
    src: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg',
    alt: 'Commercial Photography',
    category: 'Commercial',
    title: 'Professional Headshots',
  },
  {
    src: 'https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg',
    alt: 'Lifestyle Photography',
    category: 'Lifestyle',
    title: 'Candid Life Moments',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export function FeaturedWork() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my most compelling photography across different genres and styles
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featuredImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl aspect-[4/5] glass dark:glass-dark shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <span className="text-xs uppercase tracking-wider text-white/70 font-medium">
                    {image.category}
                  </span>
                  <h3 className="text-white font-semibold mt-1 group-hover:text-white/90 transition-colors">
                    {image.title}
                  </h3>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            className="glass dark:glass-dark hover:scale-105 transition-all duration-300 shadow-xl text-black dark:text-black hover:text-white"
          >
            <Link href="/portfolio">View Full Portfolio</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}