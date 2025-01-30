import { motion } from 'framer-motion';

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden z-0">
    {[...Array(10)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-gradient-to-r from-purple-100 to-blue-100 rounded-full blur-lg"
        initial={{ scale: 0, x: Math.random() * 100 - 50, y: Math.random() * 100 - 50, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3, x: Math.random() * 100 - 50, y: Math.random() * 100 - 50 }}
        transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, repeatType: 'reverse' }}
        style={{ width: `${Math.random() * 50 + 20}px`, height: `${Math.random() * 50 + 20}px` }}
      />
    ))}
  </div>
);

export default AnimatedBackground;
