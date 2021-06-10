import React from "react";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";

export default function ContactCard() {
  return (
    <div className="relative z-10 flex justify-between px-4 overflow-hidden shadow-xl lg:px-10 xl:px-16 py-14 lg:mx-32 bg-gradient-to-r from-gray-900 to-gray-600 lg:rounded-xl">
      <div className="relative z-10 max-w-lg text-white lg:max-w-xs">
        <p className="text-sm font-bold leading-5 text-gray-400">
          GET IN TOUCH
        </p>

        <p className="mt-2 text-2xl font-bold leading-7 lg:mr-20">
          Please contact us for more information:{" "}
        </p>

        <div className="flex items-center mt-4 text-gray-200">
          <IoMailOutline className="w-5 h-5" />
          <p className="ml-2 font-medium leading-6">education@ycp.com</p>
        </div>

        <div className="flex items-center mt-1 text-gray-200">
          <IoCallOutline className="w-5 h-5" />
          <p className="ml-2 font-medium leading-6">+65 6910 2604 </p>
        </div>
      </div>

      <div className="relative z-10 flex-col justify-end hidden max-w-xs pl-32 text-right text-white lg:flex">
        <p className="text-lg font-bold leading-5">
          YCP Education Singapore Pte Ltd
        </p>

        <p className="mt-2 font-medium leading-5">
          5 Temasek Boulevard, #11-02, Suntec Tower Five, Singapore 038985
        </p>
      </div>

      <img src="/map-base.svg" className="absolute top-0 left-0 z-0" />
    </div>
  );
}
