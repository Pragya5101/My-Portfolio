import { motion } from 'framer-motion';
import { Download, ArrowRight, Mail } from 'lucide-react';

const GithubIcon = () => (
  <a 
    href="https://github.com/Pragya5101" 
    target="_blank" 
    rel="noopener noreferrer"
  >
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.3 6-1.5 6-6.76a5.2 5.2 0 0 0-1.4-3.5 4.8 4.8 0 0 0-.1-3.5s-1.1-.3-3.6 1.4a12.8 12.8 0 0 0-6.8 0c-2.5-1.7-3.6-1.4-3.6-1.4a4.8 4.8 0 0 0-.1 3.5 5.2 5.2 0 0 0-1.4 3.5c0 5.26 3 6.46 6 6.76a4.8 4.8 0 0 0-1 3.24v4"></path>
  </svg>
  </a>
);

const LinkedinIcon = () => (
  <a 
    href="https://www.linkedin.com/in/pragyakumari958" 
    target="_blank" 
    rel="noopener noreferrer"
  >
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
  </a>
);

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-100 via-slate-50 to-slate-50 dark:from-slate-800 dark:via-slate-950 dark:to-slate-950 -z-10" />
      
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Hi, I'm <span className="text-gradient">Pragya Kumari</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4 font-medium"
        >
          Software Developer | Building Scalable, Intelligent & Reliable Systems
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10"
        >
I build scalable, high-impact systems at the intersection of web, data, and machine learning—driven by performance, quality, and real-world application.        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-medium transition-colors w-full sm:w-auto justify-center"
          >
            View Projects
            <ArrowRight size={18} />
          </a>
          <a
            href="/resume.pdf"
            download="Pragya_Kumari_Resume.pdf"
            className="flex items-center gap-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700 px-8 py-3 rounded-full font-medium shadow-sm transition-colors border border-slate-200 dark:border-slate-700 w-full sm:w-auto justify-center"
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-6"
        >
          <a href="#" className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm hover:shadow-md transition-shadow text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400">
            <GithubIcon />
          </a>
          <a href="#" className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm hover:shadow-md transition-shadow text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400">
            <LinkedinIcon />
          </a>
          <a href="#contact" className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm hover:shadow-md transition-shadow text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400">
            <Mail size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
