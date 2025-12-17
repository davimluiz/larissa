
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Photo } from '../types';

interface PolaroidProps {
  photo: Photo;
  index: number;
  onSelect: (photo: Photo) => void;
}

const Polaroid: React.FC<PolaroidProps> = ({ photo, index, onSelect }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: photo.rotation * 1.5 }}
      animate={{ opacity: 1, scale: 1, rotate: photo.rotation }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1]
      }}
      whileHover={{ 
        scale: 1.1, 
        rotate: 0,
        zIndex: 50,
      }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onSelect(photo)}
      className="bg-white p-1 pb-4 md:p-2 md:pb-10 shadow-[0_15px_40px_rgba(0,0,0,0.6)] cursor-pointer group w-28 md:w-56 border border-stone-200"
    >
      <div className="w-full aspect-square overflow-hidden bg-stone-100 relative shadow-inner flex items-center justify-center">
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-stone-200 animate-pulse flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        {hasError ? (
          <div className="text-[8px] text-stone-400 uppercase tracking-widest text-center px-2">
            Imagem não encontrada
          </div>
        ) : (
          <img 
            src={photo.url} 
            alt={photo.caption} 
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ display: 'block' }}
          />
        )}
      </div>
      <div className="mt-2 text-center">
        <p className="font-serif text-[8px] md:text-sm text-stone-900 font-medium italic truncate px-1">
          {photo.caption}
        </p>
      </div>
    </motion.div>
  );
};

export default Polaroid;
