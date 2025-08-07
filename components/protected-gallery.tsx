"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const galleryImages = [
  { id: 1, src: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg', alt: 'Client Photo 1' },
  { id: 2, src: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg', alt: 'Client Photo 2' },
  { id: 3, src: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg', alt: 'Client Photo 3' },
  { id: 4, src: 'https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg', alt: 'Client Photo 4' },
  { id: 5, src: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg', alt: 'Client Photo 5' },
  { id: 6, src: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg', alt: 'Client Photo 6' },
];

export function ProtectedGallery() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate password verification
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (password === 'demo123') {
      setIsUnlocked(true);
      toast({
        title: "Access Granted!",
        description: "Welcome to your private gallery.",
      });
    } else {
      toast({
        title: "Access Denied",
        description: "Please check your password and try again.",
        variant: "destructive",
      });
    }

    setIsLoading(false);
  };

  if (!isUnlocked) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="glass dark:glass-dark border-0 shadow-2xl">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Private Gallery Access</CardTitle>
                  <CardDescription>
                    Enter your password to view your exclusive photo collection
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="password">Password</Label>
                      <div className="relative mt-2">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="glass dark:glass-dark border-0 pr-12"
                          placeholder="Enter gallery password"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full glass dark:glass-dark hover:scale-105 transition-all duration-300 shadow-xl"
                    >
                      {isLoading ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="h-4 w-4 border-2 border-current border-t-transparent rounded-full"
                        />
                      ) : (
                        'Access Gallery'
                      )}
                    </Button>
                  </form>
                  <div className="mt-4 text-center text-sm text-muted-foreground">
                    <p>For demo purposes, use password: <code className="bg-muted px-1 rounded">demo123</code></p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Private Gallery
          </h2>
          <p className="text-xl text-muted-foreground">
            Your exclusive collection of professionally edited photographs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer glass dark:glass-dark shadow-xl hover:shadow-2xl transition-all duration-500"
              onClick={() => setSelectedImage(image.id)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 space-y-4"
        >
          <p className="text-muted-foreground">
            Need help downloading your photos? Contact me for assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="glass dark:glass-dark hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Download All Photos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass dark:glass-dark hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Order Prints
            </Button>
          </div>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh] m-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-square">
                  <Image
                    src={galleryImages.find(img => img.id === selectedImage)?.src || ''}
                    alt={galleryImages.find(img => img.id === selectedImage)?.alt || ''}
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}