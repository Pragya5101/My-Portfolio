import Section from '../components/Section';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    role: "Automation Engineer Intern",
    company: "HeyEV!",
    duration: "Sep 2025 - Dec 2025",
    description: "Translated business requirements into 50+ functional, regression, and API test cases, improving test coverage and release reliability.Automated workflows using Playwright and validated APIs with Postman, reducing manual regression effort by 40%."
  },
  {
    id: 2,
    role: "Data Analyst Intern",
    company: "CreArt Solutions Pvt. Ltd",
    duration: "July 2025 - July 2025",
    description: "Built an interactive Power BI dashboard to analyze business data, uncover trends, and deliver actionable insights using DAX and data visualization."
  },

];

export default function Experience() {
  return (
    <Section id="experience" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="mb-16 md:mb-24 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-slate-50">
          Professional <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          My journey in the tech industry so far.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-8 md:pl-0"
          >
            <div className="md:flex items-center justify-between mb-8 md:mb-12 group">
              
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-slate-50 dark:border-slate-900 md:-translate-x-1/2 mt-1.5 md:mt-0 z-10 shadow-sm" />
              
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-2 md:left-1/2 top-4 bottom-[-4rem] md:bottom-[-5rem] w-0.5 bg-slate-200 dark:bg-slate-800 md:-translate-x-1/2 z-0" />
              )}

              <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1">{exp.role}</h3>
                <h4 className="text-primary-600 dark:text-primary-400 font-medium mb-3">{exp.company}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>
              </div>

              <div className={`md:w-5/12 mt-2 md:mt-0 ${index % 2 === 0 ? 'md:order-2 md:pl-12' : 'md:text-left md:pr-12'}`}>
                <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium">
                  {exp.duration}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
