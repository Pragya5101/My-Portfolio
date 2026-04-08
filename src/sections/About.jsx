import Section from '../components/Section';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <Section id="about">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/3 relative"
        >
          <div className="aspect-square relative rounded-3xl overflow-hidden glass shadow-soft mx-auto max-w-[300px]">
            <img 
              src="src\assets\WhatsApp Image 2026-04-07 at 11.13.50 PM.jpeg" 
              alt="Profile" 
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-200 to-transparent dark:from-primary-900/50 -z-10 rounded-full blur-2xl" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-2/3"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 text-slate-900 dark:text-slate-50">
            About <span className="text-gradient">Me</span>
          </h2>
          
          <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400">
            <p>
I’m a developer focused on building high-impact digital experiences and intelligent systems. With a blend of frontend engineering and machine learning, I work at the intersection of user experience and data-driven decision making            </p>
            <p>
I’ve built projects ranging from responsive web applications to deep learning systems for medical image analysis. My work reflects a strong emphasis on performance, scalability, and real-world usability.            </p>
            <p>
I thrive in environments that challenge me to think deeply, build fast, and continuously learn.            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
