"use client";

import { motion } from 'framer-motion';
import { Camera, Aperture, Zap, Settings } from 'lucide-react';

const equipment = [
  {
    category: 'Cameras',
    icon: Camera,
    items: ['Canon EOS R5', 'Canon EOS R6 Mark II', 'Fujifilm X-T5', 'Film cameras for special projects']
  },
  {
    category: 'Lenses',
    icon: Aperture,
    items: ['24-70mm f/2.8L', '70-200mm f/2.8L', '35mm f/1.4L', '85mm f/1.2L', '16-35mm f/2.8L']
  },
  {
    category: 'Lighting',
    icon: Zap,
    items: ['Profoto B10X Plus', 'Godox V1 Flash', 'Various softboxes & reflectors', 'Natural light expertise']
  },
  {
    category: 'Editing',
    icon: Settings,
    items: ['Adobe Lightroom', 'Adobe Photoshop', 'Capture One Pro', 'Custom preset collections']
  }
];

export function AboutEquipment() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Professional Equipment
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Using industry-leading equipment to ensure the highest quality results for every shoot
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {equipment.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass dark:glass-dark p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <category.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{category.category}</h3>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-muted-foreground text-sm flex items-start">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}