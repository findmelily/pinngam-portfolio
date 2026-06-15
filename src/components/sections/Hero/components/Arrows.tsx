import { motion } from "framer-motion";
import arrows from "@/assets/icon-element/arrows.png";

const ArrowDown = () => {
  return (
    <div>
      <motion.div
        className="absolute m-12 flex justify-center items-center bottom-10 left-0 right-0 animate-bounce"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <img src={arrows} alt="arrows icon" className="w-12 h-12 opacity-50" />
      </motion.div>
    </div>
  );
};

export default ArrowDown;
