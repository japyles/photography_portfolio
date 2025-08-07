"use client";

import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const faqs = [
  {
    question: 'How far in advance should I book my session?',
    answer: 'I recommend booking at least 2-4 weeks in advance, especially for weddings and special events. However, I do my best to accommodate last-minute requests when possible.'
  },
  {
    question: 'What should I wear for my photo session?',
    answer: 'I provide a comprehensive styling guide with outfit suggestions based on your session type and location. Generally, I recommend avoiding busy patterns and choosing colors that complement your skin tone and the setting.'
  },
  {
    question: 'How long will it take to receive my photos?',
    answer: 'For portrait and family sessions, you can expect your photos within 1-2 weeks. Wedding galleries are typically delivered within 4-6 weeks. I provide sneak peeks within 48 hours for most sessions.'
  },
  {
    question: 'Do you provide RAW or unedited images?',
    answer: 'I provide professionally edited, high-resolution JPEGs. RAW files are not included as they require professional editing to achieve the final artistic vision. All delivered images are carefully edited to match my signature style.'
  },
  {
    question: 'What happens if the weather is bad on our shoot day?',
    answer: 'For outdoor sessions, we can reschedule if weather conditions are severe. Light rain or overcast skies can actually create beautiful, soft lighting. I always have backup indoor locations and covered areas as alternatives.'
  },
  {
    question: 'Can I purchase additional images or products?',
    answer: 'Absolutely! You can purchase additional edited images, prints, albums, and other products. I offer various print sizes and premium products to help you display and preserve your memories beautifully.'
  },
  {
    question: 'Do you travel for destination sessions?',
    answer: 'Yes, I love traveling for special sessions and destination weddings! Travel fees vary based on location and duration. I\'m always excited to explore new places and capture your memories in stunning locations.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Cancellations made more than 30 days before the session receive a full refund minus the booking fee. Cancellations within 30 days are subject to a 50% fee. Weather-related cancellations can be rescheduled without penalty.'
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Common questions about my photography services and what to expect
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="glass dark:glass-dark border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                  >
                    <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Plus className="h-5 w-5 text-primary flex-shrink-0" />
                    </motion.div>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}