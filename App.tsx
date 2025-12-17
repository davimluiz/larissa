
import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import SunflowerGraphic from './components/SunflowerGraphic';
import SunflowerRain from './components/SunflowerRain';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Garantir que comece no topo
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0d0d0d] selection:bg-yellow-500/30 selection:text-white overflow-x-hidden">
      {/* Glow de fundo para dar profundidade e destacar as fotos */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(253,184,19,0.1)_0%,_rgba(13,13,13,1)_75%)] pointer-events-none" />
      
      {/* Efeito de pétalas caindo */}
      <SunflowerRain />
      
      {/* Efeito de granulado sutil */}
      <div className="grain-overlay" />
      
      {/* Barra de progresso discreta */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-yellow-500 z-[100] origin-left shadow-[0_0_10px_rgba(253,184,19,0.5)]" 
        style={{ scaleX }}
      />

      <main className="relative flex flex-col items-center justify-start min-h-screen">
        <Hero />
        
        {/* Galeria centralizada */}
        <div className="w-full flex justify-center">
          <Gallery />
        </div>
        
        {/* Elementos decorativos de base */}
        <SunflowerGraphic className="bottom-0 left-0 -translate-x-1/2 opacity-10 scale-150" delay={2} rotation={45} />
        <SunflowerGraphic className="bottom-20 right-0 translate-x-1/3 opacity-10 scale-125" delay={2.5} rotation={-30} />

        <footer className="pt-10 pb-20 text-center relative z-10 w-full px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="text-stone-100 font-serif italic text-xs md:text-lg tracking-[0.4em] uppercase font-light drop-shadow-md"
          >
            A luz sempre encontra uma fenda
          </motion.div>
        </footer>
      </main>

      {/* Indicador visual de scroll */}
      <motion.div 
        animate={{ y: [0, 10, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 pointer-events-none z-10 hidden md:block"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </div>
  );
};

export default App;
