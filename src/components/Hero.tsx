import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.substring(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayText}<span className="animate-pulse text-highlight">_</span></span>;
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden px-6 pt-24">
      {/* Geometric background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-navy-light/40 transform rotate-12 blur-[100px] rounded-full"
        />
        <motion.div 
          animate={{ y: [0, -30, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-20 w-[40rem] h-[40rem] bg-accent/20 blur-[120px] rounded-full"
        />
        {/* Subtle grid/polygons could be implemented via SVG bg, adding simple visual interest */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Avatar Space */}
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-highlight shadow-[0_0_30px_rgba(74,144,217,0.2)] mb-8 p-1 bg-navy-dark">
            <div className="w-full h-full rounded-full overflow-hidden bg-navy-light flex items-center justify-center">
              <img 
                src="/images/forprofile.png" 
                alt="Hussein Mohammed" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h2 className="text-highlight font-medium tracking-wide uppercase mb-4 text-sm md:text-base">
            Portfolio
          </h2>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-text-light tracking-tight mb-6 leading-none text-center">
            Hussein Mohammed
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-text-muted max-w-2xl font-light h-16"
        >
          <TypewriterText text="Full-Stack Developer & Video Editor" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8"
        >
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-white transition-all bg-navy border border-highlight rounded-none hover:bg-highlight hover:shadow-[0_0_20px_rgba(74,144,217,0.4)] group cursor-pointer"
          >
            Explore My Work
            <motion.span 
              className="ml-2"
              group-hover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
