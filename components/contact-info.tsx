"use client";

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Instagram, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const contactItems = [
  {
    icon: Phone,
    title: 'Phone',
    value: '(555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@alexmorganphotography.com',
    href: 'mailto:hello@alexmorganphotography.com',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'San Francisco Bay Area',
    href: '#',
  },
  {
    icon: Clock,
    title: 'Response Time',
    value: 'Within 24 hours',
    href: '#',
  },
];

const socialLinks = [
  {
    icon: Instagram,
    name: 'Instagram',
    href: 'https://instagram.com/alexmorganphoto',
    handle: '@alexmorganphoto',
  },
  {
    icon: Calendar,
    name: 'Schedule',
    href: '#',
    handle: 'Book Online',
  },
];

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-6"
    >
      <Card className="glass dark:glass-dark border-0 shadow-2xl">
        <CardHeader>
          <CardTitle className="text-2xl">Get in Touch</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center space-x-4 p-4 rounded-lg glass dark:glass-dark hover:bg-white/10 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground">
                  {item.title}
                </h3>
                <p className="text-foreground group-hover:text-primary transition-colors">
                  {item.value}
                </p>
              </div>
            </motion.a>
          ))}
        </CardContent>
      </Card>

      <Card className="glass dark:glass-dark border-0 shadow-2xl">
        <CardHeader>
          <CardTitle className="text-xl">Follow My Work</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center space-x-4 p-4 rounded-lg glass dark:glass-dark hover:bg-white/10 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <social.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{social.name}</h3>
                <p className="text-muted-foreground group-hover:text-primary transition-colors">
                  {social.handle}
                </p>
              </div>
            </motion.a>
          ))}
        </CardContent>
      </Card>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Card className="glass dark:glass-dark border-0 shadow-2xl bg-gradient-to-br from-primary/5 to-primary/10">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-2">Ready to Book?</h3>
            <p className="text-muted-foreground mb-4">
              Let's schedule a consultation to discuss your photography needs and vision.
            </p>
            <Button className="w-full glass dark:glass-dark hover:scale-105 transition-all duration-300">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Consultation
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}