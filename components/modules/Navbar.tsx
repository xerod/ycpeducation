import { Button } from "@windmill/react-ui";
import React, { useState } from "react";
import LocaleDropdown from "./LocaleDropdown";
import Logo from "../elements/Logo";

export default function Navbar(props) {
  const linkHoverStyle =
    "mr-1 text-orange-50 hover:text-white hover:bg-orange-300 active:text-orange-800 active:bg-orange-200 hover:bg-opacity-50";

  return (
    <div className="fixed top-4 right-16 left-16 z-50">
      <div className="flex w-full items-center justify-between">
        <Logo height="38" className="text-orange-50" />

        <div className="flex items-center">
          <Button layout="link" className={linkHoverStyle}>
            Home
          </Button>
          <Button layout="link" className={linkHoverStyle}>
            About Us
          </Button>
          <Button layout="link" className={linkHoverStyle}>
            Our Courses
          </Button>
          <Button layout="link" className={linkHoverStyle}>
            Contact Us
          </Button>
          <LocaleDropdown />
        </div>
      </div>
    </div>
  );
}
