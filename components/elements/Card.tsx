import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  body: string;
  image?: string;
  variant?: string;
}

const Card: React.FC<CardProps> = ({ title, body, image, variant }) => {
  return (
    <div className="flex flex-col max-w-xl bg-white shadow-md rounded-xl overflow-hidden">
      {image ? (
        <Image
          width="100%"
          height="60%"
          layout="responsive"
          className="w-full object-cover"
          src={image}
        />
      ) : null}

      <div className="p-6 text-gray-600">
        <p className="mb-2 mr-12 text-2xl font-bold leading-7">{title}</p>
        <p className="text-gray-500">{body}</p>
      </div>
    </div>
  );
};

export default Card;
