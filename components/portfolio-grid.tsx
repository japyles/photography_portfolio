"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = ['All', 'Portraits', 'Weddings', 'Travel', 'Nature', 'Commercial', 'Events'];

const portfolioImages = [
  { id: 1, src: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg', alt: 'Portrait 1', category: 'Portraits', title: 'Natural Light Portrait' },
  { id: 2, src: 'https://images.pexels.com/photos/2909476/pexels-photo-2909476.jpeg', alt: 'Wedding 1', category: 'Weddings', title: 'Wedding Ceremony' },
  { id: 3, src: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg', alt: 'Commercial 1', category: 'Commercial', title: 'Corporate Headshot' },
  { id: 4, src: 'https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg', alt: 'Portrait 2', category: 'Portraits', title: 'Studio Portrait' },
  { id: 5, src: 'https://images.pexels.com/photos/1183021/pexels-photo-1183021.jpeg', alt: 'Nature 1', category: 'Nature', title: 'Landscape Photography' },
  { id: 6, src: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg', alt: 'Travel 1', category: 'Travel', title: 'Travel Portrait' },
  { id: 7, src: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg', alt: 'Events 1', category: 'Events', title: 'Corporate Event' },
  { id: 8, src: 'https://images.pexels.com/photos/10673219/pexels-photo-10673219.jpeg', alt: 'Portrait 3', category: 'Portraits', title: 'Environmental Portrait' },
  { id: 9, src: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg', alt: 'Wedding 2', category: 'Weddings', title: 'Wedding Details' },
  { id: 10, src: 'https://images.pexels.com/photos/3766113/pexels-photo-3766113.jpeg', alt: 'Commercial 2', category: 'Commercial', title: 'Product Photography' },
  { id: 11, src: 'https://images.pexels.com/photos/15674505/pexels-photo-15674505.jpeg', alt: 'Portrait 4', category: 'Portraits', title: 'Creative Portrait' },
  { id: 12, src: 'https://images.pexels.com/photos/2253824/pexels-photo-2253824.jpeg', alt: 'Nature 2', category: 'Nature', title: 'Nature Close-up' },
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

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
};

export function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'All' 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === selectedCategory);

  const currentImageIndex = selectedImage ? filteredImages.findIndex(img => img.id === selectedImage) : -1;

  const goToPrevious = () => {
    if (currentImageIndex > 0) {
      setSelectedImage(filteredImages[currentImageIndex - 1].id);
    }
  };

  const goToNext = () => {
    if (currentImageIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentImageIndex + 1].id);
    }
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`glass dark:glass-dark transition-all duration-300 ${
                selectedCategory === category 
                  ? 'shadow-xl scale-105 text-black dark:text-black hover:text-white' 
                  : 'hover:shadow-lg hover:scale-105'
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          key={selectedCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer glass dark:glass-dark shadow-xl hover:shadow-2xl transition-all duration-500"
              onClick={() => setSelectedImage(image.id)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-semibold text-sm">{image.title}</h3>
                <p className="text-white/70 text-xs">{image.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-6xl max-h-[90vh] m-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-square">
                  <Image
                    src={filteredImages.find(img => img.id === selectedImage)?.src || ''}
                    alt={filteredImages.find(img => img.id === selectedImage)?.alt || ''}
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>

                {/* Navigation */}
                {currentImageIndex > 0 && (
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 glass dark:glass-dark p-3 rounded-full hover:bg-white/20 transition-all duration-300"
                  >
                    <ChevronLeft className="h-6 w-6 text-white" />
                  </button>
                )}

                {currentImageIndex < filteredImages.length - 1 && (
                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 glass dark:glass-dark p-3 rounded-full hover:bg-white/20 transition-all duration-300"
                  >
                    <ChevronRight className="h-6 w-6 text-white" />
                  </button>
                )}

                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 glass dark:glass-dark p-2 rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  <X className="h-6 w-6 text-white" />
                </button>

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 glass dark:glass-dark rounded-b-lg p-4">
                  <h3 className="text-white font-semibold text-lg">
                    {filteredImages.find(img => img.id === selectedImage)?.title}
                  </h3>
                  <p className="text-white/70">
                    {filteredImages.find(img => img.id === selectedImage)?.category}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}