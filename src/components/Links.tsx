import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Globe, Download, FileText, Video, Share2, Wrench, ExternalLink } from 'lucide-react';

type LinkType = 'website' | 'download' | 'document' | 'video' | 'social' | 'tool';

interface LinkItem {
  id: string;
  name: string;
  url: string;
  type: LinkType;
}

const STATIC_LINKS: LinkItem[] = [
  {
    id: 'link_1',
    name: 'برومبتات ترند الاطفال',
    url: 'https://docs.google.com/document/d/1RuFo0jxOEnGAEDs4NufN5boySWRymyDIq71RxrJg26Y/edit?usp=sharing',
    type: 'document'
  },
  {
    id: 'link_2',
    name: 'بوت معالجة الصور',
    url: 'https://t.me/imagehighqualitybot',
    type: 'document'
  }
];

const TYPE_CONFIG = {
  website: { icon: Globe, label: 'Website' },
  download: { icon: Download, label: 'Download' },
  document: { icon: FileText, label: 'Document' },
  video: { icon: Video, label: 'Video' },
  social: { icon: Share2, label: 'Social Media' },
  tool: { icon: Wrench, label: 'Tool / App' },
};

export default function Links() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getDomain = (url: string) => {
    try {
      if (url.startsWith('mailto:')) return 'Email';
      if (url.startsWith('tel:')) return 'Phone';
      if (url === '#' || url.startsWith('/')) return 'Local File';
      const domain = new URL(url).hostname;
      return domain.replace('www.', '');
    } catch (e) {
      return url;
    }
  };

  return (
    <section id="links" className="py-32 px-6 md:px-12 bg-navy-dark relative border-y border-navy-light">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-display tracking-wide mb-4">
              Quick <span className="text-highlight">Access</span>
            </h2>
            <p className="text-text-muted font-light max-w-xl">
              Curated links, resources, and downloads.
            </p>
          </div>
        </motion.div>

        {STATIC_LINKS.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="flex flex-col items-center justify-center p-16 border border-dashed border-navy-light rounded-xl text-text-muted"
          >
            <Globe className="w-12 h-12 mb-4 opacity-50 text-highlight" />
            <p>Check back later for links and resources!</p>
          </motion.div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {STATIC_LINKS.map((link, index) => {
              const Icon = TYPE_CONFIG[link.type].icon;
              const isDownload = link.type === 'download';
              
              return (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group relative bg-card border-l-4 border-l-highlight rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(74,144,217,0.3)] flex flex-col"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-navy-dark rounded-lg text-highlight">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 overflow-hidden pr-6">
                       <h3 className="text-lg font-medium text-text-light truncate">{link.name}</h3>
                       <p className="text-sm text-text-muted truncate">{getDomain(link.url)}</p>
                    </div>
                  </div>

                  <a
                    href={link.url}
                    target={link.url !== '#' ? "_blank" : undefined}
                    rel={link.url !== '#' ? "noopener noreferrer" : undefined}
                    download={isDownload ? '' : undefined}
                    className="mt-auto inline-flex items-center justify-between w-full px-4 py-3 bg-navy-dark text-sm font-medium text-text-light hover:text-highlight transition-colors duration-300 rounded-lg cursor-none"
                  >
                    {isDownload ? 'Download' : 'Visit'}
                    {isDownload ? <Download className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
