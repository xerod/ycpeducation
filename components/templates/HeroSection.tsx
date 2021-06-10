import React from "react";
import { Button } from "@windmill/react-ui";
import SectionOverflow from "../elements/SectionOverflow";
import { IoArrowForwardOutline, IoCallSharp } from "react-icons/io5";
import scrollTo from "../../utils/scrollTo";

export default function HeroSection() {
  return (
    <div id="hero-section" className="relative overflow-hidden">
      <img
        src="image5.jpg"
        alt="Kids Learning"
        className="absolute min-h-screen object-cover top-0 left-0 right-0 z-0"
      />
      <div className="relative flex min-h-screen lg:mx-10 xl:mx-16 items-center justify-center lg:justify-start z-10">
        <div className="flex flex-col max-w-sm md:max-w-2xl lg:max-w-3xl items-center lg:items-start justify-center text-center lg:text-left text-orange-50">
          <p className="mb-1 text-3xl md:text-5xl lg:text-6xl leading-none font-extrabold">
            An Education Provider with Unique 21st Century Camp Programs
          </p>
          <p className="lg:max-w-lg mb-10 mt-4 lg:mt-0 text-lg leading-5 lg:leading-7 font-medium">
            Customize a camp program that will effectively equip your students
            with a global perspective and the skills to succeed!
          </p>
          <Button
            iconRight={IoArrowForwardOutline}
            onClick={() => scrollTo("contact-us")}
            className="max-w-xs"
          >
            Contact Us
          </Button>
        </div>
      </div>
      <SectionOverflow className="absolute w-auto bottom-0 text-orange-50" />
    </div>
  );
}
