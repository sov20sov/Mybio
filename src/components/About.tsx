import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const STATS = [
  { label: 'Projects Completed', value: '2+' },
  { label: 'Certificates', value: '2' },
  { label: 'Years Old', value: '20' },
  { label: 'Skills Areas', value: '3+' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-navy-dark relative z-10">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-display tracking-wide mb-8">
              Systematic Logic.<br />
              <span className="text-highlight">Creative Vision.</span>
            </h2>
            <div className="space-y-6 text-text-muted font-light leading-relaxed">
              <p>
                I am a 20-year-old developer and creator based in Al-Aziziya, Iraq. 
                Currently in my second year as a CS student at Wasit University, I 
                strive to blend academic rigor with real-world digital execution.
              </p>
              <p>
                Whether I'm architecting scalable full-stack applications or editing 
                high-impact visual content, my approach is the same: rigorous attention 
                to detail, geometric precision, and an unwavering commitment to quality.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                className="bg-card border border-navy-light p-6 transition-all hover:border-highlight hover:shadow-[0_0_15px_rgba(74,144,217,0.15)] group"
              >
                <div className="text-4xl font-display text-text-light group-hover:text-highlight transition-colors mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-text-muted uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
