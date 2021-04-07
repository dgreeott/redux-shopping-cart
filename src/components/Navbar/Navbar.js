import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import CartPage from "../Cart/Cart";

import "./Navbar.css";

export default function Navbar() {
  const [sidebar, setSideBar] = useState(false);

  const showSidebar = () => setSideBar(!sidebar);

  return (
    <>
      <div className="navbar justify-content-end">
        <div className="col-sm-1">
          <Link to="#" className="menu-bars">
            <FiShoppingCart onClick={showSidebar} />
          </Link>
        </div>
      </div>
      <IconContext.Provider value={{ color: "#ffffff" }}>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </Link>
            </li>
            <div className="row">
              <div className="col-sm-11">
                <CartPage />
              </div>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
