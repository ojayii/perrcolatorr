// components/PageWrapper.jsx
import { motion } from "framer-motion";

// const pageVariants = {
//   initial: { opacity: 0, x: -20 },
//   animate: { opacity: 1, x: 0, transition: { duration: 0.2 } },
//   exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
// };

const pageVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, scale: 1.1, transition: { duration: 0.2 } },
};

export default function PageWrapper({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
