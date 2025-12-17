
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PHOTOS } from '../constants';
import { Photo } from '../types';
import Polaroid from './Polaroid';

const Gallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <section className="relative min-h-[45vh] flex flex-col items-center justify-start pt-0 pb-16 overflow-visible w-full">
      {/* Container for the Polaroid Cluster - Adjusted mt-2 to bring photos up */}
      <div className="relative w-full max-w-[280px] md:max-w-2xl aspect-square flex items-center justify-center mt-2 md:mt-6">
        {PHOTOS.map((photo, index) => (
          <div 
            key={photo.id} 
            className="absolute transition-transform duration-500 hover:z-50"
            style={{
              transform: `translate(${photo.offsetX}px, ${photo.offsetY}px)`,
            }}
          >
            <Polaroid 
              photo={photo} 
              index={index} 
              onSelect={setSelectedPhoto} 
            />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              layoutId={`photo-${selectedPhoto.id}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white p-2 pb-10 shadow-2xl max-w-[95vw] md:max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedPhoto.url} 
                alt={selectedPhoto.caption} 
                className="w-full aspect-square object-cover" 
              />
              <div className="mt-5 text-center px-4">
                <h3 className="font-serif text-xl md:text-2xl text-stone-900 italic font-medium">{selectedPhoto.caption}</h3>
                <button 
                  onClick={() => setSelectedPhoto(null)}
                  className="mt-4 text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400 hover:text-stone-900 transition-colors py-2"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
