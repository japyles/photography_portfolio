"use client";

import { motion } from 'framer-motion';
import { Award, Star, Trophy } from 'lucide-react';

const achievements = [
  {
    icon: Award,
    title: 'Best Wedding Photographer 2023',
    organization: 'San Francisco Wedding Awards',
    year: '2023'
  },
  {
    icon: Star,
    title: 'Featured Artist',
    organization: 'Photography Magazine',
    year: '2022'
  },
  {
    icon: Trophy,
    title: 'Portrait Photographer of the Year',
    organization: 'California Photography Association',
    year: '2021'
  },
];

const stats = [
  { number: '500+', label: 'Weddings Captured' },
  { number: '1000+', label: 'Portrait Sessions' },
  { number: '50+', label: 'Commercial Projects' },
  { number: '98%', label: 'Client Satisfaction' },
];

export function AboutAwards() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Recognition & Awards
            </h2>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass dark:glass-dark p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <achievement.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">{achievement.title}</h3>
                      <p className="text-muted-foreground">{achievement.organization}</p>
                      <span className="text-primary font-semibold">{achievement.year}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              By the Numbers
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass dark:glass-dark p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 glass dark:glass-dark p-6 rounded-xl shadow-lg"
            >
              <h3 className="font-bold text-lg mb-3">Certifications & Education</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                  Professional Photographers of America (PPA) Member
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                  Wedding & Portrait Photographers International (WPPI)
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                  Bachelor of Fine Arts in Photography
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                  Continuing Education in Digital Arts
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}