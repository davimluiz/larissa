
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
        <img 
          src={photo.url} 
          alt={photo.caption} 
          onLoad={() => setIsLoaded(true)}
          onError={(e) => {
            console.error(`Falha ao carregar imagem: ${photo.url}`);
            setHasError(true);
            setIsLoaded(true); // Para ocultar o spinner e mostrar o erro
          }}
          className={`w-full h-full object-cover block transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="eager"
        />
        
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-stone-100">
             <div className="w-4 h-4 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {hasError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-200 p-2 text-center">
            <span className="text-[10px] text-stone-500 font-bold">Arquivo não encontrado</span>
            <span className="text-[8px] text-stone-400 break-all">{photo.url}</span>
          </div>
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
