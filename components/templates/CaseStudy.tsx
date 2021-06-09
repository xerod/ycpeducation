import React from "react";
import Header from "../elements/Header";
import Card from "../elements/Card";

export default function CaseStudy() {
  return (
    <div className="py-32 px-16 bg-amber-50">
      <Header className="text-center">Case Study</Header>
      <div className="relative grid grid-flow-col gap-8 mt-14">
        <img
          src="/ornament.svg"
          className="absolute left-4 bottom-0 transform rotate-90"
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
