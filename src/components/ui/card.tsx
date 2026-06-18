import type { CardProps } from "@/types";

const Card = ({ imageSrc, altText, title, description }: CardProps) => {
  return (
    <div className="bg-white flex h-full w-full flex-col overflow-hidden rounded-xl bg-clip-border shadow-md transition ease-in duration-500 transform hover:scale-105">
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
    </div>
  );
};

export default Card;
