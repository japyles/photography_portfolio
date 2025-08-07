"use client";

import { motion } from 'framer-motion';
import { MessageCircle, Calendar, Camera, Image, Heart } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: 'Initial Consultation',
    description: 'We discuss your vision, style preferences, and specific needs for your session.',
  },
  {
    icon: Calendar,
    title: 'Planning & Scheduling',
    description: 'We coordinate the perfect date, time, and location for your photoshoot.',
  },
  {
    icon: Camera,
    title: 'The Photo Session',
    description: 'Professional photography session with careful attention to lighting and composition.',
  },
  {
    icon: Image,
    title: 'Editing & Selection',
    description: 'Professional editing and curation of your best images with my artistic touch.',
  },
  {
    icon: Heart,
    title: 'Delivery & Memories',
    description: 'Receive your beautifully edited photos through a personalized online gallery.',
  },
];

export function ProcessSection() {
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
            The Photography Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From our first conversation to delivering your final images, here's what you can expect
          </p>
        </motion.div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1 glass dark:glass-dark p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className={`flex items-start gap-4 ${
                    index % 2 === 0 ? '' : 'md:flex-row-reverse md:text-right'
                  }`}>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step Number */}
                <div className="hidden md:block">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}