import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MenuItem } from "./MenuItem";
import greenduck from "../Image/greenduck.PNG";
import { useSelector } from "react-redux";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const profile = useSelector((state) => state.user)
  const token = useSelector((state) => state.token);
  console.log(profile)
  return (
    <div className="container">
      <div style={{ width: isOpen ? "250px" : "60px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            {token ? (
              <img className="greenduck_logo" src={profile.imageUrl} alt="name" />
            ) : (
              <img className="greenduck_logo" src={greenduck} alt="greenduck" />
            )}
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            {isOpen ? (
              <FaTimes onClick={toggle} />
            ) : (
              <FaBars onClick={toggle} />
            )}
          </div>
        </div>
        {MenuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
        <div>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
