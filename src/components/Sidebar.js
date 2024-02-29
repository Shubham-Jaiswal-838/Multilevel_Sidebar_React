import SidebarItem from "./SidebarItem";
import header from "../data/header.json";
import { useState } from "react";

export default function Sidebar() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index, hasContent) => {
    setOpenIndex(hasContent ? (index === openIndex ? null : index) : null);
  };

  return (
    <div className="sidebar">
      {header.sort((a, b) => b.priority - a.priority).map((item, index) => (
        <SidebarItem
          key={index}
          item={item}
          open={openIndex === index}
          setOpen={(hasContent) => handleItemClick(index, hasContent)}
        />
      ))}
    </div>
  );
}