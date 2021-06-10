import { Button } from "@windmill/react-ui";
import React, { useEffect, useState } from "react";

import LocaleDropdown from "./LocaleDropdown";
import Logo from "../elements/Logo";

import scrollTo from "../../utils/scrollTo";

export default function Navbar(props) {
  const [isScrolled, setIsScrolled] = useState(true);

  useEffect(() => {
    const checkScrollingFunction = () => {
      const isPositionDown = window.scrollY < 100;
      setIsScrolled(isPositionDown);
    };

    document.addEventListener("scroll", checkScrollingFunction);

    return () => {
      document.removeEventListener("scroll", checkScrollingFunction);
    };
  }, []);

  const linkHoverStyle = () => {
    const base_class = "mr-1 transform focus:ring-0 ";

    if (isScrolled) {
      return (
        base_class + "text-amber-50 hover:text-orange-400 hover:bg-transparent"
      );
    } else {
      return (
        base_class +
        "hover:text-amber-700 active:text-amber-700 hover:bg-orange-200 hover:bg-opacity-60 active:bg-orange-200"
      );
    }
  };

  return (
    <div
      className={`fixed w-full py-3 px-16 z-50 transition duration-200 ${
        isScrolled ? `bg-transparent` : `bg-white border-b border-opacity-70`
      }`}
    >
      <div className="flex w-full items-center justify-between">
        <Logo
          height={isScrolled ? 38 : 28}
          className={isScrolled ? "text-orange-50" : "text-gray-500"}
        />

        <div className="flex items-center">
          <Button
            size="small"
            layout="link"
            className={linkHoverStyle()}
            onClick={() => scrollTo("hero-section")}
          >
            Home
          </Button>
          <Button
            size="small"
            layout="link"
            className={linkHoverStyle()}
            onClick={() => scrollTo("about-us")}
          >
            About Us
          </Button>
          <Button
            size="small"
            layout="link"
            className={linkHoverStyle()}
            onClick={() => scrollTo("our-courses")}
          >
            Our Courses
          </Button>
          <Button
            size="small"
            layout="link"
            className={linkHoverStyle()}
            onClick={() => scrollTo("contact-us")}
          >
            Contact Us
          </Button>
          <LocaleDropdown />
        </div>
      </div>
    </div>
  );
}
