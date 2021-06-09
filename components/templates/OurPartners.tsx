import Image from "next/image";
import React from "react";

export default function OurPartners() {
  return (
    <div className="relative py-20 px-16 bg-gray-100">
      <p className="text-5xl leading-none font-bold text-gray-800 text-center">
        Our Partners & Clients
      </p>

      <div className="max-w-2xl mx-auto mt-11">
        <Image
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
