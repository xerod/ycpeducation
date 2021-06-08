import { Button } from "@windmill/react-ui";
import React, { useState } from "react";
import Link from "next/link";

import {
  IoChevronForward,
  IoCubeOutline,
  IoSchoolOutline,
} from "react-icons/io5";

export type CoursesCarouselDataType = Array<{
  course: string;
  description: Array<string>;
  forAge: string;
  skills: Array<string>;
  courseLevel?: Array<string>;
  image: string;
}>;

export default function CoursesCarousel() {
  const [selected, setSelected] = useState(0);

  const data: CoursesCarouselDataType = [
    {
      course: "Robotics",
      description: [
        "Our Robotics courses focus on developing the motor skills of students, through implementing a range of courses to challenge the critical thinking skills of students.",
        "Through learning to integrate the hardware and software of robotics, students will be able to appreciate the applications of robotics in their daily lives, allowing them to take the first step into their robotics journey.",
      ],
      forAge: "Ranging from age 6 to 18 years old",
      skills: ["Logical Thinking", "Analytical Skills", "Technological Skills"],
      courseLevel: [
        "Robotics I (Beginner)",
        "Robotics II (Intermediate)",
        "Robotics III (Advanced)",
      ],
      image: "/our-courses-robotics.jpg",
    },
    {
      course: "Coding",
      description: [
        "Our Coding courses focus on training students to appreciate the intricacies that go behind writing in a coding language, through introducing the basic concept of coding to students.",
        "Students can be expected to develop an interest towards coding following these series of courses.",
      ],
      forAge: "Ranging from age 6 to 18 years old",
      skills: ["Logical Thinking", "Analytical Skills", "Technological Skills"],
      courseLevel: ["Coding I (Beginner)", "Coding II (Intermediate)"],
      image: "/our-courses-coding.jpg",
    },
    {
      course: "3D Printing",
      description: [
        "Our 3D printing course aims to introduce the concept of 3D printing to students, for them to experience the technological advancements of traditional printing in a classroom setting.",
        "Students will also be allowed to keep their creations following the end of the lesson.",
      ],
      forAge: "Ranging from age 6 to 18 years old",
      skills: ["Logical Thinking", "Analytical Skills", "Technological Skills"],
      courseLevel: ["3D Printing I"],
      image: "/our-courses-3d-printing.jpg",
    },
    {
      course: "Clay Art",
      description: [
        "Our Clay Art sessions fuse elements of arts together with design, allowing students to appreciate the importance of design and the usage of materials to create their desired output.",
        "Clay art also provides a safe space for students to explore the endless possibilities of their imagination!",
      ],
      forAge: "Ranging from age 6 to 18 years old",
      skills: ["Creative Thinking", "Musical Skills", "Motor Skills"],
      courseLevel: ["Clay Art I"],
      image: "/our-courses-clay-art.jpg",
    },
    {
      course: "Language Class",
      description: [
        "Our Language Classes aim to serve as a platform for students to get acquainted with and understand the basics of a chosen language (English/Chinese (Mandarin)).",
        "It provides students with an opportunity to pick up an important language skill, while providing them a platform to practice the usage of the language.",
      ],
      forAge: "Ranging from age 6 to 18 years old",
      skills: ["Creative Thinking", "Musical Skills", "Motor Skills"],
      courseLevel: ["Adjusted based on proficiency"],
      image: "/our-courses-language-class.jpg",
    },
    {
      course: "Sports",
      description: [
        "Our camp courses are never complete without elements of sports! A lot of important soft skills like teamwork and tenacity are best taught through outdoor activities, like basketball and soccer.",
        "We have teamed up with Singapore’s premier basketball course provider, SG Basketball, to allow students to orientate themselves with the workings of basketball, and to take away important soft skill concepts!",
      ],
      forAge: "Ranging from age 6 to 18 years old",
      skills: ["Creative Thinking", "Teamwork Capability", "Motor Skills"],
      courseLevel: ["Basketball Program", "Soccer Program"],
      image: "/our-courses-sports.jpg",
    },
    {
      course: "Kids Entrepreneurship",
      description: [
        "Our flagship Kids’ Entrepreneurship course focuses on imparting basic finance skills (e.g. time value of money, budgeting, savings) to children through digestible examples, in order to allow them to get a head start at understanding the importance of being prudent with money.",
      ],
      forAge: "Ranging from age 6 to 18 years old",
      skills: ["Problem Solving", "Leadership Skills", "Communication Skills"],
      courseLevel: ["Entrepreneurship Program"],
      image: "/our-courses-kids-entrepreneurship.jpg",
    },
    {
      course: "Design Thinking",
      description: [
        "Our Design Thinking courses focus on encouraging students to think of solutions to societal problems, while imparting a message that every product has to be created with the end user in mind.",
        "Students will be expected to gain a deeper appreciation for the intricacies of ideation and design.",
      ],
      forAge: "Ranging from age 6 to 18 years old",
      skills: ["Problem Solving", "Leadership Skills", "Communication Skills"],
      courseLevel: [
        "Design Thinking I (Beginner)",
        "Design Thinking II (Advanced)",
      ],
      image: "/our-courses-design-thinking.jpg",
    },
    {
      course: "Apollo Program",
      description: [
        "The Apollo Program aims to impart valuable business concepts and skills to university students. Students will be taken through a series of pre-camp learning materials, before pitching a business idea to the professionals of our management consulting arm, YCP Solidiance.",
        "Students can be expected to gain practical business skills, while possibly earning an offer to join our consulting arm for an internship!",
      ],
      forAge: "To be announce",
      skills: ["Problem Solving", "Leadership Skills", "Communication Skills"],
      courseLevel: ["Full Apollo Program"],
      image: "/our-courses-apollo-program.jpg",
    },
  ];

  return (
    <div className="flex">
      <div className="max-w-md prose mr-24 mt-9">
        <h2 className="pl-3 mb-2 leading-none font-medium text-amber-800 text-opacity-80 border-l-[3px] border-orange-500">
          {data[selected].course}
        </h2>

        {data[selected].description.map((item) => (
          <p key={item} className="pl-4 text-amber-800 text-opacity-80">
            {item}
          </p>
        ))}

        <Button
          layout="link"
          iconRight={IoChevronForward}
          className=" text-amber-600 hover:bg-transparent"
        >
          I'm interested
        </Button>
      </div>

      <div className="relative max-w-2xl w-full">
        <div
          className="flex mb-4 px-4 overflow-x-scroll whitespace-nowrap scrollbar-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(90deg,transparent,#000 16px,#000 calc(100% - 16px),transparent)",
            maskImage:
              "linear-gradient(90deg,transparent,#000 16px,#000 calc(100% - 16px),transparent)",
          }}
        >
          {data.map((item, index) => {
            const isSelected = selected === index;

            const bgColour = isSelected
              ? "bg-amber-300 hover:bg-amber-400"
              : "hover:text-orange-600";

            return (
              <span
                key={item.course}
                onClick={() => setSelected(index)}
                className={`inline-block w-auto py-1 px-4 leading-6 font-medium text-amber-900 rounded-full transition-all duration-300 hover:cursor-pointer ${bgColour}`}
              >
                {item.course}
              </span>
            );
          })}
        </div>

        <div className="flex w-full border border-gray-100 rounded-xl bg-white shadow-lg overflow-hidden">
          <div className="min-w-max px-12 py-8">
            <div className="max-w-prose mb-6">
              <h3 className="text-xl leading-10 text-gray-700 font-semibold">
                Skills
              </h3>
              <div className="leading-6">
                {data[selected].skills.map((item) => (
                  <div className="flex items-center mb-2">
                    <IoCubeOutline className="w-5 h-5 text-emerald-600 mr-2" />
                    <p className="text-gray-500">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {data[selected].courseLevel.length ? (
              <div className="max-w-xs mb-6">
                <h3 className="text-xl leading-10 text-gray-700 font-semibold">
                  Course Level
                </h3>
                <div className="leading-6">
                  {data[selected].courseLevel.map((item) => (
                    <div className="flex items-center mb-2">
                      <IoSchoolOutline className="w-5 h-5 text-indigo-600 mr-2" />
                      <p className="text-gray-500">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mb-6">
              <h3 className="text-xl leading-8 text-gray-700 font-semibold">
                Suitable Age
              </h3>
              <p className="text-gray-500">{data[selected].forAge}</p>
            </div>

            <div className="max-w-xs mb-6">
              <h3 className="text-xl leading-8 text-gray-700 font-semibold">
                Courses Fee
              </h3>
              <p className="text-gray-500">
                Please{" "}
                <span className="text-amber-600 hover:cursor-pointer hover:text-amber-700 hover:underline">
                  contact us
                </span>{" "}
                for more information or download our introductory deck{" "}
                <span className="text-amber-600 hover:cursor-pointer hover:text-amber-700 hover:underline">
                  here
                </span>
              </p>
            </div>
          </div>

          <div>
            <img
              className="min-h-full max-w-md object-cover"
              src={data[selected].image}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
