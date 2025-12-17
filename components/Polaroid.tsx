
import React from 'react';
import { motion } from 'framer-motion';
import { Photo } from '../types';

interface PolaroidProps {
  photo: Photo;
  index: number;
  onSelect: (photo: Photo) => void;
}

const Polaroid: React.FC<PolaroidProps> = ({ photo, index, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: photo.rotation * 1.5 }}
      animate={{ opacity: 1, scale: 1, rotate: photo.rotation }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.05,
        ease: "easeOut" 
      }}
      whileHover={{ 
        scale: 1.1, 
        rotate: 0,
        zIndex: 50,
      }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onSelect(photo)}
      className="bg-white p-1 pb-4 md:p-2 md:pb-10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] cursor-pointer group w-24 md:w-52 lg:w-60 border border-stone-200"
    >
      <div className="w-full aspect-square overflow-hidden bg-stone-100 relative shadow-inner">
        <img 
          src={photo.url} 
          alt={photo.caption} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          style={{ display: 'block' }}
          loading="eager"
          onError={(e) => {
            console.error("Erro ao carregar imagem:", photo.url);
            // Se a imagem falhar, mostra uma cor sólida para não ficar "branco invisível"
            const target = e.target as HTMLImageElement;
            target.style.opacity = '0';
            target.parentElement!.style.backgroundColor = '#2c2c2c';
          }}
        />
      </div>
      <div className="mt-2 text-center">
        <p className="font-serif text-[7px] md:text-sm text-stone-900 font-medium italic truncate px-1">
          {photo.caption}
        </p>
      </div>
    </motion.div>
  );
};

export default Polaroid;
