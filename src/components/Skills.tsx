import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, PenTool } from 'lucide-react';

const TECHNICAL_SKILLS = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 
  'Tailwind CSS', 'shadcn/ui', 'Node.js', 'Express.js', 
  'Supabase', 'Git', 'GitHub'
];

const CREATIVE_SKILLS = [
  'Video Editing', 'Motion Design', 'Graphic Design', 
  'Social Media Management', 'Account Management'
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } }
  };

  return (
    <section id="skills" className="py-32 px-6 md:px-12 bg-navy relative border-y border-navy-light overflow-hidden">
      {/* Decorative background flair */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-highlight/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display tracking-wide mb-4">Toolkit & <span className="text-highlight">Arsenal</span></h2>
          <p className="text-text-muted max-w-2xl font-light">
            A precise selection of technologies and disciplines I use to architect digital environments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24 relative z-10">
          {/* Engineering */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <div className="flex items-center gap-3 mb-8 border-b border-navy-light pb-4">
              <Code2 className="text-highlight w-6 h-6" />
              <h3 className="text-2xl font-display tracking-widest text-text-light uppercase">Engineering</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {TECHNICAL_SKILLS.map((skill) => (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  className="px-5 py-2.5 bg-card text-sm font-medium border border-navy-light text-text-muted hover:text-white hover:border-highlight transition-all hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(74,144,217,0.2)]"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Creative */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <div className="flex items-center gap-3 mb-8 border-b border-navy-light pb-4">
              <PenTool className="text-highlight w-6 h-6" />
              <h3 className="text-2xl font-display tracking-widest text-text-light uppercase">Creative</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {CREATIVE_SKILLS.map((skill) => (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  className="px-5 py-2.5 bg-[#14233D] text-sm font-medium border border-transparent text-text-muted hover:text-white hover:border-highlight transition-all hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(74,144,217,0.2)]"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
