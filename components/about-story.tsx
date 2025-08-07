"use client";

import { motion } from 'framer-motion';
import { Heart, Camera, Award } from 'lucide-react';

export function AboutStory() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            My Photography Journey
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Photography isn't just my profession—it's my passion. What started as a fascination 
            with capturing light and shadow has evolved into a lifelong commitment to preserving 
            the most meaningful moments in people's lives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center glass dark:glass-dark p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Camera className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">The Beginning</h3>
            <p className="text-muted-foreground leading-relaxed">
              Started with a simple camera and an eye for detail. Every shot taught me something 
              new about light, composition, and the art of storytelling through images.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center glass dark:glass-dark p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Finding My Passion</h3>
            <p className="text-muted-foreground leading-relaxed">
              Discovered that my true calling was capturing the raw emotions and authentic 
              moments that make each person's story unique and beautiful.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center glass dark:glass-dark p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Professional Growth</h3>
            <p className="text-muted-foreground leading-relaxed">
              Continuously learning and evolving my craft, earning recognition and building 
              lasting relationships with clients who trust me with their most important moments.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto text-center mt-16 glass dark:glass-dark p-8 rounded-2xl shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-4">My Philosophy</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            "Every photograph should tell a story that words cannot express. My goal is to capture 
            not just how you looked, but how you felt in that moment. These images become treasures 
            that grow more valuable with time, preserving memories for generations to come."
          </p>
        </motion.div>
      </div>
    </section>
  );
}