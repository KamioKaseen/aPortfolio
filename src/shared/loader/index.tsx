import { motion } from "framer-motion";

const Loader: React.FC = () => {
    return (
      <motion.div
        className="loader-overlay"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="spinner" />
      </motion.div>
    );
  };
  
export default Loader;