import { useState } from 'react';
import Section from '../components/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.3 6-1.5 6-6.76a5.2 5.2 0 0 0-1.4-3.5 4.8 4.8 0 0 0-.1-3.5s-1.1-.3-3.6 1.4a12.8 12.8 0 0 0-6.8 0c-2.5-1.7-3.6-1.4-3.6-1.4a4.8 4.8 0 0 0-.1 3.5 5.2 5.2 0 0 0-1.4 3.5c0 5.26 3 6.46 6 6.76a4.8 4.8 0 0 0-1 3.24v4"></path>
  </svg>
);

const projectsData = [
  {
    id: 1,
    title: 'Finance Dashboard',
    description: 'A comprehensive finance tracking application with real-time data visualization, historical trend analysis, and interactive charts. Handles dynamic theming and seamless local state management.',
    tech: ['React', 'Tailwind CSS', 'Recharts'],
    category: 'Frontend',
    demoUrl: 'https://finance-dashboard-sfob.vercel.app/',
    githubUrl: 'https://github.com/Pragya5101/Finance_Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    featured: false
  },
  {
    id: 2,
    title: 'Sales Insight Dashboard',
    description: 'Built an interactive Power BI dashboard to analyze business data, uncover trends, and deliver actionable insights using DAX and data visualization.',
    tech: ['PowerBI','Power Query','MySQL'],
    category: 'Data Analytics',
    githubUrl: 'https://github.com/Pragya5101/sales-insight-analysis-dashboard',
    image: 'src/assets/dashboard-power-bi.png',
    featured: false
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Architected a high-performance, production-grade portfolio with a scalable, component-driven structure, delivering fast load times and optimized rendering. Crafted a premium user experience through sophisticated animations and seamless dark mode support, ensuring fluid, responsive interactions across all devices.',
    tech: ['Vite', 'React', 'Framer Motion','Tailwind CSS'],
    category: 'Frontend',
    demoUrl: 'https://my-portfolio-ten-henna-ctrtbp1qsq.vercel.app/',
    githubUrl: 'https://github.com/Pragya5101/My-Portfolio',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    featured: false
  },
  {
    id: 4,
    title: 'Automated Cardiac Thrombus Detector',
    description: 'Engineered an end-to-end AI-driven solution for precise detection and localization of intracardiac thrombus from LGE-MRI, leveraging advanced 3D deep learning architectures.',
    tech: ['Python','Tensorflow','Keras','OpenCV','Flask','NumPy','Matplotlib'],
    category: 'ML',
    demoUrl: '#',
    githubUrl: '#',
    image: 'src/assets/cardiac thromus.jpg',
    featured: false
    
  }

];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  
  const filteredProjects = projectsData.filter(project => 
    filter === 'All' ? true : project.category === filter
  );

  return (
    <Section id="projects">
      <div className="mb-12 md:mb-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-slate-50">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          A selection of my recent work in web development, machine learning and data analytics.
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-12">
        {['All', 'Frontend', 'ML', 'Data Analytics'].map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              filter === category 
                ? 'bg-primary-600 text-white' 
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-sm'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className={`group flex flex-col glass rounded-2xl overflow-hidden shadow-soft hover:shadow-lg dark:hover:shadow-soft-dark transition-all duration-300 ${project.featured ? 'md:col-span-2 md:flex-row' : ''}`}
            >
              <div className={`relative overflow-hidden ${project.featured ? 'md:w-1/2' : 'h-64'}`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500"/>
              </div>
              
              <div className={`p-8 flex flex-col justify-center ${project.featured ? 'md:w-1/2' : 'flex-1'}`}>
                <h3 className="text-2xl font-bold mb-3 text-slate-800 dark:text-slate-100">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 border-t border-slate-100 dark:border-slate-800 pt-6">
                  {project.demoUrl && (
                    <a href={project.demoUrl} className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
                      <GithubIcon />
                      Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
