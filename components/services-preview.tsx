"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Camera, Heart, Briefcase, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: Camera,
    title: 'Portrait Sessions',
    description: 'Professional headshots and personal portraits that capture your authentic self',
    price: 'Starting at $300',
    features: ['1-2 hour session', 'Online gallery', '10 edited images', 'Print release'],
  },
  {
    icon: Heart,
    title: 'Wedding Photography',
    description: 'Complete wedding day coverage with artistic storytelling',
    price: 'Starting at $2,500',
    features: ['8-hour coverage', 'Engagement session', '500+ edited photos', 'Online gallery'],
  },
  {
    icon: Briefcase,
    title: 'Commercial Work',
    description: 'Professional photography for businesses and brands',
    price: 'Starting at $500',
    features: ['Product photography', 'Team headshots', 'Brand imagery', 'Usage rights'],
  },
  {
    icon: Calendar,
    title: 'Event Photography',
    description: 'Comprehensive coverage of your special occasions',
    price: 'Starting at $400',
    features: ['Full event coverage', 'Candid moments', 'Group photos', 'Fast delivery'],
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

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export function ServicesPreview() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Photography Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional photography services tailored to your unique needs and vision
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="glass dark:glass-dark border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {service.price}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
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
            className="glass dark:glass-dark hover:scale-105 transition-all duration-300 shadow-xl group text-black dark:text-black hover:text-white"
          >
            <Link href="/services" className="flex items-center gap-2">
              View All Services
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}