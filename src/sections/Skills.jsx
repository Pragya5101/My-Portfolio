import Section from '../components/Section';
import { motion } from 'framer-motion';
import { Code2, Server, Brain, Wrench, ShieldCheck } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['HTML', 'CSS', 'JavaScript', 'React (Vite)', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'Data & ML',
    icon: Brain,
    skills: ['Python', 'Pandas', 'Scikit-Learn','NumPy','Matplotlib', 'OpenCV']
  },
  {
    title: 'Testing & Automation',
    icon: ShieldCheck,
    skills: ['Playwright', 
      'Postman', 
      'API Testing', 
      'Test Automation',
    ]
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Git', 'Vercel','Power BI', 'Excel','Cursor']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Skills() {
  return (
    <Section id="skills" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="mb-16 md:mb-24 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-slate-50">
          My <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          I've worked with a variety of technologies across the web development and data science spectrum.
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {skillCategories.map((category) => (
          <motion.div 
            key={category.title}
            variants={itemVariants}
            className="glass rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-14 h-14 bg-primary-100 dark:bg-slate-800 text-primary-600 dark:text-primary-400 rounded-xl flex items-center justify-center mb-6">
              <category.icon size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-100">
              {category.title}
            </h3>
            <ul className="space-y-3">
              {category.skills.map(skill => (
                <li key={skill} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-medium">
                  <div className="w-2 h-2 rounded-full bg-primary-400 dark:bg-primary-500" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
