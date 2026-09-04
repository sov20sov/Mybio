import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Certificates', 'Contact'];
const CV_PATH = '/assets/cv/Hussein-Mohammed-CV.pdf';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', ...NAV_LINKS.map(l => l.toLowerCase())];
      let current = '';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= (el.offsetTop - 200)) {
          current = section;
        }
      }
      if (current) {
        setActiveSection(current.charAt(0).toUpperCase() + current.slice(1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-dark/80 backdrop-blur-md py-4 shadow-lg shadow-navy/20' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          className="text-2xl font-display tracking-widest text-text-light hover:text-highlight transition-colors cursor-pointer"
        >
          HM<span className="text-highlight">.</span>
        </a>
        
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, link.toLowerCase())}
              className={`text-sm font-medium transition-colors hover:text-highlight cursor-pointer ${
                activeSection === link ? 'text-highlight' : 'text-text-muted'
              }`}
            >
              {link}
            </a>
          ))}
          <a
            href={CV_PATH}
            download="Hussein-Mohammed-CV.pdf"
            className="inline-flex items-center gap-2 rounded-md border border-highlight px-3 py-2 text-xs font-medium text-highlight transition-all hover:bg-highlight hover:text-white hover:shadow-[0_0_18px_rgba(74,144,217,0.45)] lg:px-4 lg:text-sm"
          >
            <Download size={16} aria-hidden="true" />
            Download CV
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden text-text-light hover:text-highlight transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-navy-dark border-b border-navy-light shadow-xl"
        >
          <div className="flex flex-col py-4 px-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, link.toLowerCase())}
                className={`text-lg font-medium transition-colors hover:text-highlight cursor-pointer ${
                  activeSection === link ? 'text-highlight' : 'text-text-muted'
                }`}
              >
                {link}
              </a>
            ))}
            <a
              href={CV_PATH}
              download="Hussein-Mohammed-CV.pdf"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-highlight px-4 py-3 text-lg font-medium text-highlight transition-all hover:bg-highlight hover:text-white hover:shadow-[0_0_18px_rgba(74,144,217,0.45)]"
            >
              <Download size={18} aria-hidden="true" />
              Download CV
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
