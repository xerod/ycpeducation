import React from "react";
import InquiryForm from "../modules/InquiryForm";

export default function LeadGeneration() {
  return (
    <div
      id="contact-us"
      className="relative flex flex-col-reverse bg-white lg:px-10 xl:px-16 lg:py-20 lg:flex-row"
    >
      <div className="w-full pt-10 overflow-hidden border-gray-200 h-96 lg:min-h-full lg:pt-0 lg:shadow-xl lg:border lg:w-6/12 lg:rounded-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.799747466763!2d103.85564361435517!3d1.2946916990557038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da196d5ab30ed1%3A0xe1f47f9f849858eb!2sYCP%20Singapore!5e0!3m2!1sen!2ssg!4v1578032060905!5m2!1sen!2ssg"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen={false}
        />
      </div>

      <div className="w-full px-4 pb-10 lg:ml-16 lg:w-6/12">
        <p className="mt-8 text-3xl font-bold leading-7 lg:mt-0 lg:leading-10 lg:text-4xl">
          Download a copy of our introductory deck here!
        </p>
        <div className="mt-8">
          <InquiryForm />
        </div>
      </div>
    </div>
  );
}
