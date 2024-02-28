import React, { useState } from "react";
import modules from "../data/modules.json";
import { Link, useLocation } from "react-router-dom";

export default function SidebarItem({ item, activeLink, open, setOpen }) {
    const { pathname, search } = useLocation();
  
    const handleClick = () => {
      setOpen(!open);
    };
  
    return !!modules[item?.key] ? (
      <div className="sidebar-item">
        <div
          className="sidebar-title cursor-pointer flex items-center"
          onClick={handleClick}
        >
          <span className="flex justify-center items-center gap-x-4">
            {item.icon && <img src={item.icon} className="w-7" alt="Icon" />}
            <p>{item.field_name}</p>
          </span>
          <i className={`bi-chevron-down ${open && "toggle-btn"}`}></i>
        </div>
        {open && (
          <div className="sidebar-content">
            {modules[item?.key].map((child, index) => (
              <SidebarItem
                key={child.field_name + index}
                item={child}
                activeLink={activeLink}
                open={open}
                setOpen={setOpen}
              />
            ))}
          </div>
        )}
      </div>
    ) : (
      <Link
        to={item?.link}
        className={`sidebar-item plain ${
          pathname + search === item?.link ? "active" : ""
        } flex gap-x-4 items-center`}
        onClick={() => setOpen(false)} // Close all sidebar titles when clicked
      >
        {item.icon && <img src={item.icon} className="w-7" alt="Icon" />}
        <p>{item.field_name}</p>
      </Link>
    );
  }