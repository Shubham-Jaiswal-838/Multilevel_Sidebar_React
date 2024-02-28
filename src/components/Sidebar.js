import SidebarItem from "./SidebarItem";
import header from "../data/header.json";
import { useState } from "react";

export default function Sidebar() {

  return (
    <div className="sidebar">
      {header
        .sort((a, b) => b.priority - a.priority)
        ?.map((item, index) => (
          <SidebarItem
            key={index}
            item={item}
            activeLink={""}
          />
        ))}
    </div>
  );
}
