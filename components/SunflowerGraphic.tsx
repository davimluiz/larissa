
import React from 'react';
import { motion } from 'framer-motion';

interface SunflowerGraphicProps {
  className?: string;
  delay?: number;
  rotation?: number;
}

const SunflowerGraphic: React.FC<SunflowerGraphicProps> = ({ className, delay = 0, rotation = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: rotation - 10 }}
      animate={{ opacity: 0.4, scale: 1, rotate: rotation }}
      transition={{ 
        duration: 3, 
        delay, 
        ease: "easeOut"
      }}
      className={`absolute select-none pointer-events-none ${className}`}
    >
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Simple artistic sunflower representation */}
        <motion.circle 
          cx="100" cy="100" r="20" 
          fill="#3D2B1F" 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, delay: delay + 0.5 }}
        />
        {[...Array(12)].map((_, i) => (
          <motion.path
            key={i}
            d={`M100 80 Q110 50 100 20 Q90 50 100 80`}
            fill="#FDB813"
            transform={`rotate(${i * 30} 100 100)`}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: delay + 1 + (i * 0.1) }}
          />
        ))}
        {/* Subtle stem */}
        <motion.path
          d="M100 120 Q100 160 80 200"
          stroke="#556B2F"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay }}
        />
      </svg>
    </motion.div>
  );
};

export default SunflowerGraphic;
