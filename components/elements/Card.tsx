import React from "react";
import Image from "next/image";

type CardVariant = "transparent" | "cover";

interface CardProps {
  title: string;
  body?: string;
  image?: string;
  variant?: CardVariant;
  icon?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, body, image, variant, icon }) => {
  if (variant === "cover") {
    return (
      <div className="relative max-w-xl rounded-xl bg-amber-800 shadow-xl overflow-hidden">
        {image ? (
          <Image
            width="100%"
            height="60%"
            layout="responsive"
            className="absolute top-0 w-full object-cover bg-mask-b-0 "
            src={image}
          />
        ) : null}
        <div className="absolute bottom-0 p-8 text-white">
          <div className="mb-4">{icon ? icon : null}</div>
          <p className="mb-2 text-2xl font-semibold leading-7">{title}</p>
          <p className="text-gray-500">{body}</p>
        </div>
      </div>
    );
  }

  if (variant === "transparent") {
    return (
      <div className="flex flex-col max-w-xl overflow-hidden">
        <div className="text-amber-700">
          <div className="mb-4">{icon ? icon : null}</div>
          <p className="mb-2 mr-24 text-xl font-semibold leading-7">{title}</p>
          <p className="text-gray-500">{body}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col max-w-xl bg-white shadow-md lg:rounded-xl overflow-hidden">
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
