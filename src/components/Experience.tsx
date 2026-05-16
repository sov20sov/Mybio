import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const EXPERIENCES = [
  {
    role: "Founder & Brand Strategist",
    company: "Al-Muharrir",
    date: "2026 - Present",
    points: [
      "Designed a comprehensive content roadmap using a modern minimalist aesthetic to build brand authority",
      "Curated professional design assets and editorial guidelines for digital presence"
    ]
  },
  {
    role: "Full-Stack Developer",
    company: "Hospital Management System",
    date: "2026 - Present",
    points: [
      "Implemented secure authentication logic and managed complex database structures",
      "Troubleshot and optimized repository layers and API controllers to ensure seamless system performance"
    ]
  }
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 px-6 md:px-12 bg-navy-dark relative z-10">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display tracking-wide mb-4">Professional <span className="text-highlight">Timeline</span></h2>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-navy-light before:to-transparent">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline marker */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-navy-dark bg-card shrink-0 md:order-1 md:left-1/2 md:-translate-x-1/2 absolute z-10 transition-colors group-hover:bg-highlight group-hover:border-highlight group-hover:shadow-[0_0_15px_rgba(74,144,217,0.5)]">
                <div className="w-2 h-2 rounded-full bg-highlight group-hover:bg-white transition-colors" />
              </div>

              {/* Card content */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] pl-8 md:pl-0">
                <div className="bg-card border-l-4 border-l-highlight border-y border-r border-navy-light p-6 sm:p-8 transition-transform hover:-translate-y-2 hover:shadow-[10px_10px_0_rgba(74,144,217,0.1)] duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                    <h3 className="text-xl font-medium tracking-tight text-text-light">{exp.role}</h3>
                    <span className="text-xs font-bold tracking-widest text-highlight uppercase px-2 py-1 bg-navy-dark/50 whitespace-nowrap">
                      {exp.date}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold tracking-wider text-text-muted mb-6 uppercase">
                    {exp.company}
                  </h4>
                  <ul className="space-y-3">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-sm text-text-muted font-light leading-relaxed flex items-start">
                        <span className="mr-3 text-highlight mt-1 opacity-50">▹</span>
                        <span className="flex-1">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
