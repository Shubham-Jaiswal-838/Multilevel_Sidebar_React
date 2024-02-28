import { useState } from "react";
import modules from "../data/modules.json";
import { Link, useLocation } from "react-router-dom";

export default function SidebarItem({ item, activeLink }) {

  const { pathname, search } = useLocation();
  const [open, setOpen] = useState(modules[item?.key]?.some((ele) => ele?.link == pathname));

  return !!modules[item?.key] ? (
    <div className={"sidebar-item"}>
      <div className="sidebar-title cursor-pointer flex items-center" onClick={()=>  setOpen(!open)}>
        <span className="flex justify-center items-center gap-x-4"> 
          {item.icon && <img src={item.icon} className="w-7"></img>}
         <p>{item.field_name}</p> 
        </span>
        <i className={`bi-chevron-down ${open && "toggle-btn"}`}></i>
      </div>
      { open && (
        <div className="sidebar-content">
          {modules[item?.key].map((child, index) => (
            <SidebarItem key={child.field_name + index} item={child} activeLink={activeLink} />
          ))}
        </div>
      )}
    </div>
  ) : (
    
    <Link
      to={item?.link}
      className={`sidebar-item plain ${pathname + search === item?.link ? "active" : ""} flex gap-x-4 items-center`}
    >
      {item.icon && <img src={item.icon} className="w-7"></img>}
     <p> {item.field_name}</p>
    </Link>
  );
}


