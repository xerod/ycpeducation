import React from "react";
import Image from "next/image";

import ContactCard from "../modules/ContactCard";

export default function Footer() {
  return (
    <>
      <div className="w-full">
        <ContactCard />
      </div>
      <div className="relative flex py-32 px-16 justify-between -mt-16 bg-gray-100 overflow-hidden z-0">
        <div className="max-w-sm prose">
          <h1 className="text-gray-800 leading-3">About Us</h1>
          <p>
            We are a B2B camp provider based in Singapore that provides unique
            programs for travel agencies and schools looking to host camps and
            immersion courses in Singapore.
          </p>
          <p>
            We were previously known as SOMOS Summer Camp, after which we
            rebranded ourselves to YCP Education in 2020 to further strengthen
            our foothold in the educational services market.
          </p>
        </div>

        <div className="prose max-w-sm">
          <div className="flex items-center">
            <img
              src="/about-us-1.png"
              alt="Tatsuichiro Nishimura"
              className="w-24 h-24 border-4 border-gray-50 rounded-full"
            />
            <div className="ml-6">
              <h2 className="mt-4 mb-1">Tatsuichiro Nishimura</h2>
              <p className="leading-5 text-gray-500">
                Chicago Booth MBA at Tokyo University
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="/about-us-2.png"
              alt="Naithy Cyriac"
              className="w-24 h-24 border-4 border-gray-50 rounded-full"
            />
            <div className="ml-6">
              <h2 className="mt-4 mb-1">Naithy Cyriac</h2>
              <p className=" text-lg leading-5 text-gray-500">
                Business School MBA National University of Singapore{" "}
              </p>
            </div>
          </div>
        </div>

        <Image
          layout="fill"
          src="/about-us-cover.jpg"
          className="object-cover opacity-10"
        />
      </div>
    </>
  );
}
