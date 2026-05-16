import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.16l-1.94 9.12c-.14.65-.54.81-1.08.51l-3-2.21-1.45 1.4c-.16.16-.29.29-.6.29l.21-3.05 5.56-5.02c.24-.22-.05-.34-.38-.11l-6.87 4.33-2.96-.92c-.64-.2-.65-.64.13-.95l11.56-4.46c.54-.2.99.12.82.97z" />
  </svg>
);

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="pt-32 bg-navy relative border-t border-navy-light flex flex-col">
      <div className="max-w-4xl mx-auto px-6 md:px-12 w-full flex-1" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-display tracking-wide mb-8">
            Let's <span className="text-highlight relative">
              <span className="relative z-10">Connect</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-highlight/20 -z-0"></span>
            </span>
          </h2>
          <p className="text-text-muted font-light max-w-xl mx-auto text-lg">
            Ready to architect something exceptional? My inbox is always open 
            for new opportunities, collaborations, or technical discourse.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-8 mb-32"
        >
          <a href="mailto:ha3140465@gmail.com" className="flex flex-col items-center p-8 bg-card border border-navy-light hover:border-highlight group transition-all hover:-translate-y-2">
            <div className="w-12 h-12 bg-navy-dark rounded-full flex items-center justify-center mb-6 group-hover:bg-highlight/10 transition-colors">
              <Mail className="text-text-muted group-hover:text-highlight transition-colors" />
            </div>
            <span className="text-sm font-medium tracking-wide text-text-light mb-2">EMAIL</span>
            <span className="text-sm text-text-muted font-light group-hover:text-white transition-colors">ha3140465@gmail.com</span>
          </a>

          <a href="tel:+9647748160196" className="flex flex-col items-center p-8 bg-card border border-navy-light hover:border-highlight group transition-all hover:-translate-y-2">
            <div className="w-12 h-12 bg-navy-dark rounded-full flex items-center justify-center mb-6 group-hover:bg-highlight/10 transition-colors">
              <Phone className="text-text-muted group-hover:text-highlight transition-colors" />
            </div>
            <span className="text-sm font-medium tracking-wide text-text-light mb-2">PHONE</span>
            <span className="text-sm text-text-muted font-light group-hover:text-white transition-colors" dir="ltr">+964 7748160196</span>
          </a>

          <div className="flex flex-col items-center p-8 bg-card border border-navy-light hover:border-highlight group transition-all hover:-translate-y-2">
            <div className="w-12 h-12 bg-navy-dark rounded-full flex items-center justify-center mb-6 group-hover:bg-highlight/10 transition-colors">
              <MapPin className="text-text-muted group-hover:text-highlight transition-colors" />
            </div>
            <span className="text-sm font-medium tracking-wide text-text-light mb-2">LOCATION</span>
            <span className="text-sm text-text-muted font-light group-hover:text-white transition-colors">Al-Aziziya, Iraq</span>
          </div>
        </motion.div>
      </div>

      <footer className="w-full border-t border-navy-light bg-navy-dark py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center gap-6">
          <a href="https://www.instagram.com/1husth" target="_blank" rel="noreferrer" className="text-text-muted   hover:text-highlight transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://wa.me/9647748160196" target="_blank" rel="noreferrer" className="text-text-muted hover:text-highlight transition-colors" aria-label="WhatsApp">
              <WhatsAppIcon className="w-5 h-5" />
            </a>
            <a href="https://www.tiktok.com/@husth1" target="_blank" rel="noreferrer" className="text-text-muted hover:text-highlight transition-colors" aria-label="TikTok">
              <TikTokIcon className="w-5 h-5" />
            </a>
            <a href="https://t.me/husTh1" target="_blank" rel="noreferrer" className="text-text-muted hover:text-highlight transition-colors" aria-label="Telegram">
              <TelegramIcon className="w-5 h-5" />
            </a>
          </div>
          <div className="text-sm text-text-muted font-light tracking-wide flex items-center gap-2">
            <span>&copy; {currentYear}</span>
            <span className="font-display tracking-widest uppercase text-text-light">Hussein Mohammed</span>
            <span className="opacity-50">|</span> 
            <span>All rights reserved.</span>
          </div>
        </div>
      </footer>
    </section>
  );
}
