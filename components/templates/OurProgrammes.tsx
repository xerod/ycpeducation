import React from "react";

import {
  IoArrowForward,
  IoRocketSharp,
  IoSettingsSharp,
  IoSunny,
} from "react-icons/io5";
import Image from "next/image";

import Header from "../elements/Header";
import ListCard, { DataType } from "../elements/ListCard";
import { Button } from "@windmill/react-ui";

export default function OurProgrammes() {
  const data: DataType = [
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
    <div className="min-h-screen px-16 bg-white">
      <Header className="m">Our Programmes</Header>

      <div className="flex mt-10">
        <ListCard data={data} />

        <div className="relative items-center justify-center">
          <img src="/ornament.svg" className="absolute left-12 bottom-12" />
          <div className="ml-16">
            <Image width={600} height={600} src="/our-programmes.png" />
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center my-16">
        <Button size="large" iconRight={IoArrowForward} className="shadow-xl">
          Fill Out Inquiry Form
        </Button>
      </div>
    </div>
  );
}
