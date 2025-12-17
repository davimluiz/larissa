
import React from 'react';
import { motion } from 'framer-motion';
import SunflowerGraphic from './SunflowerGraphic';

const Hero: React.FC = () => {
  return (
    <div className="relative z-20 text-center pt-6 md:pt-12 pb-0">
      <div className="max-w-4xl mx-auto px-4 relative">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl md:text-6xl lg:text-7xl font-serif font-light text-white tracking-tight leading-none"
        >
          Deixe seu sorriso florescer
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-3 text-white font-bold text-[10px] md:text-base tracking-[0.25em] uppercase drop-shadow-lg"
        >
          mesmo nos dias nublados
        </motion.div>

        {/* Framing Sunflowers - Adjusted for cleaner mobile look */}
        <SunflowerGraphic className="-top-12 -left-6 scale-50 opacity-10" delay={0.2} rotation={-15} />
        <SunflowerGraphic className="-top-10 -right-6 scale-50 opacity-10" delay={0.4} rotation={15} />
      </div>
    </div>
  );
};

export default Hero;
