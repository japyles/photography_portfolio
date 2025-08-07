"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export function AboutHero() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Meet Alex Morgan
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A passionate photographer with over 10 years of experience capturing life's most 
              precious moments. Based in San Francisco, I specialize in creating timeless images 
              that tell your unique story.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Over 500 weddings photographed</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Published in major photography magazines</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Available worldwide for destination shoots</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden glass dark:glass-dark shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg"
                alt="Alex Morgan - Photographer"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 glass dark:glass-dark rounded-2xl flex items-center justify-center shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}