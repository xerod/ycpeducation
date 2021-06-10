import React from "react";
import Header from "../elements/Header";
import Card from "../elements/Card";
import { IoBusiness, IoGlobeOutline } from "react-icons/io5";
import LogoAlt from "../elements/LogoAlt";

export default function OurStrength() {
  return (
    <div className="relative z-10 px-4 py-16 overflow-hidden bg-white lg:py-32 lg:px-10 xl:px-16">
      <Header>
        Our Strength <br /> as YCP Education
      </Header>

      <div className="relative z-10 grid grid-flow-row gap-8 lg:grid-flow-col mt-14">
        <Card
          title="Global Footprint"
          body="With around 10 years in the education business in 5 countries, we have the deep expertise to curate programs that would be the most relevant for the current education scene"
          variant="transparent"
          icon={<IoGlobeOutline className="w-16 h-16" />}
        />
        <Card
          title="Managed by YCP Solidiance, a global consulting firm"
          body="Our curriculum is devised by our consultants from schools including University of Chicago and Cornell University, allowing us to understand and devise the right content to grow the leaders of tomorrow"
          variant="transparent"
          icon={<LogoAlt className="w-16 h-16" />}
        />
        <Card
          title="Focus on practical, real-world business skills"
          body="As a global consulting firm, we understand the importance of business skills, and we have a strong focus on imparting such real-world skills to children"
          variant="transparent"
          icon={<IoBusiness className="w-14 h-14" />}
        />
      </div>

      <LogoAlt className="absolute z-0 w-8/12 text-gray-100 top-20 -right-64 h-8/12 text-opacity-70" />
    </div>
  );
}
