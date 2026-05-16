import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 px-6 md:px-12 bg-navy relative border-y border-navy-light">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 bg-card border border-navy-light p-8 md:p-12 transition-all hover:border-highlight group relative overflow-hidden">
            {/* Subtle background icon */}
            <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none transform group-hover:scale-110 transition-transform duration-700">
              <GraduationCap className="w-64 h-64 text-white" />
            </div>

            <div className="relative z-10 flex-[2]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-navy-dark border border-navy-light flex items-center justify-center rounded">
                  <span className="font-display text-2xl text-highlight">WU</span>
                </div>
                <div>
                  <h3 className="text-2xl font-display tracking-widest uppercase">Wasit University</h3>
                  <p className="text-text-muted font-light">Bachelor's Degree</p>
                </div>
              </div>
              
              <h4 className="text-lg font-medium text-text-light mb-4">
                Computer Science & Information Technology
              </h4>
               <p className="text-sm text-text-muted font-light leading-relaxed max-w-xl">
                 Currently engaged in rigorous academic studies, bridging fundamental computer science 
                 theories with practical software engineering applications.
               </p>
            </div>

            <div className="relative z-10 flex-1 md:flex md:justify-end md:flex-col md:items-end gap-4 border-t md:border-t-0 md:border-l border-navy-light pt-6 md:pt-0 md:pl-8">
              <div className="inline-flex items-center px-3 py-1 bg-highlight/10 text-highlight border border-highlight/20 text-xs font-bold tracking-widest uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-highlight mr-2 animate-pulse"></span>
                Status: Enrolled
              </div>
              <p className="text-4xl font-display text-text-light tracking-widest opacity-80">
                2025-<span className="text-blue-200">2028</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
