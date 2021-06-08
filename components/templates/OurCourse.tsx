import React from "react";
import Header from "../elements/Header";
import SectionOverflow from "../elements/SectionOverflow";
import CoursesCarousel from "../modules/CoursesCarousel";

export default function OurCourse() {
  return (
    <div className="relative min-h-screen px-16 bg-orange-50">
      <SectionOverflow
        height="6rem"
        width="100%"
        className="absolute bottom-0 -mt-24 w-full text-white"
        style={{
          transform: "scale(-1, 1)",
        }}
      />

      <div className="pt-12">
        <Header>Our Course</Header>
        <p className="max-w-3xl mt-4 text-amber-800 text-opacity-80">
          YCP Education offers a holistic range of programs, spanning from
          STEM-related lessons to artistic appreciation sessions, for children
          from the ages of 6 to 18. As part of our customized camp service, you
          will be able to pluck and paste the relevant programs for the camp
          group you are looking to bring to Singapore from the following list.{" "}
        </p>
      </div>

      <div className="mt-4">
        <CoursesCarousel />
      </div>
    </div>
  );
}
