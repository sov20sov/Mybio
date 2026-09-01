import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const PROJECTS = [
  {
    name: 'HOMS',
    description:
      'Full-stack hospital management system with role-based access control (Admin / Reception / Doctor / Specialist) and an integrated AI medical assistant',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Supabase', 'Tailwind'],
    link: 'https://github.com/husTh1/Hospital-System',
  },
  {
    name: 'Amwali',
    description:
      'Personal finance dashboard built for the Iraqi Dinar (IQD), with budgeting, category tracking, and visual spending analytics',
    tech: ['Next.js', 'Supabase', 'Tailwind', 'Recharts'],
    link: 'https://github.com/husTh1/Amwali-System',
  },
  {
    name: 'SQL Master Arabic',
    description:
      'Interactive Arabic platform for learning SQL, powered by a custom in-browser SQL engine built entirely from scratch',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind'],
    link: 'https://github.com/husTh1/Sql-Master-platform',
  },
  {
    name: 'Lumen Training Center',
    description:
      'Fully responsive training-academy website with a course catalog, instructor showcase, and a dedicated IELTS hub',
    tech: ['React', 'TypeScript', 'Vite', 'Framer Motion'],
    link: 'https://github.com/husTh1/Lumen-Training-Center',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-32 px-6 md:px-12 bg-navy-dark relative">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-display tracking-wide mb-4">
              Featured <span className="text-highlight">Projects</span>
            </h2>
            <p className="text-text-muted font-light max-w-xl">
              Select builds spanning healthcare, personal finance, SQL education, and digital training.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="group bg-card border border-navy-light transition-all hover:-translate-y-2 hover:border-highlight hover:shadow-[0_10px_30px_rgba(74,144,217,0.1)] relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-navy-light/40 rounded-bl-full z-0 transition-transform group-hover:scale-150 group-hover:bg-highlight/10 pointer-events-none" />

              <div className="p-8 relative z-10 flex-1 flex flex-col">
                <h3 className="text-2xl font-display tracking-wide text-text-light mb-4 leading-none">
                  {project.name}
                </h3>

                <p className="text-sm text-text-muted font-light leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={`${project.name}-${tech}`}
                      className="px-2.5 py-1.5 bg-navy-dark border border-navy-light text-[10px] uppercase tracking-[0.12em] text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center w-full px-4 py-3 bg-navy-dark text-sm font-medium text-text-light hover:text-highlight transition-colors duration-300 rounded-lg border border-navy-light hover:border-highlight"
                >
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
