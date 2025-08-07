"use client";

import { motion } from 'framer-motion';
import { Camera, Heart, Briefcase, Calendar, Users, Gift, Palette, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Camera,
    title: 'Portrait Sessions',
    description: 'Professional headshots and personal portraits that capture your authentic self',
    price: 'Starting at $300',
    duration: '1-2 hours',
    includes: ['Pre-session consultation', '10-15 edited high-resolution images', 'Online gallery', 'Print release'],
    popular: false,
  },
  {
    icon: Heart,
    title: 'Wedding Photography',
    description: 'Complete wedding day coverage with artistic storytelling and timeless elegance',
    price: 'Starting at $2,500',
    duration: '8-12 hours',
    includes: ['Engagement session', '500+ edited photos', 'Online gallery', 'USB with full resolution images', 'Print release'],
    popular: true,
  },
  {
    icon: Briefcase,
    title: 'Commercial Photography',
    description: 'Professional photography for businesses, products, and corporate events',
    price: 'Starting at $500',
    duration: 'Half/Full day',
    includes: ['Product photography', 'Team headshots', 'Brand imagery', 'Commercial usage rights', 'Fast turnaround'],
    popular: false,
  },
  {
    icon: Calendar,
    title: 'Event Photography',
    description: 'Comprehensive coverage of your special occasions and celebrations',
    price: 'Starting at $400',
    duration: '2-6 hours',
    includes: ['Full event coverage', 'Candid moments', 'Group photos', 'Online gallery', '48-hour preview'],
    popular: false,
  },
  {
    icon: Users,
    title: 'Family Sessions',
    description: 'Beautiful family portraits that capture the love and connection between you',
    price: 'Starting at $350',
    duration: '1 hour',
    includes: ['Location scouting', '15-20 edited images', 'Online gallery', 'Print release', 'Styling guide'],
    popular: false,
  },
  {
    icon: Gift,
    title: 'Special Occasions',
    description: 'Milestone celebrations, graduations, and memorable life events',
    price: 'Starting at $275',
    duration: '1 hour',
    includes: ['Custom session planning', '10-15 edited images', 'Online gallery', 'Print release'],
    popular: false,
  },
  {
    icon: Palette,
    title: 'Creative Sessions',
    description: 'Artistic and conceptual photography for unique creative projects',
    price: 'Custom pricing',
    duration: 'Variable',
    includes: ['Creative consultation', 'Custom editing', 'High-resolution files', 'Usage rights discussion'],
    popular: false,
  },
  {
    icon: MapPin,
    title: 'Travel & Destination',
    description: 'Photography services for destination weddings and travel sessions',
    price: 'Custom pricing',
    duration: '1-3 days',
    includes: ['Travel coordination', 'Extended coverage', 'Location expertise', 'Travel expenses discussion'],
    popular: false,
  },
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

export function ServicesGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className={`glass dark:glass-dark border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group h-full relative ${service.popular ? 'ring-2 ring-primary/50' : ''}`}>
                {service.popular && (
                  <Badge className="absolute -top-2 left-4 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">
                        {service.price}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {service.duration}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Includes:</h4>
                    <ul className="space-y-1">
                      {service.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-xs text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className="w-full mt-4 glass dark:glass-dark hover:scale-105 transition-all duration-300"
                    variant={service.popular ? "default" : "outline"}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}