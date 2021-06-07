import React from "react";

import Header from "../elements/Header";
import Card from "../elements/Card";

export default function OurValues() {
  return (
    <div className="relative px-16 min-h-screen bg-orange-50">
      <Header className="w-3/12">Our Value Proposition</Header>

      <div className="absolute bottom-0 left-0 right-0 h-64 bg-white" />

      <img src="/ornament.svg" className="absolute left-10 bottom-28" />

      <div className="absolute left-16 right-16 grid grid-flow-col gap-5 mt-10">
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
