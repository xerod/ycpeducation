import Image from "next/image";
import React from "react";

import imageLoader from "../../utils/imageLoader";

export default function OurPartners() {
  return (
    <div className="relative px-4 py-10 bg-gray-100 lg:py-20 lg:px-10 xl:px-16">
      <p className="text-3xl font-bold leading-none text-center text-gray-800 sm:text-4xl lg:text-5xl">
        Our Partners & Clients
      </p>

      <div className="max-w-2xl mx-auto mt-11">
        <Image
          loader={imageLoader}
          width="100%"
          height="35%"
          src="/partners.png"
          layout="responsive"
          className=""
        />
      </div>
    </div>
  );
}
