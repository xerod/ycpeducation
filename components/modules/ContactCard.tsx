import React from "react";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";

export default function ContactCard() {
  return (
    <div className="relative flex py-14 px-16 mx-32 justify-between bg-gradient-to-r from-gray-900 to-gray-600 rounded-xl shadow-lg overflow-hidden z-50">
      <img src="/map-base.svg" className="absolute top-0 left-0" />
      <div className="max-w-xs text-white">
        <p className="text-sm leading-5 font-bold text-gray-400">
          GET IN TOUCH
        </p>

        <p className="mr-20 mt-2 text-2xl leading-7 font-bold">
          Please contact us for more information:{" "}
        </p>

        <div className="flex mt-4 items-center text-gray-200">
          <IoMailOutline className="h-5 w-5" />
          <p className="ml-2 leading-6 font-medium">education@ycp.com</p>
        </div>

        <div className="flex mt-1 items-center text-gray-200">
          <IoCallOutline className="h-5 w-5" />
          <p className="ml-2 leading-6 font-medium">+65 6910 2604 </p>
        </div>
      </div>

      <div className="flex flex-col justify-end pl-32 max-w-xs text-white text-right">
        <p className="text-lg leading-5 font-bold">
          YCP Education Singapore Pte Ltd
        </p>

        <p className="mt-2 leading-5 font-medium">
          5 Temasek Boulevard, #11-02, Suntec Tower Five, Singapore 038985
        </p>
      </div>
    </div>
  );
}
