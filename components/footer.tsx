"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Camera, Instagram, Mail, Phone, MapPin, Facebook, Twitter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const footerLinks = {
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Wedding Photography', href: '/services' },
    { name: 'Portrait Sessions', href: '/services' },
    { name: 'Commercial Work', href: '/services' },
    { name: 'Event Photography', href: '/services' },
    { name: 'Fine Art Prints', href: '/prints' },
    { name: 'Client Galleries', href: '/client-gallery' },
  ],
  contact: [
    { icon: Phone, text: '(555) 123-4567', href: 'tel:+15551234567' },
    { icon: Mail, text: 'hello@alexmorganphotography.com', href: 'mailto:hello@alexmorganphotography.com' },
    { icon: MapPin, text: 'San Francisco, CA', href: '#' },
  ],
  social: [
    { icon: Instagram, href: 'https://instagram.com/alexmorganphoto', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/alexmorganphoto', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/alexmorganphoto', label: 'Twitter' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-muted/30 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Camera className="h-8 w-8 text-primary" />
                <span className="font-bold text-xl">Alex Morgan</span>
              </Link>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Professional photographer capturing life's most precious moments with artistry and passion. 
                Based in San Francisco, available worldwide.
              </p>
            </motion.div>
          </div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-3 mb-6">
              {footerLinks.contact.map((contact, index) => (
                <li key={index}>
                  <Link
                    href={contact.href}
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    <contact.icon className="h-4 w-4 mr-3 flex-shrink-0" />
                    {contact.text}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4">
              {footerLinks.social.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass dark:glass-dark p-2 rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <Separator className="mb-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground"
        >
          <p>© 2024 Alex Morgan Photography. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}