"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const heroImages = [
  {
    src: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg',
    alt: 'Professional Portrait Photography',
    title: 'Capturing Life\'s Beautiful Moments',
    subtitle: 'Professional Photography That Tells Your Story',
  },
  {
    src: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg',
    // src: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
    alt: 'Wedding Photography',
    title: 'Timeless Wedding Photography',
    subtitle: 'Preserving Your Most Precious Day Forever',
  },
  {
    src: 'https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg',
    alt: 'Portrait Session',
    title: 'Authentic Portrait Sessions',
    subtitle: 'Revealing Your True Self Through the Lens',
  },
];

type HeroProps = {
  textColor: 'light' | 'dark';
};

export function Hero({ textColor }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const textColorClass = textColor === 'dark' ? 'text-foreground' : 'text-white';
  const buttonVariant = textColor === 'dark' ? 'default' : 'outline';

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <Image
            src={heroImages[currentSlide].src}
            alt={heroImages[currentSlide].alt}
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 glass dark:glass-dark p-3 rounded-full hover:bg-white/20 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 glass dark:glass-dark p-3 rounded-full hover:bg-white/20 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white max-w-4xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.h1
                className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow-lg ${ textColorClass }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {heroImages[currentSlide].title}
              </motion.h1>
              <motion.p
                className={`text-xl md:text-2xl mb-8 ${ textColor === 'light' ? 'text-white/90' : 'text-foreground/90'} text-shadow`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {heroImages[currentSlide].subtitle}
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <Button
                  asChild
                  size="lg"
                  variant={buttonVariant}
                  className={` ${textColor === 'light' ? 'border-foreground/30 hover:bg-foreground/10' : 'glass dark:glass-dark border-white/30 hover:bg-white/20'} hover:scale-105 transition-all duration-300 shadow-2xl`}
                >
                  <Link href="/portfolio">View Portfolio</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="glass dark:glass-dark border-white/30 hover:bg-white/10 hover:scale-105 transition-all duration-300 shadow-2xl text-white dark:text-white"
                >
                  <Link href="/contact">Book a Session</Link>
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-110'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Auto-play control */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute bottom-6 right-6 z-10 glass dark:glass-dark p-3 rounded-full hover:bg-white/20 transition-all duration-300 group"
        aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
      >
        <Play className={`h-4 w-4 text-white transition-transform ${isAutoPlaying ? 'rotate-0' : 'rotate-45'}`} />
      </button>
    </section>
  );
}