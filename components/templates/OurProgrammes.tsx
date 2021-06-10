import React from "react";

import {
  IoArrowForward,
  IoRocketSharp,
  IoSettingsSharp,
  IoSunny,
} from "react-icons/io5";
import Image from "next/image";

import Header from "../elements/Header";
import ListCard, { ListCardDataType } from "../elements/ListCard";
import { Button } from "@windmill/react-ui";
import scrollTo from "../../utils/scrollTo";

export default function OurProgrammes() {
  const data: ListCardDataType = [
    {
      title: "Half-Day Program",
      body: "Partners can pick and choose from all the half-day program we offer to suit their schedules",
      iconLeft: <IoSunny className="w-6 h-6" />,
    },
    {
      title: "Customized Camp",
      body: "Partners can leave the end-to-end camp planning process to us, with a comprehensive package including programmes that are tailored to their preference",
      iconLeft: <IoSettingsSharp className="w-6 h-6" />,
    },
    {
      title: "Apollo Program",
      body: "Partner schools will be able to send their students to Singapore to equip themselves with business skills from one of Asia’s top entrepreneurial hubs (currently in Japan only)",
      iconLeft: <IoRocketSharp className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen mt-32 lg:px-10 xl:px-16 bg-white">
      <Header className="mx-4">Our Programmes</Header>

      <div className="flex mt-10">
        <ListCard data={data} />

        <div className="relative items-center justify-center">
          <img
            src="/ornament.svg"
            className="absolute hidden lg:block left-12 bottom-12"
          />
          <div className="hidden lg:block">
            <Image width={600} height={600} src="/our-programmes.png" />
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center my-16">
        <Button
          size="large"
          iconRight={IoArrowForward}
          className="shadow-xl"
          onClick={() => scrollTo("contact-us")}
        >
          Fill Out Inquiry Form
        </Button>
      </div>
    </div>
  );
}
