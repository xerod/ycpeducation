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
import imageLoader from "../../utils/imageLoader";

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
    <div className="min-h-screen mt-32 bg-white lg:px-10 xl:px-16">
      <Header className="mx-4">Our Programmes</Header>

      <div className="flex mt-10">
        <ListCard data={data} />

        <div className="relative items-center justify-center">
          <Image
            loader={imageLoader}
            src="/ornament.svg"
            width="100%"
            height="100%"
            className="absolute hidden lg:block left-12 bottom-12"
            alt=""
          />

          <div className="hidden lg:block">
            <Image
              loader={imageLoader}
              width={600}
              height={600}
              src="/our-programmes.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full my-16">
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
