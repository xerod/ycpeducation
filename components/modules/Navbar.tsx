import { Button } from "@windmill/react-ui";
import React, { useEffect, useState } from "react";
import LocaleDropdown from "./LocaleDropdown";
import Logo from "../elements/Logo";

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
        base_class + "text-amber-50 hover:text-orange-200 hover:bg-transparent"
      );
    } else {
      return (
        base_class +
        "hover:text-orange-700 active:text-amber-700 hover:bg-orange-100 active:bg-orange-200"
      );
    }
  };

  return (
    <div
      className={`fixed w-full py-4 px-16 z-50 transition duration-200 ${
        isScrolled ? `bg-transparent` : `bg-white border-b`
      }`}
    >
      <div className="flex w-full items-center justify-between">
        <Logo
          height="38"
          className={isScrolled ? "text-orange-50" : "text-gray-900"}
        />

        <div className="flex items-center">
          <Button layout="link" className={linkHoverStyle()}>
            Home
          </Button>
          <Button layout="link" className={linkHoverStyle()}>
            About Us
          </Button>
          <Button layout="link" className={linkHoverStyle()}>
            Our Courses
          </Button>
          <Button layout="link" className={linkHoverStyle()}>
            Contact Us
          </Button>
          <LocaleDropdown />
        </div>
      </div>
    </div>
  );
}
