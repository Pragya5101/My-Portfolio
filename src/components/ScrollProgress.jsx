import { motion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-accent-cyan z-50 origin-left w-full"
      style={{ scaleX: progress / 100 }}
    />
  );
}
