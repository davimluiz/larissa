
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const SunflowerRain: React.FC = () => {
  const petals = useMemo(() => 
    [...Array(20)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 10,
      duration: 10 + Math.random() * 15,
      size: 10 + Math.random() * 20,
      rotation: Math.random() * 360,
    })), []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{ y: -100, opacity: 0, x: 0, rotate: petal.rotation }}
          animate={{ 
            y: '110vh', 
            opacity: [0, 0.4, 0.4, 0],
            x: [0, 50, -50, 20],
            rotate: petal.rotation + 360
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            left: petal.left,
            width: petal.size,
            height: petal.size * 1.5,
          }}
        >
          {/* Formato de pétala simples e artístico */}
          <svg viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            <path 
              d="M20 0C20 0 40 20 40 40C40 51 31 60 20 60C9 60 0 51 0 40C0 20 20 0 20 0Z" 
              fill="#FDB813" 
              opacity="0.6"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default SunflowerRain;
