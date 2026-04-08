import { motion } from 'framer-motion';

export default function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`py-20 md:py-32 outline-none ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12"
      >
        {children}
      </motion.div>
    </section>
  );
}
