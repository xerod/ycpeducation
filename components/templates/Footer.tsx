import React from "react";
import Image from "next/image";

import ContactCard from "../modules/ContactCard";

export default function Footer() {
  return (
    <>
      <div className="w-full">
        <ContactCard />
      </div>
      <div
        id="about-us"
        className="relative flex pt-52 pb-32 px-16 justify-between items-center -mt-32 bg-gray-100 overflow-hidden z-0"
      >
        <div className="relative max-w-sm z-10">
          <h1 className="text-4xl leading-10 font-bold text-gray-800">
            About Us
          </h1>

          <div className="mt-4 leading-6 text-gray-800">
            <p>
              We are a B2B camp provider based in Singapore that provides unique
              programs for travel agencies and schools looking to host camps and
              immersion courses in Singapore.
            </p>
            <p className="mt-4">
              We were previously known as SOMOS Summer Camp, after which we
              rebranded ourselves to YCP Education in 2020 to further strengthen
              our foothold in the educational services market.
            </p>
          </div>
        </div>

        <div className="relative max-w-md z-10">
          <div className="flex items-center">
            <img
              src="/about-us-1.png"
              alt="Tatsuichiro Nishimura"
              className="w-28 h-28 border-4 border-gray-50 rounded-full"
            />
            <div className="ml-6">
              <h2 className="mb-1 text-xl leading-7 font-medium text-gray-700">
                Tatsuichiro Nishimura
              </h2>
              <p className="mr-24 leading-6 text-gray-500">
                Chicago Booth MBA at Tokyo University
              </p>
            </div>
          </div>

          <div className="mt-8 flex items-center">
            <img
              src="/about-us-2.png"
              alt="Naithy Cyriac"
              className="w-28 h-28 border-4 border-gray-50 rounded-full"
            />
            <div className="ml-6">
              <h2 className="mb-1 text-xl leading-7 font-medium text-gray-700">
                Naithy Cyriac
              </h2>
              <p className="mr-20 leading-6 text-gray-500">
                Business School MBA National University of Singapore{" "}
              </p>
            </div>
          </div>
        </div>

        <Image
          layout="fill"
          src="/about-us-cover.png"
          className="absolute object-cover opacity-10 z-0"
        />

        <p className="absolute bottom-4 right-0 left-0 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} YCP Solidiance. All Rights Reserved.
        </p>
      </div>
    </>
  );
}
