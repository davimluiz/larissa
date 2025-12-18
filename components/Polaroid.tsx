
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
      className="bg-white p-1 pb-4 md:p-2 md:pb-10 shadow-[0_15px_40px_rgba(0,0,0,0.4)] cursor-pointer group w-28 md:w-56 border border-stone-100"
    >
      <div className="w-full aspect-square overflow-hidden bg-stone-200 relative shadow-inner flex items-center justify-center">
        {/* Camada de erro amigável */}
        {hasError ? (
          <div className="flex flex-col items-center justify-center text-center p-2">
            <svg className="w-6 h-6 text-stone-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-[8px] md:text-[10px] text-stone-500 font-medium">Foto ausente em /public</span>
          </div>
        ) : (
          <>
            <img 
              src={photo.url} 
              alt={photo.caption} 
              onLoad={() => setIsLoaded(true)}
              onError={() => {
                console.error(`Erro: Arquivo ${photo.url} não encontrado na raiz/public.`);
                setHasError(true);
              }}
              className={`w-full h-full object-cover block transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              loading="eager"
            />
            
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-stone-100">
                <div className="w-4 h-4 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </>
        )}
      </div>
      <div className="mt-2 text-center">
        <p className="font-serif text-[8px] md:text-sm text-stone-800 font-medium italic truncate px-1">
          {photo.caption}
        </p>
      </div>
    </motion.div>
  );
};

export default Polaroid;
