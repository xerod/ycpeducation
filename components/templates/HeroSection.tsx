import React from "react";
import { Button } from "@windmill/react-ui";
import SectionOverflow from "../elements/SectionOverflow";
import { IoArrowForwardOutline } from "react-icons/io5";
import Image from "next/image";

import scrollTo from "../../utils/scrollTo";
import imageLoader from "../../utils/imageLoader";

export default function HeroSection() {
  return (
    <div id="hero-section" className="relative overflow-hidden bg-amber-800">
      <Image
        loader={imageLoader}
        layout="fill"
        src="/image5.jpg"
        alt="Kids Learning"
        className="absolute top-0 left-0 right-0 z-0 object-cover min-h-screen bg-mask-b-0"
      />

      <div className="relative z-10 flex items-center justify-start px-4 py-32 xl:min-h-screen lg:mx-10 xl:mx-16">
        <div className="flex flex-col items-start justify-center max-w-sm text-left md:max-w-2xl lg:max-w-3xl text-orange-50">
          <p className="hidden mb-1 text-6xl font-extrabold leading-none lg:block">
            An Education Provider with Unique 21st Century Camp Programs
          </p>

          <p className="block mb-1 text-5xl font-bold leading-none lg:hidden md:max-w-xl lg:max-w-full">
            A Unique 21st Century Camp Programs
          </p>

          <p className="mt-2 mb-10 text-lg font-normal leading-5 lg:max-w-lg sm:mt-4 lg:mt-0 lg:leading-7 lg:font-medium">
            Customize a camp program that will effectively equip your students
            with a global perspective and the skills to succeed!
          </p>

          <Button
            iconRight={IoArrowForwardOutline}
            onClick={() => scrollTo("contact-us")}
            className="flex max-w-min whitespace-nowrap"
          >
            Contact Us
          </Button>
        </div>
      </div>
      <SectionOverflow className="absolute bottom-0 w-auto text-orange-50" />
    </div>
  );
}
