import { useState } from "react";
import Dropdown from "@ui/Dropdown";

function DropdownContainer({ order, handleOrderClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Dropdown
      isOpen={isOpen}
      order={order}
      handleToggleClick={handleToggleClick}
      handleOrderClick={handleOrderClick}
    />
  );
}

export default DropdownContainer;
