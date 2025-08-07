"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const printProducts = [
  {
    id: 1,
    title: 'Golden Hour Portrait',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
    category: 'Portrait',
    rating: 4.9,
    reviews: 24,
    sizes: [
      { size: '8x10', price: 45 },
      { size: '11x14', price: 65 },
      { size: '16x20', price: 95 },
      { size: '20x24', price: 145 }
    ],
    description: 'Beautiful natural light portrait capturing the warm glow of golden hour.',
    featured: true,
  },
  {
    id: 2,
    title: 'Mountain Landscape',
    image: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg',
    category: 'Nature',
    rating: 4.8,
    reviews: 18,
    sizes: [
      { size: '11x14', price: 55 },
      { size: '16x20', price: 85 },
      { size: '20x30', price: 125 },
      { size: '24x36', price: 185 }
    ],
    description: 'Breathtaking mountain vista perfect for home or office decor.',
    featured: false,
  },
  {
    id: 3,
    title: 'Wedding Moment',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
    category: 'Wedding',
    rating: 5.0,
    reviews: 32,
    sizes: [
      { size: '8x10', price: 50 },
      { size: '11x14', price: 70 },
      { size: '16x20', price: 100 },
      { size: '20x24', price: 150 }
    ],
    description: 'Intimate wedding moment captured in timeless black and white.',
    featured: true,
  },
  {
    id: 4,
    title: 'Urban Architecture',
    image: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg',
    category: 'Architecture',
    rating: 4.7,
    reviews: 15,
    sizes: [
      { size: '11x14', price: 60 },
      { size: '16x20', price: 90 },
      { size: '20x30', price: 130 },
      { size: '24x36', price: 190 }
    ],
    description: 'Modern architectural detail showcasing clean lines and geometric beauty.',
    featured: false,
  },
  {
    id: 5,
    title: 'Candid Street Portrait',
    image: 'https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg',
    category: 'Street',
    rating: 4.9,
    reviews: 21,
    sizes: [
      { size: '8x10', price: 45 },
      { size: '11x14', price: 65 },
      { size: '16x20', price: 95 },
      { size: '20x24', price: 145 }
    ],
    description: 'Authentic street portrait capturing genuine emotion and character.',
    featured: false,
  },
  {
    id: 6,
    title: 'Minimalist Composition',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    category: 'Fine Art',
    rating: 4.8,
    reviews: 12,
    sizes: [
      { size: '11x14', price: 65 },
      { size: '16x20', price: 95 },
      { size: '20x30', price: 135 },
      { size: '24x36', price: 195 }
    ],
    description: 'Elegant minimalist composition perfect for modern interiors.',
    featured: true,
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

export function PrintStore() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Fine Art Prints Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Professional quality prints of my finest work, available in multiple sizes 
            and premium finishes to enhance your space
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="outline" className="glass dark:glass-dark">All Prints</Badge>
            <Badge variant="outline" className="glass dark:glass-dark">Portrait</Badge>
            <Badge variant="outline" className="glass dark:glass-dark">Landscape</Badge>
            <Badge variant="outline" className="glass dark:glass-dark">Wedding</Badge>
            <Badge variant="outline" className="glass dark:glass-dark">Fine Art</Badge>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {printProducts.map((product, index) => (
            <motion.div key={product.id} variants={cardVariants}>
              <Card className="glass dark:glass-dark border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group h-full overflow-hidden relative">
                {product.featured && (
                  <Badge className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}
                
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="glass dark:glass-dark p-2 hover:bg-white/20"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {product.title}
                  </CardTitle>
                  <CardDescription>
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Size & Price</label>
                    <Select defaultValue={product.sizes[0].size}>
                      <SelectTrigger className="glass dark:glass-dark border-0">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {product.sizes.map((option) => (
                          <SelectItem key={option.size} value={option.size}>
                            {option.size}" - ${option.price}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 glass dark:glass-dark hover:scale-105 transition-all duration-300"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="glass dark:glass-dark px-3"
                    >
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center glass dark:glass-dark p-8 rounded-2xl shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-4">Custom Print Services</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Don't see the size you need? I offer custom sizing and premium finishing options 
            including canvas, metal, and acrylic prints. Contact me for a personalized quote.
          </p>
          <Button size="lg" variant="outline" className="glass dark:glass-dark hover:scale-105 transition-all duration-300">
            Request Custom Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
}