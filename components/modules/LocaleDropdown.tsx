import { Button, Dropdown, DropdownItem, Transition } from "@windmill/react-ui";
import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

export default function LocaleDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative">
      <Button
        onClick={toggleDropdown}
        className="bg-white border-0 active:bg-white focus:bg-white"
        aria-label="Notifications"
        aria-haspopup="true"
        layout="outline"
        iconRight={IoChevronDown}
      >
        EN
      </Button>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Dropdown align="right" isOpen={isOpen} onClose={() => {}}>
          <DropdownItem tag="a" href="#" className="justify-between">
            <span className="py-1">🇺🇸 English</span>
          </DropdownItem>
          <DropdownItem tag="a" href="#" className="justify-between">
            <span className="py-1">🇯🇵 Japanese</span>
          </DropdownItem>
          <DropdownItem tag="a" href="#" className="justify-between">
            <span className="py-1">🇨🇳 Chinese</span>
          </DropdownItem>
        </Dropdown>
      </Transition>
    </div>
  );
}
