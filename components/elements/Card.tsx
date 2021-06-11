import React from "react";
import Image from "next/image";

import imageLoader from "../../utils/imageLoader";

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
      <div className="relative w-full overflow-hidden shadow-xl lg:max-w-xl rounded-xl bg-amber-800">
        {image ? (
          <Image
            loader={imageLoader}
            width="100%"
            height="60%"
            layout="responsive"
            className="absolute top-0 object-cover w-full bg-mask-b-0 "
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
    <div className="flex flex-col max-w-xl overflow-hidden bg-white shadow-md lg:rounded-xl">
      {image ? (
        <Image
          loader={imageLoader}
          width="100%"
          height="60%"
          layout="responsive"
          className="object-cover w-full"
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
