import React from "react";
import { Button } from "@windmill/react-ui";
import SectionOverflow from "../elements/SectionOverflow";
import { IoArrowForwardOutline, IoCallSharp } from "react-icons/io5";
import scrollTo from "../../utils/scrollTo";

export default function HeroSection() {
  return (
    <div
      id="hero-section"
      className="min-h-screen"
      style={{
        backgroundImage: "url('/image5.jpg')",
      }}
    >
      <div className="flex h-screen w-8/12 items-center">
        <div className="mx-16 text-orange-50">
          <p className="mb-1 text-6xl leading-none font-extrabold">
            An Education Provider with Unique 21st Century Camp Programs
          </p>
          <p className="mb-10 text-lg leading-7 font-medium">
            Customize a camp program that will effectively equip your students
            with a global perspective and the skills to succeed!
          </p>
          <Button
            iconRight={IoArrowForwardOutline}
            onClick={() => scrollTo("contact-us")}
          >
            Contact Us
          </Button>
        </div>
      </div>
      <SectionOverflow
        height="6rem"
        width="100%"
        className="-mt-24 w-full text-orange-50"
      />
    </div>
  );
}
