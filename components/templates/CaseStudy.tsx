import React from "react";
import Image from "next/image";
import Header from "../elements/Header";
import Card from "../elements/Card";
import imageLoader from "../../utils/imageLoader";

export default function CaseStudy() {
  return (
    <div className="py-16 lg:py-32 md:px-10 xl:px-16 bg-amber-50">
      <Header className="text-center">Case Study</Header>
      <div className="relative grid grid-flow-row gap-8 px-4 lg:grid-flow-col mt-14">
        <Image
          loader={imageLoader}
          src="/ornament.svg"
          width="100%"
          height="100%"
          className="absolute transform rotate-90 -left-20 -bottom-16 lg:bottom-0 lg:left-4"
          alt=""
        />
        <Card
          title="Thai group with 40 students from 10-11 years old, engaging in a 2-day robotics course"
          image="/case-study-1.jpg"
          variant="cover"
        />
        <Card
          title="Thai group with 40 students from 10-11 years old, engaging in a 2-day robotics course"
          image="/case-study-2.jpg"
          variant="cover"
        />
      </div>
    </div>
  );
}
