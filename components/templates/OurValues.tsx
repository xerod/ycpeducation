import React from "react";
import Image from "next/image";

import Header from "../elements/Header";
import Card from "../elements/Card";
import imageLoader from "../../utils/imageLoader";

export default function OurValues() {
  return (
    <div className="relative flex flex-col items-start min-h-screen py-16 md:items-center lg:items-start lg:px-10 xl:px-16 bg-orange-50">
      <Header className="w-6/12 ml-4 text-left lg:w-3/12 lg:mx-0">
        Our Value Proposition
      </Header>

      <div className="absolute bottom-0 left-0 right-0 hidden h-64 bg-white lg:block" />

      <Image
        loader={imageLoader}
        src="/ornament.svg"
        width="100%"
        height="100%"
        className="absolute z-0 hidden lg:block left-10 bottom-28 "
        alt=""
      />

      <div className="relative z-10 grid grid-flow-row gap-5 mt-10 lg:grid-flow-col">
        <Card
          title="Flexibility in planning your camps program"
          body="We are able to customize programs based on your requirements (age group, preferred English level), allowing you to comfortably plan your camps in Singapore"
          image="/our-value-1.jpg"
        />
        <Card
          title="Providing a wide range of courses"
          body="We have a wide range of courses ranging from STEM to language and art courses, saving you from the need to contact multiple course providers"
          image="/our-value-2.jpg"
        />
        <Card
          title="Connecting on a personalized level"
          body="Being an international team, we take the time to understand your requirements in your local language, with a quick 48-hour response time "
          image="/our-value-3.jpg"
        />
      </div>
    </div>
  );
}
