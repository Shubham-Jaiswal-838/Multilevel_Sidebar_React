import { useState } from "react";

export default function SidebarItem({ item, activeLink }) {
  const [open, setOpen] = useState(false);

  if (item.childrens) {
    return (
      <div className={"sidebar-item"}>
        <div className="sidebar-title" onClick={() => setOpen(!open)}>
          <span>
            {item.icon && <i className={item.icon}></i>}
            {item.title}
          </span>
          <i className="bi-chevron-down toggle-btn"></i>
        </div>
        {open && (
          <div className="sidebar-content">
            {item.childrens.map((child, index) => (
              <SidebarItem
                key={child.title + index}
                item={child}
                activeLink={activeLink}
              />
            ))}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <a
        href={"#"}
        className={`sidebar-item plain ${
          activeLink === item.path ? "active" : ""
        }`}
      >
        {item.icon && <i className={item.icon}></i>}
        {item.title}
      </a>
    );
  }
}
