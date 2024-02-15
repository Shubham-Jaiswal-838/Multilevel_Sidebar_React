import SidebarItem from "./SidebarItem";
import items from "../data/sidebar.json";
import { useState } from "react";

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="sidebar">
      {items?.map((item, index) => (
        <SidebarItem
          key={index}
          item={item}
          activeLink={"/twitter"}
        />
      ))}
    </div>
  );
}
