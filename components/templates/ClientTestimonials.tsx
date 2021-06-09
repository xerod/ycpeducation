import React from "react";
import Header from "../elements/Header";
import QuoteIcon from "../elements/QuoteIcon";

export default function ClientTestimonials() {
  return (
    <div className="relative py-32 px-16 bg-white">
      <Header className="text-center">Client Testimonials</Header>
      <div className="mt-8 px-32">
        <QuoteIcon height="96" className="-mb-16 text-amber-100" />
        <p className="text-3xl leading-9 font-extralight text-center text-gray-800">
          “Our child has truly enjoyed himself in the camp! He gained more
          confidence in speaking English and has taken an interest in robotics
          and coding after the camp”
        </p>
        <p className="mt-4 text-xl leading-7 font-medium text-center text-gray-600">
          From the parent of a participant of B2C Summer Camp
        </p>
      </div>
    </div>
  );
}
