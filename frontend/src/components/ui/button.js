import { motion } from 'framer-motion';

const Button = ({ children, onClick, className }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl 
      hover:from-blue-700 hover:to-purple-700 transition-all duration-300 ${className}`}
  >
    {children}
  </motion.button>
);

export default Button;
