import React from "react";

const Card = ({ imageSrc, altText, title, description }) => {
  return (
    <div className="flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-clip-border shadow-md m-2  transition ease-in duration-500 transform hover:scale-105">
      <div className="relative m-0 overflow-hidden bg-transparent rounded-none shadow-none bg-clip-border">
        <img src={imageSrc} alt={altText} className="w-full" />
      </div>
      <div className="p-6">
        <h4 className="block text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {title}
        </h4>
        <p className="block mt-3 text-xl antialiased font-normal leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
