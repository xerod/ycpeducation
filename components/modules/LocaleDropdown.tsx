import { Badge, Button, Dropdown, DropdownItem } from "@windmill/react-ui";
import React, { useState } from "react";

export default function LocaleDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative">
      <Button
        onClick={toggleDropdown}
        className="bg-white active:bg-white"
        aria-label="Notifications"
        aria-haspopup="true"
        layout="outline"
        size="small"
      >
        EN
      </Button>

      <Dropdown align="right" isOpen={isOpen} onClose={() => {}}>
        <DropdownItem tag="a" href="#" className="justify-between">
          <span>🇺🇸 English</span>
        </DropdownItem>
        <DropdownItem tag="a" href="#" className="justify-between">
          <span>🇯🇵 Japanese</span>
        </DropdownItem>
        <DropdownItem tag="a" href="#" className="justify-between">
          <span>🇨🇳 Chinese</span>
        </DropdownItem>
      </Dropdown>
    </div>
  );
}
