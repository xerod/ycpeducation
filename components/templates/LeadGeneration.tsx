import React from "react";
import InquiryForm from "../modules/InquiryForm";

export default function LeadGeneration() {
  return (
    <div className="relative flex py-20 px-16 bg-white">
      <div className="w-6/12 min-h-full border border-gray-200 rounded-xl shadow-xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.799747466763!2d103.85564361435517!3d1.2946916990557038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da196d5ab30ed1%3A0xe1f47f9f849858eb!2sYCP%20Singapore!5e0!3m2!1sen!2ssg!4v1578032060905!5m2!1sen!2ssg"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen={false}
        />
      </div>

      <div className="w-6/12 ml-16">
        <p className="text-4xl leading-10 font-bold">
          Download a copy of our introductory deck here!
        </p>
        <div className="mt-8">
          <InquiryForm />
        </div>
      </div>
    </div>
  );
}
