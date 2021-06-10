import React from "react";
import Header from "../elements/Header";
import QuoteIcon from "../elements/QuoteIcon";

export default function ClientTestimonials() {
  return (
    <div className="relative py-32 bg-white md:px-10 xl:px-16">
      <Header className="text-center">Client Testimonials</Header>
      <div className="px-4 mt-8 lg:px-32">
        <QuoteIcon
          height="96"
          className="-mb-16 text-orange-50 lg:text-amber-100"
        />
        <p className="text-2xl leading-7 text-left text-gray-800 md:text-center lg:leading-9 lg:text-3xl font-extralight">
          “Our child has truly enjoyed himself in the camp! He gained more
          confidence in speaking English and has taken an interest in robotics
          and coding after the camp”
        </p>
        <p className="mt-4 text-base font-medium leading-6 text-left text-gray-600 lg:leading-7 md:text-center lg:text-xl">
          From the parent of a participant of B2C Summer Camp
        </p>
      </div>
    </div>
  );
}
