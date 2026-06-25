import { motion } from "framer-motion";
import type { CardProps } from "@/types";

const Card = ({ imageSrc, altText, title, description }: CardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white flex h-full w-full flex-col overflow-hidden rounded-xl bg-clip-border shadow-md hover:shadow-xl transition-shadow duration-500"
    >
      <div className="relative m-0 overflow-hidden shrink-0 bg-transparent rounded-none shadow-none bg-clip-border">
        <img src={imageSrc} alt={altText} className="w-full h-40 md:h-48 object-cover" />
      </div>
      <div className="p-5 md:p-7 flex flex-col flex-1">
        <h4 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight mb-3">
          {title}
        </h4>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
