import { motion } from 'framer-motion';

const Card = ({ children, className }) => (
  <motion.div 
    initial={{ scale: 0.95, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.02 }}
    className={`bg-white rounded-xl shadow-2xl transform transition-all duration-300 hover:shadow-xl ${className}`}
  >
    {children}
  </motion.div>
);

export default Card;
