import React from "react";
import Image from "next/image";

import imageLoader from "../../utils/imageLoader";

import ContactCard from "../modules/ContactCard";

export default function Footer() {
  return (
    <>
      <div className="w-full">
        <ContactCard />
      </div>
      <div
        id="about-us"
        className="relative z-0 flex flex-col items-center justify-between px-4 pb-20 -mt-32 overflow-hidden bg-gray-100 lg:pb-32 lg:flex-row pt-52 lg:px-10 xl:px-16"
      >
        <div className="relative z-10 w-full mb-8 lg:max-w-sm lg:mb-0">
          <h1 className="text-4xl font-bold leading-10 text-gray-800">
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

        <div className="relative z-10 w-full lg:max-w-md">
          <div className="flex items-center">
            <Image
              loader={imageLoader}
              width="100%"
              height="100%"
              src="/about-us-1.png"
              alt="Tatsuichiro Nishimura"
              className="border-4 rounded-full w-28 h-28 border-gray-50"
            />
            <div className="ml-6">
              <h2 className="mb-1 text-xl font-medium leading-7 text-gray-700">
                Tatsuichiro Nishimura
              </h2>
              <p className="mr-24 leading-6 text-gray-500">
                Chicago Booth MBA at Tokyo University
              </p>
            </div>
          </div>

          <div className="flex items-center mt-8">
            <Image
              loader={imageLoader}
              width="100%"
              height="100%"
              src="/about-us-2.png"
              alt="Naithy Cyriac"
              className="border-4 rounded-full w-28 h-28 border-gray-50"
            />
            <div className="ml-6">
              <h2 className="mb-1 text-xl font-medium leading-7 text-gray-700">
                Naithy Cyriac
              </h2>
              <p className="mr-20 leading-6 text-gray-500">
                Business School MBA National University of Singapore{" "}
              </p>
            </div>
          </div>
        </div>

        <Image
          loader={imageLoader}
          layout="fill"
          src="/about-us-cover.png"
          className="absolute z-0 object-cover opacity-10"
          alt="A Skyline of Hong Kong"
        />

        <p className="absolute left-0 right-0 text-sm text-center text-gray-500 bottom-4">
          © {new Date().getFullYear()} YCP Solidiance. All Rights Reserved.
        </p>
      </div>
    </>
  );
}
