import { motion } from "framer-motion";

export default function TestMotion() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ padding: 20, background: "#333", color: "#fff", borderRadius: 8 }}
    >
      Hello, Framer Motion!
    </motion.div>
  );
}
