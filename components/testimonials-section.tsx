"use client";

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Bride',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    content: 'Alex captured our wedding day perfectly. Every emotion, every detail - it was all there. The photos are absolutely stunning and we\'ll treasure them forever.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Business Owner',
    image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg',
    content: 'Professional, creative, and incredibly talented. Alex helped elevate our brand with amazing product photography that significantly boosted our sales.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Fashion Designer',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg',
    content: 'Working with Alex was a dream. The portfolio photos exceeded all my expectations and perfectly captured the essence of my designs.',
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6
    }
  }
};

export function TestimonialsSection() {
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
            What Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from the amazing people I've had the privilege to work with
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="glass dark:glass-dark border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <div className="relative mb-6">
                    <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-1" />
                    <p className="text-muted-foreground leading-relaxed pl-6">
                      {testimonial.content}
                    </p>
                  </div>

                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}