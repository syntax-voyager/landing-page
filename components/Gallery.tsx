"use client";

import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export default function Gallery() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = Array.from({ length: 6 }, (_, index) => ({
    src: `/images/group-${index + 1}.png`,
    alt: `Gallery Image ${index + 1}`
  }));

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'unset'; // Re-enable scrolling
  }, []);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      
      switch (event.key) {
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'Escape':
          closeLightbox();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, prevImage, nextImage, closeLightbox]);

  return (
    <div id="gallery" className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-10 space-y-8 sm:space-y-12 lg:space-y-16 py-16 sm:py-20 lg:py-28">
      <div className="flex items-center w-full max-w-xl">
        {/* Left gradient line */}
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary" />

        <div className="rounded-full px-4 sm:px-6 lg:px-8 py-2 border border-secondary">
          <h1 className="text-primary font-bold text-lg sm:text-2xl lg:text-3xl">WHAT WE OFFER</h1>
        </div>

        {/* Right gradient line */}
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary" />
      </div>

      {/* Photos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-full cursor-pointer transform hover:scale-105"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="h-48 sm:h-52 lg:h-56 w-full object-cover"
            />
          </div>
        ))}
      </div>

      <button 
        onClick={() => setIsLightboxOpen(true)}
        className="bg-primary hover:bg-green-800 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-colors duration-300 flex items-center gap-2 font-medium cursor-pointer text-sm sm:text-base"
      >
        View Full Gallery
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-opacity"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-opacity"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-opacity"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main image */}
          <div 
            className="max-w-4xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              width={800}
              height={600}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 px-4 py-2 rounded-full text-white">
            {currentImageIndex + 1} of {images.length}
          </div>
        </div>
      )}
    </div>
  );
}
