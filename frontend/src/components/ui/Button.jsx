import { motion } from 'framer-motion';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = variant === 'primary' ? 'premium-button' : 'ghost-button';
  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
