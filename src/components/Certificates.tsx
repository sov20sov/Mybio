import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, Globe } from 'lucide-react';

const CERTIFICATES = [
  {
    title: "One Million AI Experts Certificate",
    issuer: "United Arab Emirates",
    flag: "🇦🇪",
    image: "/images/USA.jpg"
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "Hashemite Kingdom of Jordan",
    flag: "🇯🇴",
    image: "/images/JORDN.jpg"
  },

  {
  title: "شهادة إتمام دورة تدريبية في التجارة الإلكترونية والدخل الرقمي وريادة الأعمال",
  issuer: "Elite Training and Development Team",
  flag: "IQ",
  image: "/images/NEW.jpg"
}

];

export default function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificates" className="py-32 px-6 md:px-12 bg-navy-dark relative">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-display tracking-wide mb-4">Credentials & <span className="text-highlight">Honors</span></h2>
            <p className="text-text-muted font-light max-w-xl">
              International recognitions and specialized training in advanced computing disciplines.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {CERTIFICATES.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="group bg-card border border-navy-light transition-all hover:-translate-y-2 hover:border-highlight hover:shadow-[0_10px_30px_rgba(74,144,217,0.1)] relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-navy-light/40 rounded-bl-full z-0 transition-transform group-hover:scale-150 group-hover:bg-highlight/10 pointer-events-none" />
              
              {/* Certificate Image Space */}
              <div className="w-full h-48 md:h-56 bg-navy-light relative overflow-hidden border-b border-navy-light/50 shrink-0">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60 pointer-events-none" />
              </div>
              
              <div className="p-8 relative z-10 flex-1 flex flex-col">
                <Award className="w-8 h-8 text-highlight mb-4 shrink-0" />
                
                <h3 className="text-xl font-medium text-text-light leading-snug mb-6 flex-1">
                  {cert.title}
                </h3>
                
                <div className="flex items-center justify-between border-t border-navy-light pt-6 mt-auto shrink-0">
                  <div className="flex items-center gap-2 text-sm text-text-muted uppercase tracking-wider font-semibold">
                    <span className="text-2xl" role="img" aria-label={`Flag of ${cert.issuer}`}>{cert.flag}</span>
                    {cert.issuer}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
