"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Let's work together to capture your story in the most beautiful way possible. 
            Every moment deserves to be remembered perfectly.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="glass dark:glass-dark hover:scale-105 transition-all duration-300 shadow-xl group"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Book a Session
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="glass dark:glass-dark hover:scale-105 transition-all duration-300 shadow-xl group"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Let's Chat
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            <p>Available for bookings worldwide • Serving San Francisco Bay Area locally</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}